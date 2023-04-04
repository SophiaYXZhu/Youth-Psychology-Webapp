import React, { useState, useRef, useEffect } from "react";
import "./Recipe.css";

export default function RecipePanel({param}) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(backHeight, 323))
    }

    useEffect(setMaxHeight, []) 
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])
    return (
        <div className={`panel ${flip ? 'flip' : ''}`} style={{ height: height, background:`url(${param[2]})`}} onClick={() => setFlip(!flip)}>
        <div className="front" ref={frontEl} style={{alignItems:"center", fontSize:"50px", color:"black", textShadow:"2px 2px 0px white"}}>
            <b>{param[0]}</b>
        </div>
        <div className="back" ref={backEl} style={{fontSize:"25px", color:"black", textShadow:"2px 2px 0px white"}}>
            {param[1]}
        </div> 
    </div>
    )
}