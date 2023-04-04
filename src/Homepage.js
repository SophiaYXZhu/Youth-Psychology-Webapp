import React, { useState, useEffect, useRef } from "react";
import './Homepage.css';
import './App.css';
import HeroSection from './HeroSection';
import catA1 from './img/cat_1_1.jpg';
import catB1 from './img/cat_2_1.png';
import catC1 from './img/cat_3_1.png';
import catC2 from './img/cat_3_2.png';
import catD1 from './img/cat_4_1.png';
import trees from './img/trees.png';
import desk from './img/desk.png';
import child from './img/child.png';

function Homepage() {
    const [height, setHeight] = useState('initial')
    const surface = useRef()
    
    function setMaxHeight() {
        const height = surface.current.getBoundingClientRect().height
        setHeight(Math.max(height,720))
    }

    useEffect(setMaxHeight, [])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight, true)
        return () =>  window.removeEventListener('resize', setMaxHeight, true)
    }, [])

    return (
        <>
            <div className='parallel'>
                <div className='surface-left' ref={surface} style={{ height: height }}>
                    <h1 style={{fontSize:"50px", fontFamily: "Arial", alignItems:"center", color:"black"}}>Who are we</h1>
                    <img className='wrap-image-left' src={catA1} height="auto" width="40%" alt={'catA1'} style={{marginLeft:"6%"}}/>
                    <div className='surface-text'>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}>We are a group of 11th grade students in SHSID who suffer from every day stress and want to make a change.</p>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}>We have distinct interests and study different subjects and courses, however, our hope to help our student community have brought us together in the junior project group called “Cheese Sandwich.” We aim at increasing the students' confidence when they are facing difficulties and decreasing their stress levels when they feel anxious.</p>
                    </div>
                    <img src={child} style={{bottom:"0",left:"0",position:"absolute", width:"100%"}}/>
                </div>
                <div className='surface-right'  ref={surface} style={{ height: height }}> 
                    <h1 style={{fontSize:"50px", fontFamily: "Arial", color:"black"}}>What we do</h1>
                    <img className='wrap-image-right' src={catB1} height="auto" width="35%" alt={'catB1'}/>
                    <div className='surface-text'>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}>We entertain you in your most stressful moments.</p>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}>Our website is a platform of showcase that assembles the works of all group members. In this website, you can see pictures and hart-warming sentences that cheer you up, you can also view articles related with psychology and stress. In addition, you can see the results of the survey we conducted across our grade and some tips in decreasing the stress level. Moreover, you can listen to calm and relaxing songs and even view recipes that can contribute to a healthier diet!</p>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}>Stay positive and energetic, keep your minds open, and hope for the better future!</p>
                    </div>
                    <img src={desk} style={{bottom:"0",left:"0",position:"absolute", width:"100%"}}/>
                </div>
            </div>
            <div className='parallel'>
                <div className='surface-left' ref={surface} style={{ height: height }}>
                    <h1 style={{fontSize:"50px", fontFamily: "Arial", alignItems:"center", color:"black"}}>Why are we doing this</h1>
                    <img className='wrap-image-left' src={catC1} height="auto" width="40%" alt={'catC1'}/>
                    <div className='surface-text'>
                            <p style={{fontSize:"20px", fontFamily: "Arial"}}>Because we care about the mental health and growth of teenagers. According to our survey, an average score of 7.12 was rated from 1 to 10 on how stressful do SHSIDers identify their lives to be. Mental stress is an issue not to be ignored for students' performance, attitude, and growth.</p>
                            <p style={{fontSize:"20px", fontFamily: "Arial"}}>In our survey, we investigated possible motivations, causes, and effects of many factors to stress, including peer pressure, GPA, and sleep deprivation. We aim to reduce these negative effects through creative methods displayed on our website.</p>
                    </div>
                    <img className='wrap-image-right' src={catC2} height="auto" width="40%" alt={'catC2'}/>
                    <div className='surface-text'>
                            <p style={{fontSize:"20px", fontFamily: "Arial"}}>For instance, we find pressures from self-motivated or peer-driven academic disciplines be a large part of psychological stress, while physical distresses such as sleep deprivations also definitely plays a part in contributing to the high stress rating, as the great majority of students sleep only 4-6 hours on average.</p>
                            <p style={{fontSize:"20px", fontFamily: "Arial"}}>We found many of these variables to be associated with stress levels, and therefore we proposed methods in attempt to mitigate them. These include: flashcards with encouraging sentences and beautiful sceneries, psychological articles to help students learn more about their mental minds, healthy diet with cultural profundity, etc.</p>
                    </div>
                </div>
                <div className='surface-right' ref={surface} style={{ height: height }}>
                    <h1 style={{fontSize:"50px", fontFamily: "Arial", color:"black"}}>About Our Team Name</h1>
                    <img className='wrap-image-left' src={catD1} height="auto" width="30%" alt={'catD1'}/>
                    <div className='surface-text'>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}>"我们联合！"</p>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}>This team name originated from a very popular video on Bilibili that has gained around 30 million views based on a famous ACG game Arknights. The original line of the video was: "我们给它形成一个两面包夹芝士（两面包夹之势）！" . Although the original video was more meme-oriented, it shows how we need to unite together in order to solve problems that are closely related with our lives. This is not merely a team name, but also a maxim of our group.</p>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}>Combining our hobbies and the value embedded in the words, we hope to create a friendly environment for students to relax and reduce their anxieties together. "Alone we can do so little, together we can do so much."</p>
                    </div>
                    <img src={trees} style={{bottom:"0",left:"0",position:"absolute", width:"100%"}}/>
                </div>
            </div>
        </>
    )
}

export default 
<>
    <HeroSection/>
    <Homepage/>
</>;
