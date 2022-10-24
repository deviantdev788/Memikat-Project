const quizData = [
    {
        question: "Apakah kamu menyukai hukum?",
        a: "Ya",
        b: "Tidak",
        nope: "b",
    },
    {
        question: "Apakah kamu menyukai hukum mancanegara?",
        a: "Ya",
        b: "Tidak",
        area: "a",
    },
    {
        question: "Apakah kamu peduli tentang hukum yang terkait dengan hubungan negara dan warganya?",
        a: "Ya",
        b: "Tidak",
        people: "a",
    },
    {
        question: "Apakah kamu peduli dengan hukum adanya hak dan kewajiban setiap individu?",
        a: "Ya",
        b: "Tidak",
        people: "a",
    },
    {
        question: "Apakah kamu peduli dengan adanya berlakunya HAM bagi setiap individu?",
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
let place = 0
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
       if(answer === quizData[currentQuiz].area) {
           place+=2
       }
       if(answer === quizData[currentQuiz].people) {
           orang+=2
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
            if(place === 2){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Hukum Internasional</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}
            if(place === 0){
            if(orang === 2){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Hukum Publik</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}
            if(orang == 4){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Hukum Perdata</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}if(orang == 6){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Ilmu Hukum</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}}
           }
       }
    }
})