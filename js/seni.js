const quizData = [
    {
        question: "Apakah kamu menyukai kesenian?",
        a: "Ya",
        b: "Tidak",
        nope: "b",
    },
    {
        question: "Apakah kamu suka menari?",
        a: "Ya",
        b: "Tidak",
        dance: "a",
    },
    {
        question: "Apakah kamu suka bermusik(bernyanyi, dsb.)?",
        a: "Ya",
        b: "Tidak",
        sing: "a",
    },
    {
        question: "Apakah kamu suka berkreasi membuat seni?",
        a: "Ya",
        b: "Tidak",
        art: "a",
    },
    {
        question: "Apakah kamu suka berkreasi membuat kerajinan tangan?",
        a: "Ya",
        b: "Tidak",
        art: "a",
    },
    {
        question: "Apakah kamu bisa membuat kerajinan tangan yang memiliki fungsi selain nilai artistik?",
        a: "Ya",
        b: "Tidak",
        use: "a",
    },
    {
        question: "Apakah kamu bisa mengatur sebuah kelompok dalam suatu proyek seni?",
        a: "Ya",
        b: "Tidak",
        lead: "a",
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
let tari = 0
let nyanyi = 0
let seni = 0
let guna = 0
let pimpin = 0

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
       if(answer === quizData[currentQuiz].dance) {
           tari+=2
       }
       if(answer === quizData[currentQuiz].sing) {
           nyanyi+=2
       }
       if(answer === quizData[currentQuiz].art) {
        seni+=2
       }
       if(answer === quizData[currentQuiz].use) {
        guna+=2
       }
       if(answer === quizData[currentQuiz].lead) {
        pimpin+=2
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
            if(tari === 2){quiz.innerHTML = `
               <div class="que"><h2>Rekomendasi Jurusan: Seni Tari</h2></div>
               <button onclick="goback()">Kembali ke Home</button>
              `}
            if(nyanyi === 2){quiz.innerHTML = `
               <div class="que"><h2>Rekomendasi Jurusan: Seni Musik</h2></div>
               <button onclick="goback()">Kembali ke Home</button>
              `}
            if(seni === 2){quiz.innerHTML = `
               <div class="que"><h2>Rekomendasi Jurusan: Seni Rupa</h2></div>
               <button onclick="goback()">Kembali ke Home</button>
              `}
            if(seni === 4){
                if(guna === 0){
                    quiz.innerHTML = `
               <div class="que"><h2>Rekomendasi Jurusan: Kerajinan Tangan</h2></div>
               <button onclick="goback()">Kembali ke Home</button>
              `
                }
                if(guna === 2){
                    quiz.innerHTML = `
               <div class="que"><h2>Rekomendasi Jurusan: Seni Rupa Kreatif dan Desain</h2></div>
               <button onclick="goback()">Kembali ke Home</button>
              `
                }
            }
            if(pimpin === 2){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Administrasi Seni</h2></div>
            <button onclick="goback()">Kembali ke Home</button>
           `}
           }
       }
    }
})