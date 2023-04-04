import React from 'react';
import './Homepage.css';
import hpImg from'./homepage/hpImg2.png';

function HeroSection() {
    return (
        <>
            <div className = 'hero-container'>
                <img className="hp-bg" src={hpImg} width=""></img>
                <div className = "title">
                    <h1 style={{fontSize: "100px", fontFamily: "Arial"}}>芝士三明治</h1>
                    <div className='subtitle-wrapper' style={{display:"flex"}}>
                            <div style={{width: "1%", height: "82%", backgroundColor: "orange", marginLeft: "2%", marginTop:"4.5px", display:"inline-block"}}></div>
                            <small style={{color: "white", fontSize: "25px", fontFamily: "Arial"}}>EXPLORE MORE ABOUT YOUTH PSYCHOLOGY</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;