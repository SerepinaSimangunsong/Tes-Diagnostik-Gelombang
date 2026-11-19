/**
 * Bank Soal Fisika: Gelombang (Three-Tier Diagnostic Test)
 * Sumber: Dokumen SOAL WEB.docx
 * Terdiri dari 4 Subbab Level:
 * - Level 1: Wave Check (Benar atau Salah Konsep Dasar) - 10 Soal
 * - Level 2: Mudah - 10 Soal
 * - Level 3: Sedang - 10 Soal
 * - Level 4: Susah - 10 Soal
 */
const DEFAULT_QUESTION_BANK = {
    1: {
        title: "Level 1: Wave Check (Uji Pemahaman Konsep)",
        subtitle: "Benar atau Salah Konsep Dasar Gelombang",
        badgeText: "Level 1 • Wave Check",
        badgeColor: "teal",
        durationMinutes: 15,
        questions: [
            {
                id: 1,
                question: "Pernyataan: \"Frekuensi dan amplitudo merupakan besaran yang sama pada benda yang bergetar.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena frekuensi dan amplitudo sama-sama mengukur seberapa cepat benda bergetar dalam satu detik.",
                    "2. Karena amplitudo adalah simpangan maksimum (m), sedangkan frekuensi adalah banyaknya getaran per detik (Hz).",
                    "3. Karena amplitudo berbanding lurus secara langsung dengan frekuensi getaran.",
                    "4. Karena keduanya memiliki satuan internasional yang sama yaitu Hertz (Hz)."
                ],
                correctReason: 1,
                explanation: "Salah. Frekuensi dan amplitudo merupakan dua besaran yang berbeda. Amplitudo (A) adalah simpangan maksimum dari posisi keseimbangan (satuan meter), sedangkan frekuensi (f) adalah banyaknya getaran setiap detik (satuan Hz)."
            },
            {
                id: 2,
                question: "Pernyataan: \"Gelombang merambat tidak membawa energi.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena gelombang hanya memindahkan partikel medium tanpa memindahkan energi.",
                    "2. Karena gelombang merambat membawa energi, contohnya riak air ketika permukaan air dijatuhi kerikil.",
                    "3. Karena energi gelombang langsung hilang begitu sumber berhenti bergetar.",
                    "4. Karena hanya gelombang elektromagnetik yang membawa energi, sedangkan gelombang mekanik tidak."
                ],
                correctReason: 1,
                explanation: "Salah. Gelombang merambat membawa energi. Contohnya adalah adanya riak air pada gelombang yang terjadi ketika permukaan air dijatuhi kerikil."
            },
            {
                id: 3,
                question: "Pernyataan: \"Molekul udara ikut berpindah bersama dengan gelombang bunyi yang merambat.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena molekul udara terbawa arus dari sumber bunyi hingga ke telinga pendengar.",
                    "2. Karena molekul udara tidak ikut berpindah, melainkan hanya bergetar membentuk rapatan dan regangan di sekitar titik setimbangnya.",
                    "3. Karena gelombang bunyi adalah gelombang transversal yang menggerakkan udara naik-turun.",
                    "4. Karena udara tidak memiliki massa sehingga tidak terpengaruh oleh gelombang bunyi."
                ],
                correctReason: 1,
                explanation: "Salah. Molekul udara tidak ikut berpindah bersama gelombang bunyi yang merambat, karena molekul udara hanya merapat dan meregang. Bunyi merambat sebagai gelombang longitudinal."
            },
            {
                id: 4,
                question: "Pernyataan: \"Cepat rambat bunyi di udara selalu lebih cepat daripada cepat rambat di air.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena udara lebih renggang sehingga partikel bunyi lebih mudah melaju tanpa hambatan.",
                    "2. Karena cepat rambat bunyi di udara (340 m/s) lebih kecil daripada di air (1.940 m/s) akibat perbedaan kerapatan medium.",
                    "3. Karena bunyi tidak dapat merambat di dalam zat cair seperti air.",
                    "4. Karena cepat rambat bunyi di semua medium selalu bernilai sama yaitu 340 m/s."
                ],
                correctReason: 1,
                explanation: "Salah. Cepat rambat bunyi di udara lebih kecil daripada cepat rambat di air. Kerapatan medium air lebih tinggi dibanding udara, sehingga kecepatan bunyi di udara 340 m/s sedangkan di air mencapai 1.940 m/s."
            },
            {
                id: 5,
                question: "Pernyataan: \"Gelombang suara merambat paling cepat melalui ruang hampa atau ruang yang tidak ada udara.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena tanpa partikel udara, tidak ada gesekan yang menghambat laju gelombang suara.",
                    "2. Karena gelombang suara membutuhkan medium untuk merambat dan sama sekali tidak dapat merambat di ruang hampa.",
                    "3. Karena gelombang suara merambat dengan kecepatan cahaya di ruang hampa.",
                    "4. Karena suara hanya bisa merambat di ruang hampa jika frekuensinya sangat tinggi."
                ],
                correctReason: 1,
                explanation: "Salah. Gelombang suara adalah gelombang mekanik yang memerlukan medium (seperti udara, air, atau zat padat) untuk merambat dan tidak dapat merambat pada ruang hampa udara."
            },
            {
                id: 6,
                question: "Pernyataan: \"Gelombang yang dipantulkan akan selalu membentuk lembah.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena setiap pemantulan gelombang selalu membalikkan fase sebesar 180°.",
                    "2. Karena bentuk gelombang pantul bergantung pada kondisi ujung pemantul: ujung terikat membalikkan fase (bukit jadi lembah), sedangkan ujung bebas tidak membalikkan fase.",
                    "3. Karena gelombang pantul selalu kehilangan seluruh amplitudonya saat menumbuk penghalang.",
                    "4. Karena gelombang datang berbentuk lembah akan selalu dipantulkan menjadi bukit di ujung bebas."
                ],
                correctReason: 1,
                explanation: "Salah. Bentuk gelombang pantul bergantung pada kondisi ujung tempat gelombang dipantulkan. Pada ujung terikat terjadi pembalikan fase 180° (bukit menjadi lembah), sedangkan pada ujung bebas tidak terjadi pembalikan fase (bukit tetap bukit)."
            },
            {
                id: 7,
                question: "Pernyataan: \"Bunyi dengan nada lebih tinggi merambat lebih lambat daripada bunyi dengan nada lebih rendah.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena frekuensi tinggi memiliki panjang gelombang lebih pendek sehingga geraknya lebih lambat.",
                    "2. Karena tinggi-rendahnya nada berkaitan dengan frekuensi, sedangkan cepat rambat bunyi ditentukan oleh medium yang sama sehingga kecepatannya sama.",
                    "3. Karena bunyi nada tinggi membutuhkan energi lebih besar sehingga tertahan oleh udara.",
                    "4. Karena cepat rambat bunyi berbanding terbalik dengan frekuensi sumber bunyi."
                ],
                correctReason: 1,
                explanation: "Salah. Cepat rambat bunyi dipengaruhi oleh medium tempat bunyi merambat. Tinggi atau rendahnya nada berkaitan dengan frekuensi bunyi, bukan cepat rambatnya. Dalam medium dan kondisi yang sama, keduanya merambat sama cepat."
            },
            {
                id: 8,
                question: "Pernyataan: \"Jika tegangan tali dijaga konstan, maka panjang gelombangnya juga akan tetap.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena tegangan tali adalah satu-satunya faktor yang menentukan panjang gelombang.",
                    "2. Karena tegangan dan massa per satuan panjang menentukan cepat rambat (v), sedangkan panjang gelombang (λ = v/f) juga dipengaruhi oleh frekuensi getaran.",
                    "3. Karena jika tegangan tali konstan, frekuensi getaran tidak mungkin diubah.",
                    "4. Karena panjang gelombang berbanding lurus dengan frekuensi saat cepat rambat konstan."
                ],
                correctReason: 1,
                explanation: "Salah. Tegangan tali yang konstan membuat cepat rambat v tetap, namun panjang gelombang λ = v/f tetap dipengaruhi oleh frekuensi. Jika frekuensi meningkat, panjang gelombang akan semakin pendek."
            },
            {
                id: 9,
                question: "Pernyataan: \"Cepat rambat bunyi sama pada semua medium.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena kecepatan bunyi hanya bergantung pada frekuensi sumber getarnya.",
                    "2. Karena cepat rambat bunyi bergantung pada sifat dan kerapatan medium; umumnya paling cepat pada zat padat, lalu zat cair, dan paling lambat pada gas.",
                    "3. Karena bunyi merambat paling cepat pada gas dan paling lambat pada zat padat.",
                    "4. Karena gelombang bunyi memiliki kecepatan tetap 340 m/s di seluruh jenis zat."
                ],
                correctReason: 1,
                explanation: "Salah. Cepat rambat bunyi berbeda-beda bergantung pada sifat dan kondisi medium yang dilaluinya. Secara umum, bunyi merambat lebih cepat dalam zat padat dibandingkan zat cair dan gas."
            },
            {
                id: 10,
                question: "Pernyataan: \"Pada gelombang longitudinal, partikel medium bergerak searah dengan arah rambat gelombang secara terus-menerus.\" Tentukan kebenaran pernyataan tersebut!",
                options: [
                    "A. Benar",
                    "B. Salah"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena partikel medium terdorong maju terus-menerus hingga mencapai ujung medium.",
                    "2. Karena partikel medium hanya bergetar bolak-balik (maju-mundur) sejajar arah rambat di sekitar posisi keseimbangannya, tidak berpindah terus-menerus.",
                    "3. Karena partikel gelombang longitudinal bergerak naik-turun tegak lurus arah rambat.",
                    "4. Karena pada gelombang longitudinal partikel medium diam total tanpa bergetar."
                ],
                correctReason: 1,
                explanation: "Salah. Pada gelombang longitudinal, partikel medium bergetar bolak-balik sejajar dengan arah rambat gelombang di sekitar posisi keseimbangannya. Partikel tidak ikut berpindah terus-menerus karena yang merambat adalah energi."
            }
        ]
    },
    2: {
        title: "Level 2: Mudah (Konsep Dasar Gelombang)",
        subtitle: "Besaran, Jenis, dan Fenomena Dasar Gelombang",
        badgeText: "Level 2 • Mudah",
        badgeColor: "emerald",
        durationMinutes: 15,
        questions: [
            {
                id: 1,
                question: "Gelombang yang arah rambatnya tegak lurus dengan arah getarnya disebut gelombang...",
                options: [
                    "A. Longitudinal",
                    "B. Transversal",
                    "C. Elektromagnetik",
                    "D. Mekanik"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena getaran partikel medium membentuk bukit dan lembah yang tegak lurus terhadap arah rambat energi.",
                    "2. Karena getaran partikel medium membentuk rapatan dan regangan yang sejajar dengan arah rambat.",
                    "3. Karena gelombang tersebut tidak membutuhkan medium untuk merambat di ruang hampa.",
                    "4. Karena amplitudo gelombang selalu berubah-ubah seiring bertambahnya jarak."
                ],
                correctReason: 0,
                explanation: "Gelombang transversal adalah gelombang yang arah rambatnya tegak lurus terhadap arah getarnya, membentuk bukit dan lembah."
            },
            {
                id: 2,
                question: "Berdasarkan medium perambatannya, gelombang bunyi termasuk ke dalam jenis gelombang...",
                options: [
                    "A. Elektromagnetik",
                    "B. Transversal",
                    "C. Mekanik",
                    "D. Stasioner"
                ],
                correctAnswer: 2,
                reasons: [
                    "1. Karena bunyi dapat merambat di ruang hampa udara tanpa partikel perantara.",
                    "2. Karena bunyi memerlukan medium (padat, cair, atau gas) untuk merambatkan getarannya.",
                    "3. Karena bunyi memiliki kecepatan rambat yang sama dengan kecepatan cahaya.",
                    "4. Karena bunyi selalu merambat tegak lurus terhadap sumber getarnya."
                ],
                correctReason: 1,
                explanation: "Gelombang mekanik adalah gelombang yang membutuhkan medium perantara (padat, cair, atau gas) untuk merambatkan getarannya."
            },
            {
                id: 3,
                question: "Satu panjang gelombang (λ) pada gelombang transversal didefinisikan sebagai jarak antara...",
                options: [
                    "A. Satu bukit dan satu lembah yang berurutan",
                    "B. Puncak bukit ke dasar lembah terdekat",
                    "C. Dua simpul yang berdekatan",
                    "D. Satu bukit saja"
                ],
                correctAnswer: 0,
                reasons: [
                    "1. Karena setengah gelombang terdiri dari satu bukit dan satu lembah.",
                    "2. Karena satu gelombang penuh mencakup satu siklus getaran lengkap (1 bukit + 1 lembah).",
                    "3. Karena jarak dua simpul berdekatan adalah satu gelombang penuh.",
                    "4. Karena panjang gelombang hanya diukur dari titik setimbang ke puncak tertinggi."
                ],
                correctReason: 1,
                explanation: "Satu panjang gelombang (λ) pada gelombang transversal terdiri dari satu siklus getaran lengkap, yaitu satu bukit dan satu lembah yang berurutan."
            },
            {
                id: 4,
                question: "Simpangan maksimum partikel medium dari titik setimbangnya saat dilewati gelombang disebut...",
                options: [
                    "A. Frekuensi",
                    "B. Periode",
                    "C. Amplitudo",
                    "D. Panjang gelombang"
                ],
                correctAnswer: 2,
                reasons: [
                    "1. Karena nilai tersebut menunjukkan banyaknya gelombang yang terbentuk tiap detik.",
                    "2. Karena nilai tersebut menunjukkan waktu yang diperlukan untuk satu kali bergetar.",
                    "3. Karena amplitudo menyatakan besar energi dan simpangan terjauh dari posisi seimbang.",
                    "4. Karena amplitudo adalah jarak mendatar antara dua lembah yang berurutan."
                ],
                correctReason: 2,
                explanation: "Amplitudo adalah simpangan maksimum atau terjauh partikel medium dari posisi kesetimbangannya saat dilewati gelombang."
            },
            {
                id: 5,
                question: "Sebuah sumber gelombang bergetar sebanyak 120 kali dalam waktu 1 menit. Frekuensi gelombang tersebut adalah...",
                options: [
                    "A. 0,5 Hz",
                    "B. 2 Hz",
                    "C. 60 Hz",
                    "D. 120 Hz"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena frekuensi dihitung dari jumlah getaran dibagi waktu dalam satuan detik (f = n / t = 120 / 60).",
                    "2. Karena frekuensi adalah waktu dibagi jumlah getaran (f = 60 / 120).",
                    "3. Karena frekuensi sama dengan jumlah getaran dalam satu menit tanpa perlu konversi ke detik.",
                    "4. Karena frekuensi adalah hasil kali antara jumlah getaran dan waktu."
                ],
                correctReason: 0,
                explanation: "Frekuensi f = n / t. Dengan n = 120 getaran dan t = 1 menit = 60 detik, maka f = 120 / 60 = 2 Hz."
            },
            {
                id: 6,
                question: "Jika periode suatu gelombang adalah 0,25 sekon, maka frekuensi gelombang tersebut adalah...",
                options: [
                    "A. 0,25 Hz",
                    "B. 2,5 Hz",
                    "C. 4 Hz",
                    "D. 25 Hz"
                ],
                correctAnswer: 2,
                reasons: [
                    "1. Karena frekuensi berbanding lurus dengan periode (f = T).",
                    "2. Karena frekuensi berbanding terbalik dengan periode (f = 1 / T = 1 / 0,25).",
                    "3. Karena frekuensi adalah sepuluh kali lipat dari nilai periodenya.",
                    "4. Karena periode dan frekuensi memiliki satuan dan nilai yang selalu identik."
                ],
                correctReason: 1,
                explanation: "Frekuensi berbanding terbalik dengan periode: f = 1 / T = 1 / 0,25 = 4 Hz."
            },
            {
                id: 7,
                question: "Contoh gelombang yang termasuk gelombang longitudinal adalah...",
                options: [
                    "A. Gelombang cahaya",
                    "B. Gelombang pada tali yang digetarkan naik-turun",
                    "C. Gelombang bunyi di udara",
                    "D. Gelombang radio"
                ],
                correctAnswer: 2,
                reasons: [
                    "1. Karena merambat melalui rapatan dan regangan molekul udara sejajar arah rambat.",
                    "2. Karena merambat melalui ruang hampa dengan medan listrik dan magnet saling tegak lurus.",
                    "3. Karena membentuk pola bukit dan lembah yang terlihat oleh mata.",
                    "4. Karena tidak memerlukan medium untuk merambat dari sumber ke pendengar."
                ],
                correctReason: 0,
                explanation: "Gelombang bunyi di udara merambat melalui rapatan dan regangan molekul udara yang sejajar dengan arah rambatnya."
            },
            {
                id: 8,
                question: "Sebuah gelombang memiliki panjang gelombang 2 meter dan frekuensi 5 Hz. Cepat rambat gelombang tersebut adalah...",
                options: [
                    "A. 2,5 m/s",
                    "B. 7 m/s",
                    "C. 10 m/s",
                    "D. 0,4 m/s"
                ],
                correctAnswer: 2,
                reasons: [
                    "1. Karena cepat rambat gelombang adalah panjang gelombang dibagi frekuensi (v = λ / f).",
                    "2. Karena cepat rambat gelombang adalah hasil kali panjang gelombang dan frekuensi (v = λ × f).",
                    "3. Karena cepat rambat gelombang adalah jumlah dari panjang gelombang dan frekuensi.",
                    "4. Karena cepat rambat gelombang adalah frekuensi dibagi panjang gelombang (v = f / λ)."
                ],
                correctReason: 1,
                explanation: "Cepat rambat gelombang v = λ × f = 2 m × 5 Hz = 10 m/s."
            },
            {
                id: 9,
                question: "Peristiwa pembalikan arah rambat gelombang ketika mengenai suatu penghalang atau bidang batas disebut...",
                options: [
                    "A. Pembiasan (Refraksi)",
                    "B. Pemantulan (Refleksi)",
                    "C. Pelenturan (Difraksi)",
                    "D. Perpaduan (Interferensi)"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena gelombang membelok saat melewati celah yang sempit.",
                    "2. Karena gelombang berbelok arah akibat melewati dua medium berbeda kerapatan.",
                    "3. Karena gelombang dipantulkan kembali ke medium asalnya saat menumbuk bidang batas.",
                    "4. Karena dua gelombang saling bertemu dan menggabungkan amplitudonya."
                ],
                correctReason: 2,
                explanation: "Pemantulan (refleksi) adalah peristiwa kembalinya gelombang ke medium asalnya setelah menumbuk suatu bidang batas atau penghalang."
            },
            {
                id: 10,
                question: "Gabus yang terapung di permukaan air laut hanya bergerak naik-turun di tempat saat dilewati gelombang air. Hal ini membuktikan bahwa...",
                options: [
                    "A. Gelombang memindahkan partikel air bersama energinya",
                    "B. Gelombang merambatkan energi tanpa memindahkan partikel medium secara permanen",
                    "C. Air laut tidak memiliki energi kinetik",
                    "D. Gelombang air merupakan gelombang elektromagnetik"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena partikel medium ikut berpindah secara permanen mengikuti arah rambat gelombang.",
                    "2. Karena partikel medium hanya bergetar di sekitar titik setimbangnya sementara energinya berpindah.",
                    "3. Karena massa jenis gabus lebih besar daripada massa jenis air laut.",
                    "4. Karena gelombang air hanya bergerak secara vertikal tanpa merambat secara horizontal."
                ],
                correctReason: 1,
                explanation: "Gelombang merambatkan energi dari satu titik ke titik lain, sedangkan partikel mediumnya hanya bergetar di sekitar titik setimbangnya tanpa ikut berpindah secara permanen."
            }
        ]
    },
    3: {
        title: "Level 3: Sedang (Analisis Hubungan Besaran & Medium)",
        subtitle: "Perpindahan Medium, Pemantulan Ujung, & Sifat Bunyi",
        badgeText: "Level 3 • Sedang",
        badgeColor: "blue",
        durationMinutes: 15,
        questions: [
            {
                id: 1,
                question: "Gelombang air merambat dari daerah dalam ke daerah dangkal. Cepat rambatnya berubah. Jika sumber tetap bergetar secara teratur, frekuensi gelombang setelah memasuki daerah dangkal adalah...",
                options: [
                    "A. Meningkat",
                    "B. Menurun",
                    "C. Tetap",
                    "D. Menjadi nol"
                ],
                correctAnswer: 2,
                reasons: [
                    "A. Frekuensi ditentukan oleh medium yang dilewati.",
                    "B. Frekuensi ditentukan oleh sumber; pada batas medium frekuensi tetap, sedangkan cepat rambat dan panjang gelombang dapat berubah.",
                    "C. Frekuensi selalu berubah ketika cepat rambat berubah.",
                    "D. Frekuensi hanya ditentukan panjang gelombang."
                ],
                correctReason: 1,
                explanation: "Frekuensi gelombang yang melewati batas dua medium tetap sama dengan frekuensi sumber, selama sumber tidak berubah. Jika cepat rambat berubah, panjang gelombang menyesuaikan menurut v = fλ."
            },
            {
                id: 2,
                question: "Gelombang berpindah ke medium lain. Frekuensinya tetap, tetapi cepat rambatnya menjadi lebih kecil. Panjang gelombangnya akan...",
                options: [
                    "A. Bertambah",
                    "B. Berkurang",
                    "C. Tetap",
                    "D. Menjadi dua kali lipat"
                ],
                correctAnswer: 1,
                reasons: [
                    "A. λ = v/f; jika f tetap dan v menurun, λ menurun.",
                    "B. Panjang gelombang hanya ditentukan amplitudo.",
                    "C. Panjang gelombang tidak dipengaruhi cepat rambat.",
                    "D. Panjang gelombang selalu bertambah saat medium berubah."
                ],
                correctReason: 0,
                explanation: "Dari v = fλ diperoleh λ = v/f. Karena frekuensi tetap, panjang gelombang sebanding dengan cepat rambat. Jika cepat rambat turun, panjang gelombang juga berkurang."
            },
            {
                id: 3,
                question: "Pulsa berbentuk bukit merambat menuju ujung tali yang terikat kuat. Pulsa pantul akan...",
                options: [
                    "A. Tetap berbentuk bukit",
                    "B. Berubah menjadi lembah",
                    "C. Menghilang seluruhnya",
                    "D. Memiliki amplitudo dua kali lebih besar"
                ],
                correctAnswer: 1,
                reasons: [
                    "A. Pada ujung terikat, pulsa pantul mengalami pembalikan fase 180°.",
                    "B. Pada ujung terikat, pulsa pantul tidak mengalami perubahan fase.",
                    "C. Semua pulsa pantul selalu menjadi lembah.",
                    "D. Frekuensi gelombang menjadi nol."
                ],
                correctReason: 0,
                explanation: "Pada ujung terikat, titik ujung tali tidak dapat bergerak bebas. Syarat batas ini menyebabkan gelombang pantul berbalik fase 180° (inversi), sehingga pulsa bukit dipantulkan sebagai lembah."
            },
            {
                id: 4,
                question: "Pulsa berbentuk bukit merambat menuju ujung tali yang bebas bergerak. Pulsa pantul akan...",
                options: [
                    "A. Berubah menjadi lembah",
                    "B. Tetap berbentuk bukit",
                    "C. Menjadi dua lembah",
                    "D. Tidak dipantulkan"
                ],
                correctAnswer: 1,
                reasons: [
                    "A. Pada ujung bebas, pulsa pantul mengalami pembalikan fase.",
                    "B. Pada ujung bebas, pulsa pantul tidak mengalami pembalikan fase.",
                    "C. Ujung bebas menghilangkan seluruh energi gelombang.",
                    "D. Frekuensi selalu berubah saat dipantulkan."
                ],
                correctReason: 1,
                explanation: "Pada ujung bebas ideal, ujung medium dapat bergerak bebas sehingga gelombang pantul tidak mengalami inversi fase. Pulsa bukit dipantulkan tetap sebagai bukit."
            },
            {
                id: 5,
                question: "Dua gelombang merambat pada tali yang sama dengan tegangan dan frekuensi sama. Gelombang pertama memiliki amplitudo lebih besar. Pernyataan yang tepat adalah...",
                options: [
                    "A. Gelombang pertama pasti lebih cepat.",
                    "B. Gelombang pertama memiliki simpangan maksimum lebih besar.",
                    "C. Gelombang kedua memiliki frekuensi lebih besar.",
                    "D. Panjang gelombang berbeda hanya karena amplitudo berbeda."
                ],
                correctAnswer: 1,
                reasons: [
                    "A. Amplitudo menyatakan simpangan maksimum; pada tali ideal, cepat rambat ditentukan tegangan dan massa per satuan panjang.",
                    "B. Amplitudo lebih besar selalu berarti frekuensi lebih tinggi.",
                    "C. Amplitudo menentukan langsung panjang gelombang.",
                    "D. Amplitudo lebih besar selalu membuat periode lebih kecil."
                ],
                correctReason: 0,
                explanation: "Amplitudo adalah simpangan maksimum. Untuk gelombang pada tali ideal, cepat rambat v = √(F/μ). Jika F dan μ sama, cepat rambat sama meskipun amplitudonya berbeda."
            },
            {
                id: 6,
                question: "Dua bunyi dengan frekuensi berbeda merambat melalui udara pada suhu dan kondisi yang sama. Pernyataan yang benar adalah...",
                options: [
                    "A. Bunyi berfrekuensi lebih tinggi selalu lebih cepat.",
                    "B. Bunyi berfrekuensi lebih rendah selalu lebih cepat.",
                    "C. Keduanya memiliki cepat rambat yang sama.",
                    "D. Keduanya tidak dapat merambat bersamaan."
                ],
                correctAnswer: 2,
                reasons: [
                    "A. Cepat rambat bunyi terutama ditentukan sifat dan kondisi medium, bukan frekuensi sumber.",
                    "B. Frekuensi tinggi selalu membuat bunyi lebih cepat.",
                    "C. Frekuensi rendah membuat bunyi lebih lambat.",
                    "D. Cepat rambat ditentukan keras-lemahnya bunyi."
                ],
                correctReason: 0,
                explanation: "Dalam medium yang sama dan pada kondisi yang sama, cepat rambat bunyi praktis sama. Frekuensi menentukan tinggi-rendah nada, sedangkan panjang gelombang menyesuaikan melalui v = fλ."
            },
            {
                id: 7,
                question: "Dua pengeras suara menghasilkan bunyi dengan frekuensi yang sama. Pengeras suara pertama terdengar lebih keras daripada pengeras suara kedua. Jika keduanya berada dalam kondisi pengamatan yang sama, pernyataan yang tepat adalah...",
                options: [
                    "A. Bunyi pertama memiliki amplitudo lebih besar.",
                    "B. Bunyi pertama memiliki frekuensi lebih rendah.",
                    "C. Bunyi pertama pasti memiliki cepat rambat lebih besar.",
                    "D. Bunyi kedua memiliki panjang gelombang lebih besar karena suaranya lebih pelan."
                ],
                correctAnswer: 0,
                reasons: [
                    "A. Kuat bunyi berkaitan dengan intensitas bunyi dan amplitudo gelombang.",
                    "B. Kuat bunyi hanya ditentukan oleh frekuensi.",
                    "C. Bunyi yang lebih keras selalu memiliki cepat rambat lebih besar.",
                    "D. Amplitudo tidak berhubungan dengan kuat bunyi."
                ],
                correctReason: 0,
                explanation: "Kuat-lemahnya bunyi berkaitan erat dengan intensitas dan amplitudo gelombang. Semakin besar amplitudo gelombang bunyi, semakin keras bunyi yang terdengar."
            },
            {
                id: 8,
                question: "Gabus mengapung di kolam. Ketika gelombang melewatinya, gabus bergerak naik-turun di sekitar lokasi semula. Hal ini menunjukkan bahwa...",
                options: [
                    "A. Gabus selalu berpindah menuju tepi kolam",
                    "B. Gelombang merambatkan energi, sementara gabus berosilasi di sekitar posisi setimbang",
                    "C. Gelombang tidak membawa energi",
                    "D. Air tidak bergerak sama sekali"
                ],
                correctAnswer: 1,
                reasons: [
                    "A. Gelombang memindahkan seluruh partikel air secara permanen.",
                    "B. Gelombang membawa energi; gerak partikel medium bersifat osilasi lokal di sekitar titik setimbang.",
                    "C. Gabus tidak dipengaruhi gelombang.",
                    "D. Partikel air selalu diam saat gelombang lewat."
                ],
                correctReason: 1,
                explanation: "Gelombang membawa energi, sedangkan partikel medium (dan gabus di atasnya) melakukan gerak osilasi lokal di sekitar posisi keseimbangannya tanpa ikut berpindah jauh bersama gelombang."
            },
            {
                id: 9,
                question: "Dua tali memiliki massa per satuan panjang sama. Tali A diberi tegangan lebih besar daripada tali B. Keduanya digetarkan dengan frekuensi sama. Maka...",
                options: [
                    "A. Tali A memiliki cepat rambat dan panjang gelombang lebih besar",
                    "B. Tali A memiliki cepat rambat lebih kecil",
                    "C. Kedua tali memiliki cepat rambat sama",
                    "D. Tali A memiliki frekuensi lebih kecil"
                ],
                correctAnswer: 0,
                reasons: [
                    "A. v = √(F/μ); jika μ sama dan F lebih besar, v lebih besar. Dengan f sama, λ = v/f juga lebih besar.",
                    "B. Tegangan lebih besar selalu menurunkan cepat rambat.",
                    "C. Tegangan hanya memengaruhi amplitudo.",
                    "D. Panjang gelombang tidak berhubungan dengan cepat rambat."
                ],
                correctReason: 0,
                explanation: "Berdasarkan Hukum Melde v = √(F/μ), jika μ tetap dan F diperbesar, maka cepat rambat v meningkat. Karena frekuensi f sama, panjang gelombang λ = v/f juga menjadi lebih besar."
            },
            {
                id: 10,
                question: "Seorang siswa menjatuhkan benda ke dalam kolam. Temannya mendengar bunyi tersebut melalui udara, sedangkan siswa yang berada di dalam air dapat mendengarnya melalui air. Jika bunyi merambat pada kedua medium tersebut, pernyataan yang benar adalah...",
                options: [
                    "A. Bunyi merambat lebih cepat melalui udara daripada air.",
                    "B. Bunyi merambat lebih cepat melalui air daripada udara.",
                    "C. Bunyi memiliki cepat rambat yang sama pada kedua medium.",
                    "D. Bunyi tidak dapat merambat melalui air."
                ],
                correctAnswer: 1,
                reasons: [
                    "A. Cepat rambat bunyi dipengaruhi oleh sifat dan kerapatan medium yang dilaluinya.",
                    "B. Cepat rambat bunyi hanya ditentukan oleh keras atau lemahnya bunyi.",
                    "C. Air tidak dapat menghantarkan gelombang bunyi.",
                    "D. Bunyi selalu merambat dengan kecepatan yang sama."
                ],
                correctReason: 0,
                explanation: "Cepat rambat bunyi dipengaruhi oleh sifat dan kerapatan medium. Air memiliki kerapatan dan modulus elastisitas yang membuat bunyi merambat jauh lebih cepat di air (~1.940 m/s) dibanding udara (~340 m/s)."
            }
        ]
    },
    4: {
        title: "Level 4: Susah (HOTS & Analisis Multi-Konsep)",
        subtitle: "Gelombang Berjalan, Stasioner, Doppler, Difraksi, & Intensitas",
        badgeText: "Level 4 • Susah",
        badgeColor: "rose",
        durationMinutes: 20,
        questions: [
            {
                id: 1,
                question: "Tika memegang salah satu ujung tali dan ujung satunya diikatkan pada batang pohon, lalu menyentakkan tali sehingga terbentuk gelombang. Jika Tika mempertahankan tegangan tali dan ingin membuat gelombang hasil sentakan lebih cepat sampai di pohon, pernyataan yang paling tepat adalah...",
                options: [
                    "A. Tika mengganti tali dengan tali yang lebih pendek sehingga posisi Tika lebih dekat dari pohon",
                    "B. Tika mengganti tali dengan tali yang lebih panjang sehingga posisi Tika lebih jauh dari pohon"
                ],
                correctAnswer: 0,
                reasons: [
                    "A. Jika tegangan tali tetap, tali dipendekkan maka massa tali berkurang dan massa per satuan panjang (μ) tetap, jadi cepat rambat tetap; karena jarak tempuh diperpendek maka waktu tempuh lebih cepat.",
                    "B. Jika tali dipanjangkan maka massa jenis tali (μ) semakin kecil, sehingga cepat rambat gelombang semakin cepat dan waktu tempuh semakin cepat.",
                    "C. Jika tali dipendekkan maka massa jenis tali (μ) semakin kecil, sehingga cepat rambat gelombang semakin cepat daripada sebelumnya."
                ],
                correctReason: 0,
                explanation: "Untuk jenis tali yang sama, massa per satuan panjang (μ = m/L) bernilai konstan meskipun tali dipotong lebih pendek. Dengan tegangan F tetap, cepat rambat v = √(F/μ) tetap, sehingga memperpendek jarak tempuh (L) membuat waktu tempuh (t = L/v) lebih singkat."
            },
            {
                id: 2,
                question: "Seutas tali sepanjang 2 meter ujungnya terikat kuat pada tiang. Tali digetarkan sehingga terbentuk 4 gelombang penuh (gelombang stasioner ujung terikat). Letak simpul ke-3 dihitung dari ujung pantul (ujung terikat) adalah...",
                options: [
                    "A. 0,25 m",
                    "B. 0,50 m",
                    "C. 0,75 m",
                    "D. 1,00 m"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena λ = 2 m / 4 = 0,5 m, dan simpul ke-3 ujung terikat berada pada x = (3 - 1) × ½λ = 2 × 0,25 = 0,50 m.",
                    "2. Karena simpul ke-3 berada pada x = 3 × ½λ = 0,75 m dari ujung terikat.",
                    "3. Karena pada ujung terikat, titik pantul merupakan perut ke-1 bukan simpul ke-1.",
                    "4. Karena panjang gelombang tali adalah 2 m × 4 = 8 m."
                ],
                correctReason: 0,
                explanation: "Panjang tali L = 2 m membentuk 4 gelombang, sehingga λ = 2 / 4 = 0,5 m. Letak simpul ke-n pada ujung terikat adalah x_n = (n - 1)(½λ). Untuk n = 3: x₃ = (3 - 1)(0,25) = 0,50 m."
            },
            {
                id: 3,
                question: "Gelombang stasioner memiliki persamaan y = 0,2 sin(5πx) cos(20πt) dengan x dan y dalam meter serta t dalam sekon. Amplitudo gelombang stasioner pada titik yang berjarak x = 0,1 m dari ujung pantul adalah...",
                options: [
                    "A. 0 m",
                    "B. 0,1 m",
                    "C. 0,2 m",
                    "D. 0,1√2 m"
                ],
                correctAnswer: 2,
                reasons: [
                    "1. Karena amplitudo stasioner A_s = 0,2 sin(5π × 0,1) = 0,2 sin(0,5π) = 0,2 × 1 = 0,2 m.",
                    "2. Karena amplitudo gelombang stasioner selalu bernilai tetap 0,2 m di setiap titik x.",
                    "3. Karena sin(0,5π) bernilai 0 sehingga titik x = 0,1 m merupakan titik simpul.",
                    "4. Karena amplitudo stasioner adalah 2A cos(kx) dengan sin(0,5π) = 0,5."
                ],
                correctReason: 0,
                explanation: "Amplitudo gelombang stasioner di posisi x adalah A_s = 0,2 sin(5πx). Untuk x = 0,1 m: A_s = 0,2 sin(0,5π) = 0,2 sin(90°) = 0,2 m."
            },
            {
                id: 4,
                question: "Sebuah gelombang berjalan dinyatakan oleh persamaan: y(x,t) = 0,04 sin(10πt − 4πx + π/6) dengan x dan y dalam meter serta t dalam sekon. Tentukan frekuensi, panjang gelombang, cepat rambat, arah rambat, dan waktu pertama setelah t = 0 ketika partikel pada posisi x = 0,25 m mencapai simpangan maksimum positif.",
                options: [
                    "A. f = 5 Hz, λ = 0,5 m, v = 2,5 m/s, arah +x, dan t = 2/15 s.",
                    "B. f = 10 Hz, λ = 0,5 m, v = 5 m/s, arah −x, dan t = 1/15 s.",
                    "C. f = 5 Hz, λ = 1 m, v = 5 m/s, arah +x, dan t = 1/10 s.",
                    "D. f = 10 Hz, λ = 1 m, v = 10 m/s, arah −x, dan t = 2/15 s."
                ],
                correctAnswer: 0,
                reasons: [
                    "A. Frekuensi diperoleh dari ω/(2π), panjang gelombang dari 2π/k, arah rambat ditentukan oleh tanda antara komponen waktu dan posisi, sedangkan waktu simpangan maksimum diperoleh saat fase pertama kali mencapai π/2.",
                    "B. Frekuensi diperoleh langsung dari koefisien waktu, panjang gelombang dari koefisien posisi, dan arah rambat selalu mengikuti tanda positif pada fase awal.",
                    "C. Frekuensi dan panjang gelombang ditentukan oleh amplitudo gelombang, sedangkan simpangan maksimum terjadi ketika fase sama dengan nol.",
                    "D. Arah rambat ditentukan oleh tanda fase awal, sedangkan simpangan maksimum selalu terjadi ketika fase mencapai π."
                ],
                correctReason: 0,
                explanation: "ω = 10π → f = 5 Hz; k = 4π → λ = 0,5 m; v = fλ = 2,5 m/s; tanda (−kx) berarti arah +x. Pada x = 0,25 m: fase = 10πt − π + π/6 = 10πt − 5π/6. Simpangan maksimum saat fase = π/2 → 10πt = 4π/3 → t = 2/15 s."
            },
            {
                id: 5,
                question: "Intensitas suatu gelombang gempa pada jarak 10 km dari episentrum adalah I. Jika gelombang merambat merata ke segala arah tanpa redaman energi, maka intensitas gelombang tersebut pada jarak 20 km dari episentrum adalah...",
                options: [
                    "A. 1/2 I",
                    "B. 1/4 I",
                    "C. 2 I",
                    "D. 4 I"
                ],
                correctAnswer: 1,
                reasons: [
                    "1. Karena intensitas gelombang berbanding terbalik dengan kuadrat jarak dari sumber (I ∝ 1/r²).",
                    "2. Karena intensitas gelombang berbanding terbalik secara linear dengan jarak (I ∝ 1/r).",
                    "3. Karena energi gelombang bertambah seiring luas permukaan bola yang dilaluinya.",
                    "4. Karena intensitas gelombang tidak dipengaruhi oleh jarak dari episentrum."
                ],
                correctReason: 0,
                explanation: "Intensitas gelombang yang menyebar ke segala arah memenuhi hukum kuadrat terbalik I ∝ 1/r². Ketika jarak r menjadi 2 kali lebih jauh (10 km ke 20 km), intensitasnya menjadi (1/2)² = 1/4 I."
            },
            {
                id: 6,
                question: "Dua sumber bunyi titik memancarkan gelombang bunyi secara merata ke segala arah dalam medium yang sama. Pada jarak acuan yang sama, sumber pertama menghasilkan amplitudo tekanan dua kali amplitudo tekanan sumber kedua. Seorang pengamat menerima bunyi dari sumber pertama pada jarak 2r dan bunyi dari sumber kedua pada jarak r. Jika intensitas bunyi dari sumber kedua yang diterima pengamat adalah 8 × 10⁻⁶ W/m², tentukan intensitas bunyi dari sumber pertama dan jumlah taraf intensitas kedua bunyi jika keduanya tidak saling berinterferensi.",
                options: [
                    "A. Intensitas sumber pertama 8 × 10⁻⁶ W/m² dan taraf intensitas gabungan sekitar 102 dB.",
                    "B. Intensitas sumber pertama 16 × 10⁻⁶ W/m² dan taraf intensitas gabungan sekitar 102 dB.",
                    "C. Intensitas sumber pertama 4 × 10⁻⁶ W/m² dan taraf intensitas gabungan sekitar 96 dB.",
                    "D. Intensitas sumber pertama 32 × 10⁻⁶ W/m² dan taraf intensitas gabungan sekitar 105 dB."
                ],
                correctAnswer: 0,
                reasons: [
                    "A. Intensitas berbanding lurus dengan kuadrat amplitudo tekanan dan berbanding terbalik dengan kuadrat jarak untuk sumber titik, sedangkan taraf intensitas gabungan dihitung dari jumlah intensitas kedua sumber.",
                    "B. Intensitas berbanding lurus dengan amplitudo tekanan dan berbanding terbalik dengan jarak, sedangkan taraf intensitas gabungan diperoleh dengan menjumlahkan taraf intensitas masing-masing sumber.",
                    "C. Intensitas hanya ditentukan oleh amplitudo tekanan sehingga jarak pengamat tidak memengaruhi intensitas yang diterima.",
                    "D. Intensitas berbanding terbalik dengan kuadrat amplitudo tekanan dan berbanding lurus dengan kuadrat jarak dari sumber bunyi."
                ],
                correctReason: 0,
                explanation: "Karena I ∝ p²/r², maka I₁/I₂ = (2/1)² × (1/2)² = 4 × ¼ = 1, sehingga I₁ = 8 × 10⁻⁶ W/m². Intensitas total I_total = 16 × 10⁻⁶ W/m². Taraf intensitas gabungan β = 10 log(16 × 10⁻⁶ / 10⁻¹²) = 10 log(16 × 10⁶) ≈ 102 dB."
            },
            {
                id: 7,
                question: "Sebuah kendaraan A membunyikan sirene dengan frekuensi 600 Hz dan bergerak menuju kendaraan B dengan kecepatan 20 m/s. Pada saat yang sama, kendaraan B bergerak menuju kendaraan A dengan kecepatan 10 m/s. Setelah kedua kendaraan berpapasan, keduanya terus bergerak menjauhi satu sama lain dengan kecepatan yang sama. Jika cepat rambat bunyi di udara adalah 330 m/s, tentukan frekuensi yang didengar pengamat pada kendaraan B sebelum dan sesudah kedua kendaraan berpapasan.",
                options: [
                    "A. Sebelum berpapasan sekitar 658,1 Hz dan setelah berpapasan sekitar 548,6 Hz.",
                    "B. Sebelum berpapasan sekitar 548,6 Hz dan setelah berpapasan sekitar 658,1 Hz.",
                    "C. Sebelum berpapasan 600 Hz dan setelah berpapasan 600 Hz.",
                    "D. Sebelum berpapasan sekitar 640 Hz dan setelah berpapasan sekitar 560 Hz."
                ],
                correctAnswer: 0,
                reasons: [
                    "A. Frekuensi Doppler dipengaruhi oleh kecepatan relatif sumber dan pengamat terhadap medium, sehingga tanda kecepatan pengamat dan sumber harus disesuaikan dengan kondisi mendekat atau menjauh.",
                    "B. Frekuensi hanya dipengaruhi oleh kecepatan sumber, sedangkan gerak pengamat tidak berpengaruh terhadap frekuensi yang diterima.",
                    "C. Frekuensi yang diterima selalu lebih tinggi daripada frekuensi sumber karena kedua kendaraan bergerak.",
                    "D. Cepat rambat bunyi berubah mengikuti kecepatan kendaraan sehingga frekuensi yang diterima tidak dapat ditentukan menggunakan persamaan Doppler."
                ],
                correctReason: 0,
                explanation: "Saat saling mendekati: f' = 600 × (330 + 10)/(330 − 20) = 600 × 340/310 ≈ 658,1 Hz. Saat saling menjauhi: f' = 600 × (330 − 10)/(330 + 20) = 600 × 320/350 ≈ 548,6 Hz."
            },
            {
                id: 8,
                question: "Gelombang air dengan frekuensi 5 Hz merambat pada daerah air dalam dengan cepat rambat 0,6 m/s. Gelombang kemudian memasuki daerah air dangkal yang memiliki cepat rambat 0,4 m/s. Kedua daerah memiliki celah penghalang dengan lebar yang sama, yaitu 10 cm. Jika gelombang melewati celah tersebut, tentukan panjang gelombang pada masing-masing daerah dan kondisi difraksi yang lebih kuat.",
                options: [
                    "A. Panjang gelombang pada air dalam 12 cm dan pada air dangkal 8 cm; difraksi lebih kuat pada air dalam.",
                    "B. Panjang gelombang pada air dalam 8 cm dan pada air dangkal 12 cm; difraksi lebih kuat pada air dangkal.",
                    "C. Panjang gelombang pada kedua daerah sama, yaitu 10 cm; difraksi sama kuat.",
                    "D. Panjang gelombang pada air dalam 12 cm dan pada air dangkal 8 cm; difraksi lebih kuat pada air dangkal."
                ],
                correctAnswer: 0,
                reasons: [
                    "A. Frekuensi tetap ketika gelombang berpindah kedalaman, sehingga panjang gelombang berubah mengikuti cepat rambat; difraksi lebih kuat ketika ukuran celah relatif lebih kecil dibandingkan panjang gelombang.",
                    "B. Frekuensi berubah mengikuti cepat rambat gelombang, sedangkan panjang gelombang tetap ketika gelombang memasuki daerah dangkal.",
                    "C. Difraksi hanya ditentukan oleh frekuensi dan tidak dipengaruhi oleh perbandingan lebar celah terhadap panjang gelombang.",
                    "D. Difraksi lebih kuat ketika panjang gelombang lebih kecil daripada lebar celah karena gelombang lebih mudah melewati celah."
                ],
                correctReason: 0,
                explanation: "Di air dalam: λ₁ = v₁/f = 0,6/5 = 0,12 m = 12 cm. Di air dangkal: λ₂ = v₂/f = 0,4/5 = 0,08 m = 8 cm. Karena λ₁ > lebar celah (12 cm > 10 cm), efek difraksi terjadi lebih kuat pada daerah air dalam."
            },
            {
                id: 9,
                question: "Dua tali memiliki tegangan yang sama. Tali A memiliki massa per satuan panjang sebesar 0,01 kg/m, sedangkan tali B sebesar 0,04 kg/m. Jika kedua tali diberi tegangan yang sama dan digetarkan dengan frekuensi yang sama, pernyataan yang benar adalah...",
                options: [
                    "A. Cepat rambat gelombang pada tali A dua kali cepat rambat tali B.",
                    "B. Cepat rambat gelombang pada tali B dua kali cepat rambat tali A.",
                    "C. Cepat rambat kedua tali sama.",
                    "D. Cepat rambat tali A setengah cepat rambat tali B."
                ],
                correctAnswer: 0,
                reasons: [
                    "A. Cepat rambat gelombang pada tali berbanding lurus dengan akar massa per satuan panjang.",
                    "B. Cepat rambat gelombang pada tali berbanding terbalik dengan akar massa per satuan panjang jika tegangan tetap.",
                    "C. Massa per satuan panjang tidak memengaruhi cepat rambat gelombang.",
                    "D. Cepat rambat hanya ditentukan oleh frekuensi sumber."
                ],
                correctReason: 1,
                explanation: "Dari v = √(F/μ), jika tegangan F sama maka v_A / v_B = √(μ_B / μ_A) = √(0,04 / 0,01) = √4 = 2. Jadi cepat rambat gelombang pada tali A dua kali cepat rambat tali B."
            },
            {
                id: 10,
                question: "Dua sumber bunyi menghasilkan frekuensi masing-masing 200 Hz dan 400 Hz. Keduanya merambat di udara dengan cepat rambat 340 m/s. Perbandingan panjang gelombang bunyi pertama dan kedua adalah...",
                options: [
                    "A. 1 : 2.",
                    "B. 2 : 1.",
                    "C. 1 : 1.",
                    "D. 4 : 1."
                ],
                correctAnswer: 1,
                reasons: [
                    "A. Panjang gelombang berbanding lurus dengan frekuensi.",
                    "B. Panjang gelombang berbanding terbalik dengan frekuensi jika cepat rambat tetap.",
                    "C. Frekuensi tidak berhubungan dengan panjang gelombang.",
                    "D. Semakin tinggi frekuensi, semakin besar panjang gelombang."
                ],
                correctReason: 1,
                explanation: "λ₁ = 340 / 200 = 1,7 m dan λ₂ = 340 / 400 = 0,85 m. Perbandingannya λ₁ : λ₂ = 1,7 : 0,85 = 2 : 1 karena panjang gelombang berbanding terbalik dengan frekuensi saat v tetap."
            }
        ]
    }
};

function getQuestionBank() {
    try {
        const saved = localStorage.getItem("cbt_gelombang_custom_bank_v1");
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error("Gagal memuat bank soal kustom:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_QUESTION_BANK));
}

function saveQuestionBank(bank) {
    localStorage.setItem("cbt_gelombang_custom_bank_v1", JSON.stringify(bank));
}

function resetQuestionBankToDefault() {
    localStorage.removeItem("cbt_gelombang_custom_bank_v1");
    return JSON.parse(JSON.stringify(DEFAULT_QUESTION_BANK));
}
