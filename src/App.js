import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FlashcardList from './FlashcardList';
import Homepage from './Homepage';
import Statistics from './Statistics';
import ArticleList from './ArticleList';
import Article from './Article';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import Music from './Music';
import './App.css';
import music1 from './audio/stepByStep.mp3';
import music2 from './audio/waves.mp3';
import OnlineLearning from './OnlineLearning';

function Root() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={Homepage} />
        <Route path="/statistics" element={Statistics} />
        <Route path="/flashcard" element={FlashcardList} />
        <Route path="/article" element={ArticleList} />
        <Route path="/article/1" element={Article(1)}/>
        <Route path="/article/2" element={Article(2)}/>
        <Route path="/article/3" element={Article(3)}/>
        <Route path="/article/4" element={Article(4)}/>
        <Route path="/article/5" element={Article(5)}/>
        <Route path="/recipe" element={RecipeList} />
        <Route path="/recipe/1" element={Recipe(1)} />
        <Route path="/recipe/2" element={Recipe(2)} />
        <Route path="/recipe/3" element={Recipe(3)} />
        <Route path="/recipe/4" element={Recipe(4)} />
        <Route path="/recipe/5" element={Recipe(5)} />
        <Route path="/recipe/6" element={Recipe(6)} />
        <Route path="/recipe/7" element={Recipe(7)} />
        <Route path="/music" element={Music} />
        <Route path="/online" element={OnlineLearning} />
      </Routes>
    </div>
  );
}

function NavBar() {
  const navigate = useNavigate()
  function handleChange(event) {
    event.preventDefault()
    var audio = document.getElementById("audio")
    var source = document.getElementById("audioSource")
    if (event.target.value === "1") {
      source.src = music1
      console.log("music to music1")
    }
    else{
      source.src = music2;
      console.log("Change to music2")
    }
    audio.load()
    audio.play()
  }
  if (window.location.pathname === "/" || window.location.pathname.indexOf('/recipe') != -1) {
    var className = 'nav-bar-hp'
  }
  else {
    var className = 'nav-bar'
  }
  return (
    <form className={className}>
        <div style={{marginRight:"auto", marginLeft:"7px"}} className="parallel">
              <select style={{marginLeft:"4px", fontSize:"18px"}} onChange={handleChange} >
                  <option value='1' dataValue="music1" style={{fontSize:"18px"}} selected>Step By Step</option>
                  <option value='2' dataValue="music2" style={{fontSize:"18px"}}>Waves</option>
              </select>
              <audio id="audio" style={{marginTop:"4.5px"}} autoPlay controls loop>
                  <source id="audioSource" src={music1}/>
              </audio>
        </div>
        <div className="form-group">
            <button className="btn" onClick={() => navigate('/')}>Homepage</button>
        </div>
        <div className="form-group">
            <button className="btn" onClick={() => navigate('/statistics')}>数据统计</button>
        </div>
        <div className="form-group">
            <button className="btn" onClick={() => navigate('/flashcard')}>正能量卡片</button>
        </div>
        <div className="form-group">
            <button className="btn" onClick={() => navigate('/article')}>心理学专栏</button>
        </div>
        <div className="form-group">
              <button className="btn" onClick={() => navigate('/recipe')}>健康节气食谱</button>
        </div>
        <div className="form-group">
              <button className="btn" onClick={() => navigate('/music')}>关于音乐</button>
        </div>
        <div className="form-group">
              <button className="btn" onClick={() => navigate('/online')}>线上教学</button>
        </div>
    </form>
  )
}

function App() {
  document.title = "芝士三明治"
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Root />
      </BrowserRouter>
    </>
  );
}

export default App;