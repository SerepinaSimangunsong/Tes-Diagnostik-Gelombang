/**
 * Aplikasi Ujian CBT Diagnostik Tiga Tingkat (Three-Tier Diagnostic Test)
 * 3 Kategori Pemahaman:
 * 1. Paham Ilmiah -> Tier 1 Benar, Tier 2 Benar, Tier 3 Yakin
 * 2. Miskonsepsi -> Jawaban & alasan bertentangan, yakin pada konsep keliru, atau menebak
 * 3. Tidak Paham Konsep -> Tier 1 Salah, Tier 2 Salah, Tier 3 Tidak Yakin (atau tidak diisi lengkap)
 *
 * Dilengkapi Mode Guru (PIN Default: 1234)
 */

const TEACHER_PIN_KEY = "cbt_gelombang_teacher_pin_v1";
const RESULTS_STORAGE_KEY = "cbt_gelombang_student_results_v1";

function getTeacherPin() {
    return localStorage.getItem(TEACHER_PIN_KEY) || "1234";
}

function getStoredResults() {
    try {
        return JSON.parse(localStorage.getItem(RESULTS_STORAGE_KEY) || "[]");
    } catch (e) {
        return [];
    }
}

function saveStudentResult(record) {
    const list = getStoredResults();
    list.unshift(record);
    localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(list));
}

let QUESTION_BANK = getQuestionBank();

const state = {
    studentName: "",
    studentClass: "",
    selectedLevel: 1,
    currentIndex: 0,
    answers: [],
    timeRemaining: 15 * 60,
    timerInterval: null,
    diagnosticResults: [],
    teacherEditLevel: 1,
    teacherEditIndex: 0
};

const viewSetup = document.getElementById("view-setup");
const viewExam = document.getElementById("view-exam");
const viewResult = document.getElementById("view-result");
const viewTeacher = document.getElementById("view-teacher");

