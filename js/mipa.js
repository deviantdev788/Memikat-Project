const quizData = [
    {
        question: "Apakah kamu menyukai Matematika dan IPA?",
        a: "Ya",
        b: "Tidak",
        nope: "b",
    },
    {
        question: "Apakah kamu suka menyajikan data?",
        a: "Ya",
        b: "Tidak",
        data: "a",
    },
    {
        question: "Apakah kamu tertarik dengan adanya mikroogranisme kecil?",
        a: "Ya",
        b: "Tidak",
        micro: "a",
    },
    {
        question: "Apakah kamu tertarik dengan adanya gejala alam yang logis dan scinetific?",
        a: "Ya",
        b: "Tidak",
        surro: "a",
    },
    {
        question: "Apakah kamu tertarik dengan adanya gejala alam yang ada di sekitar dunia?",
        a: "Ya",
        b: "Tidak",
        surro: "a",
    },
    {
        question: "Apakah kamu tertarik dengan reaksi molekul dan atom-atom?",
        a: "Ya",
        b: "Tidak",
        atom: "a",
    },
    {
        question: "Apakah kamu tertarik dengan luar angkasa?",
        a: "Ya",
        b: "Tidak",
        space: "a",
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
let datum = 0
let mikro = 0
let sekel = 0
let molu = 0
let angka = 0

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
       if(answer === quizData[currentQuiz].data) {
           datum+=2
       }
       if(answer === quizData[currentQuiz].micro) {
           mikro+=2
       }
       if(answer === quizData[currentQuiz].surro) {
           sekel+=2
       }
       if(answer === quizData[currentQuiz].atom) {
           molu+=2
       }
       if(answer === quizData[currentQuiz].space) {
        angka+=2
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
            if(mikro === 2){quiz.innerHTML = `
              <div class="que"><h2>Rekomendasi Jurusan: Biologi</h2></div>
              <button onclick="goback()">Kembali ke Home</button>
           `}
           if(datum === 2){quiz.innerHTML = `
              <div class="que"><h2>Rekomendasi Jurusan: Statistika</h2></div>
              <button onclick="goback()">Kembali ke Home</button>
           `}
           if(sekel === 2){quiz.innerHTML = `
              <div class="que"><h2>Rekomendasi Jurusan: Fisika</h2></div>
              <button onclick="goback()">Kembali ke Home</button>
           `}
           if(sekel === 4){quiz.innerHTML = `
              <div class="que"><h2>Rekomendasi Jurusan: Geofisika</h2></div>
              <button onclick="goback()">Kembali ke Home</button>
           `}
           if(molu === 2){quiz.innerHTML = `
              <div class="que"><h2>Rekomendasi Jurusan: Kimia</h2></div>
              <button onclick="goback()">Kembali ke Home</button>
           `}
           if(angka === 2){quiz.innerHTML = `
              <div class="que"><h2>Rekomendasi Jurusan: Astronomi</h2></div>
              <button onclick="goback()">Kembali ke Home</button>
           `}
           }
       }
    }
})