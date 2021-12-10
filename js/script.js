'use strict'

const fragen = [];
const antworten = [ 
    'Meine Quellen sagen ja',
    'Meine Quellen sagen nein', 
    'Deine Zukunft wird großartig sein',
    'In ferner Zukunft wird ein Meteorit auf dich fallen',
    'Die Kristallkugel reagiert auf deine Frage nicht'
];

const input = document.getElementById('input');
const button = document.getElementById('button');
const body = document.getElementById('body');


button.addEventListener('click', addQuestion);
button.addEventListener('click', getAnswer);

function addQuestion() {
    
    fragen.push(input.value);
    
    localStorage.setItem("fragenArray", fragen);
};

function getAnswer () {

    let rndnumber = Math.floor(Math.random() * 5);
    console.log(rndnumber);
    const antwort = document.createTextNode(`Die Antwort auf deine Frage "${input.value}" lautet: "${antworten[rndnumber]}".`);
    const p = document.createElement('p');
    body.appendChild(p);
    p.appendChild(antwort);

    input.value = '';
};



