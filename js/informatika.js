const quizData = [
    {
        question: "Apakah kamu menyukai ilmu teknologi?",
        a: "Ya",
        b: "Tidak",
        nope: "b",
    },
    {
        question: "Apakah kamu memiliki ketertarikan dalam mengutak-atik hardware komputer?",
        a: "Ya",
        b: "Tidak",
        pc: "a",
    },
    {
        question: "Apakah kamu memiliki ketertarikan dalam mengutak-atik software komputer?",
        a: "Ya",
        b: "Tidak",
        pub: "a",
    },
    {
        question: "Apakah kamu bisa melakukan bisnis lewat online, programming, dan menganalisis datanya?",
        a: "Ya",
        b: "Tidak",
        people: "a",
    },
    {
        question: "Apakah kamu bisa mengatur bisnis lewat online, programming, dan menganalisis datanya",
        a: "Ya",
        b: "Tidak",
        people: "a",
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
let laptop = 0
let dup = 0
let orang = 0

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
       if(answer === quizData[currentQuiz].pc) {
           laptop+=2
       }
       if(answer === quizData[currentQuiz].people) {
           orang+=2
       }
       if(answer === quizData[currentQuiz].pub) {
        dup+=2
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
            if(laptop === 2){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Teknik Komputer</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}
            if(dup === 2){
            if(orang === 0){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Ilmu Komputer</h2></div>
            <button onclick="goback()">Kembali ke Home</button>
            `}
            if(orang === 2){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Sistem Informasi</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}
            if(orang == 4){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Manajemen Informatika</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}}
           }
       }
    }
})