function showView(viewEl) {
    [viewSetup, viewExam, viewResult, viewTeacher].forEach(v => v.classList.add("hidden"));
    viewEl.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderLevelCards() {
    QUESTION_BANK = getQuestionBank();
    const container = document.getElementById("level-cards-container");
    container.innerHTML = "";

    const badgeColors = {
        teal: "text-teal-700 bg-teal-100",
        emerald: "text-emerald-700 bg-emerald-100",
        blue: "text-blue-700 bg-blue-100",
        rose: "text-rose-700 bg-rose-100"
    };

    Object.keys(QUESTION_BANK).forEach(lvlKey => {
        const lvl = parseInt(lvlKey, 10);
        const data = QUESTION_BANK[lvl];
        const isSelected = state.selectedLevel === lvl;
        const badgeStyle = badgeColors[data.badgeColor] || "text-blue-700 bg-blue-100";

        const card = document.createElement("div");
        card.dataset.level = lvl;
        card.className = `level-card cursor-pointer p-4 rounded-xl border transition ${
            isSelected
                ? "border-2 border-blue-600 bg-blue-50/70 ring-2 ring-blue-600"
                : "border-slate-200 bg-white hover:border-blue-400"
        }`;
        card.innerHTML = `
            <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-bold uppercase tracking-wider ${badgeStyle} px-2.5 py-0.5 rounded-full">${data.badgeText}</span>
                <span class="text-xs font-semibold text-slate-500">${data.questions.length} Soal</span>
            </div>
            <h3 class="font-bold text-slate-800 mt-1.5 text-sm md:text-base">${data.title}</h3>
            <p class="text-xs text-slate-600 mt-1">${data.subtitle}</p>
        `;
        card.addEventListener("click", () => {
            state.selectedLevel = lvl;
            renderLevelCards();
        });
        container.appendChild(card);
    });
}

function startExam() {
    const nameInput = document.getElementById("input-name").value.trim();
    const classInput = document.getElementById("input-class").value.trim();

    if (!nameInput) {
        alert("Silakan masukkan Nama Lengkap peserta terlebih dahulu.");
        document.getElementById("input-name").focus();
        return;
    }

    QUESTION_BANK = getQuestionBank();
    state.studentName = nameInput;
    state.studentClass = classInput || "Umum";
    state.currentIndex = 0;

    const levelData = QUESTION_BANK[state.selectedLevel];
    state.timeRemaining = levelData.durationMinutes * 60;
    state.answers = levelData.questions.map(() => ({
        tier1: null,
        tier2: null,
        tier3: null,
        ragu: false
    }));

    document.getElementById("header-student-info").textContent = `${state.studentName} (${state.studentClass})`;
    document.getElementById("header-level-badge").textContent = levelData.title;

    showView(viewExam);
    renderNavGrid();
    renderQuestion(0);
    startTimer();
}

function startTimer() {
    clearInterval(state.timerInterval);
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();

        if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            alert("Waktu ujian telah habis! Sistem akan otomatis mengumpulkan jawaban Anda.");
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    const timerEl = document.getElementById("exam-timer");
    timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (state.timeRemaining <= 60) {
        timerEl.classList.add("text-red-600", "animate-pulse");
    } else {
        timerEl.classList.remove("text-red-600", "animate-pulse");
    }
}

function renderNavGrid() {
    const grid = document.getElementById("nav-grid");
    grid.innerHTML = "";

    state.answers.forEach((ans, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = idx + 1;

        const isComplete = ans.tier1 !== null && ans.tier2 !== null && ans.tier3 !== null;
        const isPartial = (ans.tier1 !== null || ans.tier2 !== null || ans.tier3 !== null) && !isComplete;

        let colorClass = "bg-white text-slate-700 border-slate-300 hover:bg-slate-100";
        if (ans.ragu) {
            colorClass = "bg-amber-400 text-amber-950 border-amber-500 font-bold";
        } else if (isComplete) {
            colorClass = "bg-emerald-600 text-white border-emerald-700 font-bold";
        } else if (isPartial) {
            colorClass = "bg-sky-100 text-sky-800 border-sky-400 font-semibold";
        }

        const activeClass = idx === state.currentIndex ? "active ring-2 ring-blue-600 ring-offset-1" : "";

        btn.className = `nav-btn h-11 rounded-lg border text-sm font-medium flex items-center justify-center ${colorClass} ${activeClass}`;
        btn.addEventListener("click", () => renderQuestion(idx));
        grid.appendChild(btn);
    });

    const completedCount = state.answers.filter(a => a.tier1 !== null && a.tier2 !== null && a.tier3 !== null).length;
    document.getElementById("progress-summary").textContent = `${completedCount} / ${state.answers.length} Soal Lengkap`;
}

function renderQuestion(index) {
    state.currentIndex = index;
    const levelData = QUESTION_BANK[state.selectedLevel];
    const q = levelData.questions[index];
    const ans = state.answers[index];

    document.getElementById("q-number-badge").textContent = `SOAL NO. ${index + 1}`;
    document.getElementById("q-text").textContent = q.question;

    const tier1Container = document.getElementById("tier1-options");
    tier1Container.innerHTML = "";
    q.options.forEach((opt, optIdx) => {
        const isSelected = ans.tier1 === optIdx;
        const label = document.createElement("label");
        label.className = `option-card flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer ${isSelected ? "selected" : "border-slate-200 bg-white"}`;
        label.innerHTML = `
            <input type="radio" name="tier1" value="${optIdx}" class="mt-1 accent-blue-600" ${isSelected ? "checked" : ""}>
            <span class="text-sm md:text-base text-slate-800 leading-relaxed">${opt}</span>
        `;
        label.addEventListener("click", () => {
            state.answers[index].tier1 = optIdx;
            renderQuestion(index);
            renderNavGrid();
        });
        tier1Container.appendChild(label);
    });

    const tier2Container = document.getElementById("tier2-options");
    tier2Container.innerHTML = "";
    q.reasons.forEach((reason, rIdx) => {
        const isSelected = ans.tier2 === rIdx;
        const label = document.createElement("label");
        label.className = `option-card flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer ${isSelected ? "selected" : "border-slate-200 bg-white"}`;
        label.innerHTML = `
            <input type="radio" name="tier2" value="${rIdx}" class="mt-1 accent-indigo-600" ${isSelected ? "checked" : ""}>
            <span class="text-sm text-slate-700 leading-relaxed">${reason}</span>
        `;
        label.addEventListener("click", () => {
            state.answers[index].tier2 = rIdx;
            renderQuestion(index);
            renderNavGrid();
        });
        tier2Container.appendChild(label);
    });

    const btnYakin = document.getElementById("btn-tier3-yakin");
    const btnTidakYakin = document.getElementById("btn-tier3-tidak");

    btnYakin.className = `flex-1 py-3 px-4 rounded-xl border text-sm font-semibold transition flex items-center justify-center gap-2 ${
        ans.tier3 === "yakin"
            ? "bg-blue-600 text-white border-blue-700 shadow-sm"
            : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
    }`;
    btnTidakYakin.className = `flex-1 py-3 px-4 rounded-xl border text-sm font-semibold transition flex items-center justify-center gap-2 ${
        ans.tier3 === "tidak_yakin"
            ? "bg-slate-700 text-white border-slate-800 shadow-sm"
            : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
    }`;

    document.getElementById("check-ragu").checked = ans.ragu;

    document.getElementById("btn-prev").disabled = index === 0;
    const btnNext = document.getElementById("btn-next");
    if (index === levelData.questions.length - 1) {
        btnNext.innerHTML = `<i class="fa-solid fa-check-double mr-1"></i> Selesai & Lihat Hasil`;
        btnNext.classList.remove("bg-blue-600", "hover:bg-blue-700");
        btnNext.classList.add("bg-emerald-600", "hover:bg-emerald-700");
    } else {
        btnNext.innerHTML = `Selanjutnya <i class="fa-solid fa-chevron-right ml-1"></i>`;
        btnNext.classList.remove("bg-emerald-600", "hover:bg-emerald-700");
        btnNext.classList.add("bg-blue-600", "hover:bg-blue-700");
    }

    renderNavGrid();
}

function confirmFinishExam() {
    const incomplete = state.answers.filter(a => a.tier1 === null || a.tier2 === null || a.tier3 === null).length;
    const msg = incomplete > 0
        ? `Masih ada ${incomplete} soal yang belum diisi lengkap (Tier 1, Tier 2, & Keyakinan). Yakin ingin mengakhiri ujian sekarang?`
        : "Semua soal sudah terisi lengkap. Yakin ingin mengumpulkan jawaban dan melihat hasil diagnostik?";

    if (confirm(msg)) {
        finishExam();
    }
}

function evaluateThreeTier(q, ans) {
    const isUnanswered = ans.tier1 === null || ans.tier2 === null || ans.tier3 === null;
    if (isUnanswered) {
        return {
            code: "tidak_paham",
            label: "Tidak Paham Konsep",
            badgeClass: "bg-slate-200 text-slate-800 border-slate-300"
        };
    }

    const t1Correct = ans.tier1 === q.correctAnswer;
    const t2Correct = ans.tier2 === q.correctReason;
    const isConfident = ans.tier3 === "yakin";

    if (t1Correct && t2Correct && isConfident) {
        return {
            code: "paham_ilmiah",
            label: "Paham Ilmiah",
            badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300"
        };
    }

    if (!t1Correct && !t2Correct && !isConfident) {
        return {
            code: "tidak_paham",
            label: "Tidak Paham Konsep",
            badgeClass: "bg-slate-200 text-slate-800 border-slate-300"
        };
    }

    return {
        code: "miskonsepsi",
        label: "Miskonsepsi",
        badgeClass: "bg-rose-100 text-rose-800 border-rose-300"
    };
}

function finishExam() {
    clearInterval(state.timerInterval);
    const levelData = QUESTION_BANK[state.selectedLevel];

    const counts = {
        paham_ilmiah: 0,
        miskonsepsi: 0,
        tidak_paham: 0
    };

    state.diagnosticResults = levelData.questions.map((q, idx) => {
        const ans = state.answers[idx];
        const diagnosis = evaluateThreeTier(q, ans);
        counts[diagnosis.code]++;
        return {
            index: idx + 1,
            question: q,
            answer: ans,
            diagnosis
        };
    });

    const total = levelData.questions.length;
    const timestamp = new Date().toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    saveStudentResult({
        id: Date.now(),
        timestamp,
        studentName: state.studentName,
        studentClass: state.studentClass,
        level: state.selectedLevel,
        levelTitle: levelData.title,
        totalQuestions: total,
        counts,
        details: state.diagnosticResults
    });

    document.getElementById("res-student-name").textContent = state.studentName;
    document.getElementById("res-student-class").textContent = state.studentClass;
    document.getElementById("res-level-title").textContent = levelData.title;

    document.getElementById("count-paham-ilmiah").textContent = `${counts.paham_ilmiah} (${Math.round((counts.paham_ilmiah / total) * 100)}%)`;
    document.getElementById("count-miskonsepsi").textContent = `${counts.miskonsepsi} (${Math.round((counts.miskonsepsi / total) * 100)}%)`;
    document.getElementById("count-tidak-paham").textContent = `${counts.tidak_paham} (${Math.round((counts.tidak_paham / total) * 100)}%)`;

    document.getElementById("bar-paham-ilmiah").style.width = `${(counts.paham_ilmiah / total) * 100}%`;
    document.getElementById("bar-miskonsepsi").style.width = `${(counts.miskonsepsi / total) * 100}%`;
    document.getElementById("bar-tidak-paham").style.width = `${(counts.tidak_paham / total) * 100}%`;

    renderDiagnosticDetails("all", "diagnostic-list", state.diagnosticResults);
    showView(viewResult);
}

function renderDiagnosticDetails(filterCode, targetContainerId, resultsList) {
    const container = document.getElementById(targetContainerId);
    container.innerHTML = "";

    const filtered = filterCode === "all"
        ? resultsList
        : resultsList.filter(item => item.diagnosis.code === filterCode);

    if (filtered.length === 0) {
        container.innerHTML = `<div class="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">Tidak ada soal pada kategori ini.</div>`;
        return;
    }

    filtered.forEach(item => {
        const { index, question, answer, diagnosis } = item;
        const userOptText = answer.tier1 !== null ? question.options[answer.tier1] : "Tidak dijawab";
        const correctOptText = question.options[question.correctAnswer];

        const userReasonText = answer.tier2 !== null ? question.reasons[answer.tier2] : "Tidak dijawab";
        const correctReasonText = question.reasons[question.correctReason];

        const confText = answer.tier3 === "yakin" ? "Yakin" : answer.tier3 === "tidak_yakin" ? "Tidak Yakin" : "Tidak diisi";

        const card = document.createElement("div");
        card.className = "bg-white rounded-xl border border-slate-200 p-5 shadow-sm";
        card.innerHTML = `
            <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                <span class="font-bold text-slate-800">Soal Nomor ${index}</span>
                <span class="px-3 py-1 rounded-full text-xs font-bold border ${diagnosis.badgeClass}">
                    ${diagnosis.label}
                </span>
            </div>
            <p class="text-slate-800 font-medium mb-4">${question.question}</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div class="text-xs font-semibold text-slate-500 uppercase mb-1">Jawaban Peserta (Tier 1)</div>
                    <div class="${answer.tier1 === question.correctAnswer ? "text-emerald-700 font-semibold" : "text-rose-700 font-semibold"}">${userOptText}</div>
                    <div class="text-xs text-slate-500 mt-2">Kunci Jawaban: <span class="text-slate-700 font-medium">${correctOptText}</span></div>
                </div>
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div class="text-xs font-semibold text-slate-500 uppercase mb-1">Alasan (Tier 2) & Keyakinan (Tier 3)</div>
                    <div class="${answer.tier2 === question.correctReason ? "text-emerald-700 font-semibold" : "text-rose-700 font-semibold"}">${userReasonText}</div>
                    <div class="text-xs text-slate-500 mt-1">Tingkat Keyakinan: <span class="font-semibold text-slate-700">${confText}</span></div>
                    <div class="text-xs text-slate-500 mt-1">Alasan Benar: <span class="text-slate-700 font-medium">${correctReasonText}</span></div>
                </div>
            </div>

            <div class="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200 text-sm text-slate-700">
                <span class="font-bold text-blue-900"><i class="fa-solid fa-lightbulb text-amber-500 mr-1.5"></i>Pembahasan Ilmiah:</span>
                ${question.explanation}
            </div>
        `;
        container.appendChild(card);
    });
}

// ==================== MODE GURU ====================
function openTeacherLoginModal() {
    document.getElementById("modal-teacher-login").classList.remove("hidden");
    const pinInput = document.getElementById("input-teacher-pin");
    pinInput.value = "";
    pinInput.focus();
}

function closeTeacherLoginModal() {
    document.getElementById("modal-teacher-login").classList.add("hidden");
}

function verifyTeacherPin() {
    const entered = document.getElementById("input-teacher-pin").value.trim();
    if (entered === getTeacherPin()) {
        closeTeacherLoginModal();
        showView(viewTeacher);
        switchTeacherTab("rekap");
    } else {
        alert("PIN Guru salah! (PIN default adalah 1234)");
    }
}

function switchTeacherTab(tabName) {
    const tabRekap = document.getElementById("teacher-panel-rekap");
    const tabBank = document.getElementById("teacher-panel-bank");
    const tabSetting = document.getElementById("teacher-panel-setting");

    const btnRekap = document.getElementById("tab-btn-rekap");
    const btnBank = document.getElementById("tab-btn-bank");
    const btnSetting = document.getElementById("tab-btn-setting");

    [tabRekap, tabBank, tabSetting].forEach(p => p.classList.add("hidden"));
    [btnRekap, btnBank, btnSetting].forEach(b => {
        b.classList.remove("bg-indigo-600", "text-white");
        b.classList.add("bg-white", "text-slate-700", "border", "border-slate-300");
    });

    if (tabName === "rekap") {
        tabRekap.classList.remove("hidden");
        btnRekap.classList.add("bg-indigo-600", "text-white");
        btnRekap.classList.remove("bg-white", "text-slate-700", "border", "border-slate-300");
        renderTeacherResultsTable();
    } else if (tabName === "bank") {
        tabBank.classList.remove("hidden");
        btnBank.classList.add("bg-indigo-600", "text-white");
        btnBank.classList.remove("bg-white", "text-slate-700", "border", "border-slate-300");
        renderTeacherQuestionEditor();
    } else if (tabName === "setting") {
        tabSetting.classList.remove("hidden");
        btnSetting.classList.add("bg-indigo-600", "text-white");
        btnSetting.classList.remove("bg-white", "text-slate-700", "border", "border-slate-300");
    }
}

function renderTeacherResultsTable() {
    const allResults = getStoredResults();
    const filterLevel = document.getElementById("teacher-filter-level").value;
    const filterSearch = document.getElementById("teacher-search-student").value.trim().toLowerCase();

    const filtered = allResults.filter(r => {
        const matchLevel = filterLevel === "all" || String(r.level) === filterLevel;
        const matchSearch = !filterSearch ||
            r.studentName.toLowerCase().includes(filterSearch) ||
            r.studentClass.toLowerCase().includes(filterSearch);
        return matchLevel && matchSearch;
    });

    document.getElementById("teacher-stat-total").textContent = `${filtered.length} Siswa`;
    if (filtered.length > 0) {
        const avgIlmiah = Math.round(filtered.reduce((acc, r) => acc + (r.counts.paham_ilmiah / r.totalQuestions) * 100, 0) / filtered.length);
        const avgMiskonsepsi = Math.round(filtered.reduce((acc, r) => acc + (r.counts.miskonsepsi / r.totalQuestions) * 100, 0) / filtered.length);
        const avgTidakPaham = Math.round(filtered.reduce((acc, r) => acc + (r.counts.tidak_paham / r.totalQuestions) * 100, 0) / filtered.length);

        document.getElementById("teacher-stat-ilmiah").textContent = `${avgIlmiah}%`;
        document.getElementById("teacher-stat-miskonsepsi").textContent = `${avgMiskonsepsi}%`;
        document.getElementById("teacher-stat-tidak-paham").textContent = `${avgTidakPaham}%`;
    } else {
        document.getElementById("teacher-stat-ilmiah").textContent = "0%";
        document.getElementById("teacher-stat-miskonsepsi").textContent = "0%";
        document.getElementById("teacher-stat-tidak-paham").textContent = "0%";
    }

    const tbody = document.getElementById("teacher-results-tbody");
    tbody.innerHTML = "";

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" class="p-6 text-center text-slate-500">Belum ada siswa yang menyelesaikan ujian pada perangkat ini.</td></tr>`;
        return;
    }

    filtered.forEach((r, index) => {
        const skorNilai = Math.round((r.counts.paham_ilmiah / r.totalQuestions) * 100);
        const tr = document.createElement("tr");
        tr.className = "border-b border-slate-100 hover:bg-slate-50";
        tr.innerHTML = `
            <td class="p-3.5 text-slate-500 font-semibold">${index + 1}</td>
            <td class="p-3.5 text-xs text-slate-500 whitespace-nowrap">${r.timestamp}</td>
            <td class="p-3.5 font-bold text-slate-800">${r.studentName}</td>
            <td class="p-3.5 text-slate-600">${r.studentClass}</td>
            <td class="p-3.5 text-xs font-semibold text-blue-700">${r.levelTitle}</td>
            <td class="p-3.5 text-center font-extrabold text-indigo-700">${skorNilai}</td>
            <td class="p-3.5 text-center">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">${r.counts.paham_ilmiah} Soal</span>
            </td>
            <td class="p-3.5 text-center">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">${r.counts.miskonsepsi} Soal</span>
            </td>
            <td class="p-3.5 text-center">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800">${r.counts.tidak_paham} Soal</span>
            </td>
            <td class="p-3.5 text-right whitespace-nowrap space-x-1.5">
                <button type="button" data-id="${r.id}" class="btn-detail-student px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-xs font-bold">
                    <i class="fa-solid fa-file-lines mr-1"></i>Lihat Transkrip
                </button>
                <button type="button" data-id="${r.id}" class="btn-delete-student px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 text-xs font-bold" title="Hapus Data">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.querySelectorAll(".btn-detail-student").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            const record = getStoredResults().find(item => item.id === id);
            if (record) {
                document.getElementById("modal-student-detail").classList.remove("hidden");
                document.getElementById("modal-detail-title").textContent = `Transkrip: ${record.studentName} (${record.studentClass}) - ${record.levelTitle}`;
                renderDiagnosticDetails("all", "modal-detail-content", record.details);
            }
        });
    });

    document.querySelectorAll(".btn-delete-student").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            if (confirm("Hapus transkrip hasil ujian siswa ini?")) {
                const updated = getStoredResults().filter(item => item.id !== id);
                localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(updated));
                renderTeacherResultsTable();
            }
        });
    });
}

function exportTeacherResultsCSV() {
    const results = getStoredResults();
    if (results.length === 0) {
        alert("Tidak ada data transkrip nilai untuk diekspor.");
        return;
    }

    const headers = ["No", "Waktu", "Nama Siswa", "Kelas", "Subbab Level", "Skor Pemahaman Ilmiah (0-100)", "Jumlah Paham Ilmiah", "Jumlah Miskonsepsi", "Jumlah Tidak Paham Konsep"];
    const rows = results.map((r, i) => [
        i + 1,
        `"${r.timestamp}"`,
        `"${r.studentName.replace(/"/g, '""')}"`,
        `"${r.studentClass.replace(/"/g, '""')}"`,
        `"${r.levelTitle}"`,
        Math.round((r.counts.paham_ilmiah / r.totalQuestions) * 100),
        r.counts.paham_ilmiah,
        r.counts.miskonsepsi,
        r.counts.tidak_paham
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `transkrip_nilai_gelombang_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function renderTeacherQuestionEditor() {
    QUESTION_BANK = getQuestionBank();
    const lvl = state.teacherEditLevel;
    const idx = state.teacherEditIndex;
    const levelData = QUESTION_BANK[lvl];
    const q = levelData.questions[idx];

    const numBar = document.getElementById("editor-q-numbers");
    numBar.innerHTML = "";
    levelData.questions.forEach((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = i + 1;
        b.className = `w-9 h-9 rounded-lg text-xs font-bold border transition ${
            i === idx ? "bg-indigo-600 text-white border-indigo-700" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
        }`;
        b.addEventListener("click", () => {
            state.teacherEditIndex = i;
            renderTeacherQuestionEditor();
        });
        numBar.appendChild(b);
    });

    document.getElementById("edit-q-text").value = q.question;
    document.getElementById("edit-q-explanation").value = q.explanation;

    const optContainer = document.getElementById("edit-tier1-container");
    optContainer.innerHTML = "";
    q.options.forEach((opt, i) => {
        const row = document.createElement("div");
        row.className = "flex items-center gap-2";
        row.innerHTML = `
            <input type="radio" name="edit-correct-opt" value="${i}" ${q.correctAnswer === i ? "checked" : ""} class="accent-emerald-600 w-4 h-4">
            <input type="text" value="${opt.replace(/"/g, '&quot;')}" class="edit-opt-input flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm">
        `;
        optContainer.appendChild(row);
    });

    const reasonContainer = document.getElementById("edit-tier2-container");
    reasonContainer.innerHTML = "";
    q.reasons.forEach((r, i) => {
        const row = document.createElement("div");
        row.className = "flex items-center gap-2";
        row.innerHTML = `
            <input type="radio" name="edit-correct-reason" value="${i}" ${q.correctReason === i ? "checked" : ""} class="accent-emerald-600 w-4 h-4">
            <input type="text" value="${r.replace(/"/g, '&quot;')}" class="edit-reason-input flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm">
        `;
        reasonContainer.appendChild(row);
    });
}

function saveEditedQuestion() {
    const lvl = state.teacherEditLevel;
    const idx = state.teacherEditIndex;
    const bank = getQuestionBank();
    const q = bank[lvl].questions[idx];

    q.question = document.getElementById("edit-q-text").value.trim();
    q.explanation = document.getElementById("edit-q-explanation").value.trim();

    q.options = Array.from(document.querySelectorAll(".edit-opt-input")).map(inp => inp.value.trim());
    const checkedOpt = document.querySelector('input[name="edit-correct-opt"]:checked');
    if (checkedOpt) q.correctAnswer = parseInt(checkedOpt.value, 10);

    q.reasons = Array.from(document.querySelectorAll(".edit-reason-input")).map(inp => inp.value.trim());
    const checkedReason = document.querySelector('input[name="edit-correct-reason"]:checked');
    if (checkedReason) q.correctReason = parseInt(checkedReason.value, 10);

    saveQuestionBank(bank);
    QUESTION_BANK = bank;
    renderLevelCards();
    alert(`Perubahan pada ${bank[lvl].title} - Soal No. ${idx + 1} berhasil disimpan!`);
}

// Event Listeners
document.getElementById("btn-start-exam").addEventListener("click", startExam);
document.getElementById("btn-tier3-yakin").addEventListener("click", () => {
    state.answers[state.currentIndex].tier3 = "yakin";
    renderQuestion(state.currentIndex);
});
document.getElementById("btn-tier3-tidak").addEventListener("click", () => {
    state.answers[state.currentIndex].tier3 = "tidak_yakin";
    renderQuestion(state.currentIndex);
});
document.getElementById("check-ragu").addEventListener("change", (e) => {
    state.answers[state.currentIndex].ragu = e.target.checked;
    renderNavGrid();
});
document.getElementById("btn-prev").addEventListener("click", () => {
    if (state.currentIndex > 0) renderQuestion(state.currentIndex - 1);
});
document.getElementById("btn-next").addEventListener("click", () => {
    const total = QUESTION_BANK[state.selectedLevel].questions.length;
    if (state.currentIndex < total - 1) renderQuestion(state.currentIndex + 1);
    else confirmFinishExam();
});
document.getElementById("btn-finish-top").addEventListener("click", confirmFinishExam);

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => {
            b.classList.remove("bg-slate-800", "text-white");
            b.classList.add("bg-white", "text-slate-700");
        });
        btn.classList.remove("bg-white", "text-slate-700");
        btn.classList.add("bg-slate-800", "text-white");
        renderDiagnosticDetails(btn.dataset.filter, "diagnostic-list", state.diagnosticResults);
    });
});

document.getElementById("btn-restart").addEventListener("click", () => showView(viewSetup));
document.getElementById("btn-open-teacher").addEventListener("click", openTeacherLoginModal);
document.getElementById("btn-cancel-teacher-login").addEventListener("click", closeTeacherLoginModal);
document.getElementById("btn-submit-teacher-pin").addEventListener("click", verifyTeacherPin);
document.getElementById("input-teacher-pin").addEventListener("keydown", (e) => { if (e.key === "Enter") verifyTeacherPin(); });
document.getElementById("btn-exit-teacher").addEventListener("click", () => { renderLevelCards(); showView(viewSetup); });
document.getElementById("tab-btn-rekap").addEventListener("click", () => switchTeacherTab("rekap"));
document.getElementById("tab-btn-bank").addEventListener("click", () => switchTeacherTab("bank"));
document.getElementById("tab-btn-setting").addEventListener("click", () => switchTeacherTab("setting"));
document.getElementById("teacher-filter-level").addEventListener("change", renderTeacherResultsTable);
document.getElementById("teacher-search-student").addEventListener("input", renderTeacherResultsTable);
document.getElementById("btn-export-csv").addEventListener("click", exportTeacherResultsCSV);
document.getElementById("btn-clear-all-results").addEventListener("click", () => {
    if (confirm("Yakin ingin menghapus SELURUH transkrip hasil ujian siswa?")) {
        localStorage.removeItem(RESULTS_STORAGE_KEY);
        renderTeacherResultsTable();
    }
});
document.getElementById("btn-close-detail-modal").addEventListener("click", () => document.getElementById("modal-student-detail").classList.add("hidden"));
document.getElementById("editor-select-level").addEventListener("change", (e) => {
    state.teacherEditLevel = parseInt(e.target.value, 10);
    state.teacherEditIndex = 0;
    renderTeacherQuestionEditor();
});
document.getElementById("btn-save-edited-question").addEventListener("click", saveEditedQuestion);
document.getElementById("btn-reset-bank").addEventListener("click", () => {
    if (confirm("Kembalikan seluruh soal & kunci jawaban ke pengaturan awal dokumen?")) {
        QUESTION_BANK = resetQuestionBankToDefault();
        renderTeacherQuestionEditor();
        renderLevelCards();
        alert("Bank soal berhasil dikembalikan ke bawaan awal.");
    }
});
document.getElementById("btn-update-pin").addEventListener("click", () => {
    const newPin = document.getElementById("input-new-pin").value.trim();
    if (newPin.length < 4) { alert("PIN baru minimal 4 karakter/angka."); return; }
    localStorage.setItem(TEACHER_PIN_KEY, newPin);
    document.getElementById("input-new-pin").value = "";
    alert("PIN Akses Guru berhasil diperbarui!");
});

renderLevelCards();
