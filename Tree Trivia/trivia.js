"use strict"


function buildTrivia() {
    const output = [];
    let randomQuestions = myQuestions.sort(() => Math.random() - .5);
    randomQuestions = randomQuestions.slice(0,10);
    myQuestions = randomQuestions;

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            const image = document.createElement('img');
            image.src = currentQuestion.pictures;
            let letter;
            

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </input>
                    </label>`
                );
            }
            output.push (
                `<div class="slide">
                    <div class="question">${currentQuestion.question}</div>
                    <div class="answers">${answers.join('')}</div>
                    <img class="picture" src=${currentQuestion.pictures}>
                </div>`
            );
        }
    );
    triviaContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = triviaContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = "lightgreen";
        }
        else {
            answerContainers[questionNumber].style.color = "red";
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${10}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = 'none';
    }
    else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
    }

function showPreviousSlide() {
    showSlide(currentSlide - 1);
    }

const triviaContainer = document.getElementById("trivia");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
let myQuestions = [
    {
        question: "What is the tallest tree in the world?",
        answers: {
            a: "English Oak",
            b: "Sugar Pine",
            c: "Douglas Fir",
            d: "Coastal Redwood"
        },
        correctAnswer: "d",
        pictures: "pictures/redwoodTrunk.jpg"
    },
    {
        question: "Which plant family does the pear tree belong to?",
        answers: {
            a: "Olive",
            b: "Rose",
            c: "Lily",
            d: "Poppy"
        },
        correctAnswer: "b",
        pictures: "pictures/pearTree.jpg"
    },
    {
        question: "What does the latin word 'arboretum mean?",
        answers: {
            a: "Woodland Glade",
            b: "Ancient Field",
            c: "Group of trees near water",
            d: "Place with trees"
        },
        correctAnswer: "d",
        pictures: "pictures/arboretum.jpg"
    },
    {
        question: "Which of the following trees do not produce nuts?",
        answers: {
            a: "Hazel",
            b: "Hickory",
            c: "Juniper",
            d: "Almond"
        },
        correctAnswer: "c",
        pictures: "pictures/almonds.jpg"
    },
    {
        question: "Which tree indigenous to Newfoundland and Labrador is stunted and shaped by our strong winds?",
        answers: {
            a: "Black Spruce",
            b: "Tuckamore",
            c: "Silver Birch",
            d: "Alder"
        },
        correctAnswer: "b",
        pictures: "pictures/tuckamore.jpg"
    },
    {
        question: "What is the native continent of the arabica coffee tree, which produces 65% of global coffee?",
        answers: {
            a: "North America",
            b: "Asia",
            c: "Africa",
            d: "South America"
        },
        correctAnswer: "c",
        pictures: "pictures/arabica.jpg"
    },
    {
        question: "What is the common name of the tree species Fraxinus excelsior?",
        answers: {
            a: "Alder",
            b: "Black Walnut",
            c: "Rowan",
            d: "Ash"
        },
        correctAnswer: "d",
        pictures: "pictures/FraxinusExcelsior.jpg"
    },
    {
        question: "What is a bonsai tree?",
        answers: {
            a: "A tree growing at the center of a traditional Japenese garden",
            b: "A large Japenese cherry tree",
            c: "A miniature tree in a container",
            d: "A tree pruned into a spherical shape"
        },
        correctAnswer: "c",
        pictures: "pictures/bonsai.jpg"
    },
    {
        question: "What is the native region of the coconut palm?",
        answers: {
            a: "Northern Canada",
            b: "Brazil to Argentina",
            c: "Central Malasia to South West Pacific",
            d: "North Africa"
        },
        correctAnswer: "c",
        pictures: "pictures/coconutPalm.jpg"
    },
    {
        question: "What is the age of the oldest recorded Maidenhair Tree?",
        answers: {
            a: "400 years old",
            b: "900 years old",
            c: "2000 years old",
            d: "3500 years old"
        },
        correctAnswer: "d",
        pictures: "pictures/maidenHair.jpg"
    },
    {
        question: "What tree has earned the nickname 'tree of the dead'?",
        answers: {
            a: "Hawthorn",
            b: "Yew",
            c: "London plane",
            d: "Silver Birch"
        },
        correctAnswer: "b",
        pictures: "pictures/yewTree.jpg"
    },
    {
        question: "What fruit does the tree Malus domestica produce?",
        answers: {
            a: "Apricot",
            b: "Apple",
            c: "Cherry",
            d: "Orange"
        },
        correctAnswer: "b",
        pictures: "pictures/malusDomestica.jpg"
    },
    {
        question: "What is the largest tree by volume growing at the Royal Botanical Garden in the U.K.?",
        answers: {
            a: "Chesnut-leaved Oak",
            b: "Red maple",
            c: "White willow",
            d: "Scots Pine"
        },
        correctAnswer: "a",
        pictures: "pictures/kewGarden.jpg"
    }
];

//display trivia
buildTrivia();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
