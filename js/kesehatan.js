const quizData = [
    {
        question: "Apakah kamu menyukai bidang kesehatan?",
        a: "Ya",
        b: "Tidak",
        nope: "b",
    },
    {
        question: "Apakah kamu tertarik ingin menjadi dokter?",
        a: "Ya",
        b: "Tidak",
        doc: "a",
    },
    {
        question: "Apakah kamu tertarik ingin menjadi dokter gigi?",
        a: "Ya",
        b: "Tidak",
        teeth: "a",
    },
    {
        question: "Apakah kamu tertarik untuk mempelajari obat-obatan?",
        a: "Ya",
        b: "Tidak",
        people: "a",
    },
    {
        question: "Apakah kamu tertarik dalam menyehatkan masyarakat luas?",
        a: "Ya",
        b: "Tidak",
        wide: "a",
    },
    {
        question: "Apakah kamu tertarik menjadi perawat dan mengurusi pasien?",
        a: "Ya",
        b: "Tidak",
        nurse: "a",
    },
    {
        question: "Apakah kamu tertarik dalam menangani kehamilan?",
        a: "Ya",
        b: "Tidak",
        preg: "a",
    },
    {
        question: "Apakah kamu tertarik dalam menangani gizi nutrisi seseorang?",
        a: "Ya",
        b: "Tidak",
        nut: "a",
    },
    {
        question: "Apakah kamu tertarik dalam menangani kesehatan hewan?",
        a: "Ya",
        b: "Tidak",
        ani: "a",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let nein = 0
let dok = 0
let orang = 0
let besar = 0
let gigi = 0
let pera = 0
let hamil = 0
let nutri = 0
let hewan = 0


loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function goback(){
    window.location.href = "/index.html";
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].nope) {
           nein+=2
       }
       if(answer === quizData[currentQuiz].doc) {
           dok+=2
       }
       if(answer === quizData[currentQuiz].people) {
           orang+=2
       }
       if(answer === quizData[currentQuiz].wide) {
        besar+=2
       }
       if(answer === quizData[currentQuiz].nurse) {
        pera+=2
       }
       if(answer === quizData[currentQuiz].preg) {
        hamil+=2
       }
       if(answer === quizData[currentQuiz].nut) {
        nutri+=2
       }
       if(answer === quizData[currentQuiz].ani) {
        hewan+=2
         }
         if(answer === quizData[currentQuiz].teeth) {
         gigi+=2
         }
       

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } if(currentQuiz === quizData.length) {
           if(nein === 2){quiz.innerHTML = `
           <div class="que"><h2>Pilih jurusan yang kamu minati agar tidak menyesal!</h2></div>

           <button onclick="goback()">Kembali ke Home</button>
           `}
           if(nein < 2){
            if(dok === 2){quiz.innerHTML = `
             <div class="que"><h2>Rekomendasi Jurusan: Pendidikan Dokter</h2></div>
             <button onclick="goback()">Kembali ke Home</button>
           `}
           if(gigi === 2){quiz.innerHTML = `
             <div class="que"><h2>Rekomendasi Jurusan: Pendidikan Dokter Gigi</h2></div>
             <button onclick="goback()">Kembali ke Home</button>
           `}
           if(orang === 2){quiz.innerHTML = `
             <div class="que"><h2>Rekomendasi Jurusan: Farmasi</h2></div>
             <button onclick="goback()">Kembali ke Home</button>
           `}
           if(besar === 2){quiz.innerHTML = `
             <div class="que"><h2>Rekomendasi Jurusan: Kesehatan Masyarakat</h2></div>
             <button onclick="goback()">Kembali ke Home</button>
           `}
           if(pera === 2){quiz.innerHTML = `
             <div class="que"><h2>Rekomendasi Jurusan: Keperawatan</h2></div>
             <button onclick="goback()">Kembali ke Home</button>
           `}
           if(hamil === 2){quiz.innerHTML = `
             <div class="que"><h2>Rekomendasi Jurusan: Kebidanan</h2></div>
             <button onclick="goback()">Kembali ke Home</button>          
           `}
           if(nutri === 2){quiz.innerHTML = `
             <div class="que"><h2>Rekomendasi Jurusan: Ilmu Gizi</h2></div>
             <button onclick="goback()">Kembali ke Home</button>          
           `}
           if(hewan === 2){quiz.innerHTML = `
             <div class="que"><h2>Rekomendasi Jurusan: Kedokteran Hewan</h2></div>
             <button onclick="goback()">Kembali ke Home</button>          
           `}
           }
       }
    }
})