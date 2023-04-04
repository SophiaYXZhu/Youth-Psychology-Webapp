import React, { useState, useEffect, useRef } from "react";
import './Music.css';
import './App.css';
import music1Cover from './img/music1.png';
import music2Cover from './img/music2.png';
import musicBg from './img/music_bg2.png';
import music1 from './audio/stepByStep.mp3';
import music2 from './audio/waves.mp3';

function Music() {
    const [height, setHeight] = useState('initial')
    const surface = useRef()
    
    function setMaxHeight() {
        const height = surface.current.getBoundingClientRect().height
        setHeight(Math.max(height,1010))
    }

    useEffect(setMaxHeight, [])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight, true)
        return () =>  window.removeEventListener('resize', setMaxHeight, true)
    }, [])

    return (
        <>
            <img src={musicBg} style={{marginTop:"23%",position:"absolute",height:"50%",top:"0",left:"0"}}/>
            <div className='parallel' style={{marginTop:"5%"}}>
                <div className='surface-left' ref={surface} style={{ height: height, background: "rgba(229, 246, 223, 0.7)" }}>
                    <h1 style={{fontSize:"50px", fontFamily: "Georgia", alignItems:"center", color:"black"}}><em>Step By Step</em></h1>
                    <img src={music1Cover} height="auto" width="90%" alt={'music1'} style={{marginTop:"2%", marginBottom:"2%"}} />
                    <div className='surface-text'>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}><b>Main Instruments:</b> brass orchestra, electronic leads, legato strings.</p>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}><b>Description:</b> This song is one of the songs you are currently hearing on our website. The title of this song is called Step by Step. Its theme is centered around the act of self-discovery, with a child slowly learning about the world around them, discovering all kinds of virtues, and learning to use these for improving their lives. It is a hopeful song that consists of a few downs, but ultimately ends with the child learning new things, one step at a time.</p>
                    </div>
                    <audio id="audio" style={{marginTop:"4.5px"}} controls loop>
                        <source id="audioSource" src={music1}/>
                    </audio>
                </div>
                <div className='surface-right' ref={surface} style={{ height: height, background: "rgba(219, 243, 250, 0.7)" }}> 
                    <h1 style={{fontSize:"50px", fontFamily: "Georgia", alignItems:"center", color:"black"}}><em>Waves</em></h1>
                    <img src={music2Cover} height="auto" width="90%" alt={'music2'} style={{marginTop:"2%", marginBottom:"2%"}} />
                    <div className='surface-text'>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}><b>Main Instruments:</b> Strings, percussion, piano.</p>
                        <p style={{fontSize:"20px", fontFamily: "Arial"}}><b>Description:</b> This is another song you are currently hearing on our website. The title of this song is called Waves. This theme is centered around the ups and downs of our lives, as shown through the song at first starting high, then low, then ending with a calm melody. By experiencing both the ups and the downs, we are able to come to terms to who we are as a person, and can approach problems differently. Instead of wandering aimlessly about our goals, we are more focused, and can accomplish more.</p>
                    </div>
                    <audio id="audio" style={{marginTop:"4.5px"}} controls loop>
                        <source id="audioSource" src={music2}/>
                    </audio>
                </div>
            </div>
        </>
    )
}

export default <Music/>;