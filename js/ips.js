const quizData = [
    {
        question: "Apakah kamu menyukai IPS",
        a: "Ya",
        b: "Tidak",
        nope: "b",
    },
    {
        question: "Apakah kamu bisa/fasih berbahasa inggris?",
        a: "Ya",
        b: "Tidak",
        eng: "a",
    },
    {
        question: "Apakah kamu bisa/fasih berbicara inggris?",
        a: "Ya",
        b: "Tidak",
        eng: "a",
    },
    {
        question: "Apakah kamu berbakat dalam menyampaikan informasi?",
        a: "Ya",
        b: "Tidak",
        info: "a",
    },
    {
        question: "Apakah kamu berbakat dalam menyampaikan informasi lewat gambar?",
        a: "Ya",
        b: "Tidak",
        info: "a",
    },
    {
        question: "Apakah kamu tertarik dalam politik?",
        a: "Ya",
        b: "Tidak",
        pol: "a",
    },
    {
        question: "Apakah kamu bisa/memiliki ketertarikan menganalisa sifat/perilaku manusia?",
        a: "Ya",
        b: "Tidak",
        psy: "a",
    },
    {
        question: "Apakah kamu tertarik dalam hukum?",
        a: "Ya",
        b: "Tidak",
        psy: "a",
    },
    {
        question: "Apakah kamu tertarik dalam menyerap informasi laporan keuangan?",
        a: "Ya",
        b: "Tidak",
        biz: "a",
    },

    {
        question: "Apakah kamu tertarik dalam memanajemen keuangan?",
        a: "Ya",
        b: "Tidak",
        biz: "a",
    },
    {
        question: "Apakah kamu tertarik dalam memberi strategi dan melancarkan jalannya keuangan?",
        a: "Ya",
        b: "Tidak",
        biz: "a",
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
let ing = 0
let berita = 0
let mind = 0
let psi = 0
let bis = 0


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
       if(answer === quizData[currentQuiz].eng) {
           ing+=2
       }
       if(answer === quizData[currentQuiz].info) {
           berita+=2
       }
       if(answer === quizData[currentQuiz].pol) {
           mind+=2
       }
       if(answer === quizData[currentQuiz].psy) {
           psi+=2
       }
       if(answer === quizData[currentQuiz].biz) {
        bis+=2
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
            if(ing === 0){
                if(berita === 2){quiz.innerHTML = `
                <div class="que"><h2>Rekomendasi Jurusan: Ilmu Komunikasi</h2></div>
     
                <button onclick="goback()">Kembali ke Home</button>
                `}
                if(berita === 4){quiz.innerHTML = `
                <div class="que"><h2>Rekomendasi Jurusan: Desain Komunikasi Visual</h2></div>
     
                <button onclick="goback()">Kembali ke Home</button>
                `}
                
            }
            if(ing === 2){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Sastra Inggris</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}
            if(ing === 4){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Hubungan internasional</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}
            if(mind === 2){quiz.innerHTML = `
            <div class="que"><h2>Rekomendasi Jurusan: Ilmu Politik</h2></div>
 
            <button onclick="goback()">Kembali ke Home</button>
            `}
            if(mind === 0){
                if(psi === 2){quiz.innerHTML = `
                <div class="que"><h2>Rekomendasi Jurusan: Psikologi</h2></div>
     
                <button onclick="goback()">Kembali ke Home</button>
                `}
                if(psi === 4){quiz.innerHTML = `
                <div class="que"><h2>Rekomendasi Jurusan: Hukum</h2></div>
     
                <button onclick="goback()">Kembali ke Home</button>
                `}  
                if(psi < 4){
                    if(bis === 2){quiz.innerHTML = `
                    <div class="que"><h2>Rekomendasi Jurusan: Akutansi</h2></div> 
                    <button onclick="goback()">Kembali ke Home</button>
                    `}  
                    if(bis === 4){quiz.innerHTML = `
                    <div class="que"><h2>Rekomendasi Jurusan: Bisnis dan Manajemen</h2></div> 
                    <button onclick="goback()">Kembali ke Home</button>
                    `}  
                    if(bis === 6){quiz.innerHTML = `
                    <div class="que"><h2>Rekomendasi Jurusan: Ekonomi</h2></div> 
                    <button onclick="goback()">Kembali ke Home</button>
                    `}  
                }
            }
           }
       }
    }
})