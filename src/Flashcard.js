import React, { useState } from 'react';
import './Flashcard.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import img12 from './img/12.jpg';
import img13 from './img/13.jpg';
import img14 from './img/14.jpg';
import img15 from './img/15.jpg';
import img16 from './img/16.jpg';
import img17 from './img/17.jpg';
import img18 from './img/18.jpg';
import img19 from './img/19.jpg';
import econ1 from './img/econ1.png';
import econ2 from './img/econ2.jpg';
import econ3 from './img/econ3.png';
import econ4 from './img/econ4.jpg';
import econ5 from './img/econ5.jpg';

const ECON_DICT = {
  "econ1":econ1,
  "econ2":econ2,
  "econ3":econ3,
  "econ4":econ4,
  "econ5":econ5,
}

const IMG_DICT= {
  "img1": img1,
  "img2": img2,
  "img3": img3,
  "img4": img4,
  "img5": img5,
  "img6": img6,
  "img7": img7,
  "img8": img8,
  "img9": img9,
  "img10": img10,
  "img11": img11,
  "img12": img12,
  "img13": img13,
  "img14": img14,
  "img15": img15,
  "img16": img16,
  "img17": img17,
  "img18": img18,
  "img19": img19,
}

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  if (flashcard.type==="flashcard") {
    function loadImage(imgName) {
      return <img className="photo" src={IMG_DICT[imgName]} height={300} width={503} alt={imgName} />;
    }
    return (
      <div
        className={`card ${flip ? 'flip' : ''}`}
        style={{ height: "323px", background: flashcard.color}} 
        onClick={() => setFlip(!flip)}
      >
        <div className="front" style={{alignItems:"center"}}>{flashcard.question}</div>
        <div className="back">{loadImage("img"+flashcard.id)}</div> 
      </div>
    )
  }
  else {
    function loadImage(imgName) {
      return <img className="photo" src={ECON_DICT[imgName]} height={300} width="auto" alt={imgName} />;
    }
    return (
      <div
        className={`card ${flip ? 'flip' : ''}`}
        style={{ height: "323px", background: flashcard.color}} 
        onClick={() => setFlip(!flip)}
      >
        <div className="front" style={{alignItems:"center"}}>
          <b>{flashcard.term}</b>{flashcard.def}
        </div>
        <div className="back">{loadImage("econ"+flashcard.id)}</div> 
      </div>
    )
  }
  }

