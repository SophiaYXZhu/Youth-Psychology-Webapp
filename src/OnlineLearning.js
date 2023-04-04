import React, { useState, useEffect, useRef } from "react";
import './OnlineLearning.css';
import './App.css';
import music1 from './audio/stepByStep.mp3';
import music2 from './audio/waves.mp3';

function OnlineLearning() {
    // const [height, setHeight] = useState('initial')
    // const surface = useRef()
    
    // function setMaxHeight() {
    //     const height = surface.current.getBoundingClientRect().height
    //     setHeight(Math.max(height,1010))
    // }

    // useEffect(setMaxHeight, [])
    // useEffect(() => {
    //     window.addEventListener('resize', setMaxHeight, true)
    //     return () =>  window.removeEventListener('resize', setMaxHeight, true)
    // }, [])

    return (
        <>
            {/* <img src={musicBg} style={{marginTop:"23%",position:"absolute",height:"50%",top:"0",left:"0"}}/> */}
            <form name='inputData' method="get" style={{marginTop:"3%", marginLeft:"7%"}}>
                <p style={{fontFamily:"Arial",fontSize:"30px"}}>Age:</p>
                <input type="text" name="age" id="age" placeholder="Enter your age" style={{width:"150px",height:"30px"}} />
                <p style={{fontFamily:"Arial",fontSize:"30px"}}>Gender:</p>
                <input type="text" name="gender" id="gender" placeholder="Enter your gender (M/F)" style={{width:"150px",height:"30px"}} />
            </form>
        </>
    )
}

export default <OnlineLearning />;