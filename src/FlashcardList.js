import React from 'react';
import './Flashcard.css';
import './App.css';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards}) {
  return (
      <div className="card-grid">
        {
          
          flashcards.map(
            flashcard => {
              return <Flashcard flashcard={ flashcard } key={ flashcard.id } />
            }
          )
        }
      </div>
  )
}

const colorArr = [
  "rgb(255,224,194)", "rgb(209,237,242)", "rgb(239,236,242)", "rgb(225,252,225)", "rgb(255, 225, 224)"
]

const FLASHCARDS = [
  {
    id: 1,
    question: "Sometimes later becomes never, DO IT NOW.",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  },
  {
    id: 2,
    question: "At the end of the day, I am thankful that my blessings are bigger than my problems.",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  },
  {
    id: 3,
    question: "Focus on what you want, but never forget to be grateful for what you already have.",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  },
  {
    id: 4,
    question: "The days you don't want to are the days that you have to.",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  },
  {
    id: 5,
    question: 'Worrying is stupid, it\'s like walking around with an umbrella waiting for it to rain.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 6,
    question: 'Stop waiting for things to happen, go out and make them happen.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 7,
    question: 'Go confidently in the direction of your dreams. Live the life you\'ve imagined.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 8,
    question: 'Work hard in silence, let your success be the noise.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 9,
    question: 'The darkest hour is just before the dawn.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 10,
    question: 'Do not pray for easy lives. Pray to be stronger.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 11,
    question: 'Push harder than yesterday if you want a different tomorrow.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 12,
    question: 'My goal is not to be better than anyone else, but to be better than I used to be.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 13,
    question: 'Don\'t wish it were easier. Wish you were better.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 14,
    question: 'Everyday is a fresh start.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 15,
    question: 'It is never too late to be what you might have been. ',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  },
  {
    id: 16,
    question: 'Success is a journey, not a destination.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 17,
    question: 'Change your thoughts and you change your world.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 18,
    question: 'Life has no remote, get up and change it yourself.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
  {
    id: 19,
    question: 'If your path is more difficult, it\'s because your calling is higher.',
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "flashcard",
  }, 
]

const ECONOMICS = [
  {
    id: 1,
    term: "Opportunity costs: ",
    def: "Your time is limited. Think carefully about what you really want to do, better be something you are interested or something that is significant to you currently.",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "economics",
  },
  {
    id: 2,
    term: "Absolute advantage and comparative advantage: ",
    def:"Imagine yourself as a country that is involved in international trade. You would want to produce goods using the least number of resources. In other words, specialize in what you are most capable of!",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "economics",
  },
  {
    id: 3,
    term: "Production Possibility Frontier: ",
    def: "The PPF shows various combinations of the amounts of two goods which can be produced within the given resources. You can take this as an inspiration when planning your studies. You need to think of how to study on the curve and not to panic about why you are not studying outside of the curve.",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "economics",
  },
  {
    id: 4,
    term: "Incentives: ",
    def: "Incentives are what motivates you to behave in a certain way, while preferences are your needs, wants and desires. Economic incentives provide you the motivation to pursue your preferences. When struggling during your studies, you may think of WHAT are your incentives and use your incentives to encourage yourself.",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "economics",
  },
  {
    id: 5,
    term: "Cost-benefit analysis: ",
    def: "Cost-benefit analysis is a systematic approach to estimating the strengths and weaknesses of alternatives. You can use this approach to analyze your options when making decisions.",
    color: colorArr[parseInt(Math.random()*colorArr.length)],
    type: "economics",
  },
]

export default 
<>
  <div style={{marginLeft:"3%",marginRight:"3%",width:"94%", justifyContent:"center", display:"flex"}}>
    <h1 style={{color:"#8ABAAE",textShadow:"2px 2px 0px #00094B", fontSize:"60px", fontFamily:"Arial"}}>Tips that could help you reduce stress, FROM AN ECONOMIC PERSPECTIVE!</h1>
  </div>
  <div className="container">
    <FlashcardList flashcards={ECONOMICS} type={"economics"} />
  </div>
  <div style={{marginLeft:"3%",marginRight:"3%",width:"94%", justifyContent:"center", display:"flex"}}>
    <h1 style={{color:"#F79BB4",textShadow:"2px 2px 0px #CFCF00",fontSize:"60px", fontFamily:"Arial"}}>Always end the day with a positive thought!</h1>
  </div>
  <div className="container">
    <FlashcardList flashcards={FLASHCARDS} type={"flashcard"} />
  </div>
</>;