import React from "react";
import "./Article.css";
import articleBg from './img/article_bg.png';
import wechatLogo from './img/wechat_logo.png';
import article4Bg from './img/article4_bg.jpg';
import article5Bg from './img/article5_bg.jpg';
import { useNavigate } from "react-router-dom";

function ArticleList() {
    const navigate = useNavigate();
    return (
        <>
            <div style={{marginRight:"5%",justifyContent:"right", display:"flex"}}>
                <img src={articleBg} style={{height:"120px"}}/>
            </div>
            <div className="parallel">
                <div style={{marginLeft:"3%",marginRight:"3%",width:"94%", justifyContent:"center", display:"flex"}}>
                    <h1 style={{color:"Orange",textShadow:"2px 2px 0px #0000FF",fontSize:"60px", fontFamily:"Arial"}}>Read About How Your Mind Works</h1>
                </div>
                <div style={{marginLeft:"3%",marginRight:"3%",width:"94%", justifyContent:"center", display:"flex"}}>
                    <h1 style={{color:"Orange",textShadow:"2px 2px 0px #0000FF",fontSize:"60px", fontFamily:"Arial"}}>Listen to What Many Others Say</h1>
                    <img src={wechatLogo} className="wrap-image-right" style={{width:"10%", height:"62%", marginTop:"3.5%"}}/>
                </div>
            </div>
            <div className = 'parallel'>
                <div className='surface' onClick={() => navigate('/article/1')} style={{height:"450px", background:"url(https://static.tildacdn.com/tild3966-3065-4335-b361-663161343762/mind-mapping-softwar.jpg)"}}>
                    <div>
                        <h1 style={{marginRight:"7%",marginLeft:"7%", color:"darkblue", textShadow:"2px 2px 0px #FF0000"}}>Stress and Mindfulness Training</h1>
                        <p style={{marginRight:"7%",marginLeft:"7%", color:"darkblue", textShadow:"2px 2px 0px #FF0000"}}><b>Mindfulness training can help student to relieve their experience of stress from a neurological way.</b></p>
                    </div>
                </div>
                <a className='surface' href='https://mp.weixin.qq.com/s/NdmlghnyA7dNC8iW6FJZJQ' style={{height:"450px", textDecoration:"none", background:"url(http://corieyatzus.pbworks.com/f/1265435615/failure.jpg)"}}>
                    <h1 style={{marginRight:"7%",marginLeft:"7%", color:"#960fd6", textShadow:"2px 2px 0px #ADD8E6"}}>So you got a bad test score — | 考坏了咩？</h1>
                </a>
            </div>
            <div className="parallel">
                <div className='surface' onClick={() => navigate('/article/2')} style={{height:"450px", background:"url(https://www.outdoorcouncil.asn.au/wp-content/uploads/2016/08/Outdoor-Council-of-Australia.jpg)"}}>
                    <div>
                        <h1 style={{marginRight:"7%",marginLeft:"7%", color:"white", textShadow:"2px 2px 0px #0000FF"}}>Stress and Outdoor Environment</h1>
                        <p style={{marginRight:"7%",marginLeft:"7%", color:"white", textShadow:"2px 2px 0px #0000FF"}}><b>Having a walk outdoor is not only a cliche, but is effective on helping students to relieve their stress.</b></p>
                    </div>
                </div>
                <a className = 'surface' href='https://mp.weixin.qq.com/s/OpR-WxDaYbj539yqW8-7-w' style={{height:"450px", textDecoration:"none", background:"url(https://images.lifestyleasia.com/wp-content/uploads/sites/2/2020/02/25145253/Photo-by-Alfons-Morales-on-Unsplash-scaled-1535x900.jpg)"}}>
                    <h1 style={{marginRight:"7%",marginLeft:"7%", color:"#FFFFE0",  textShadow:"2px 2px 0px #8B0000"}}>F*** neijuan, be sexy &lt;3</h1>
                </a>
            </div>
            <div className='surface' onClick={() => navigate('/article/3')} style={{height:"450px", width:"44%", background:"url(https://www.endocrine.org/-/media/endocrine/images/patient-engagement-webpage/condition-page-images/hormones/hormones_and_endocrine_function_1796x943.jpg"}}>
                <div>
                    <h1 style={{marginRight:"7%",marginLeft:"7%", color:"#2A0091", textShadow:"2px 2px 0px #FFFFFF"}}>Notes #1: What Hormones are Associated with Depression?</h1>
                </div>
            </div>
            <div className='surface' onClick={() => navigate('/article/4')} style={{height:"450px", width:"44%", background:`url(${article4Bg})`}}>
                <div>
                    <h1 style={{marginRight:"7%",marginLeft:"7%", color:"orange", textShadow:"2px 2px 0px darkred"}}>Notes #2: How to Cope with Stress?</h1>
                </div>
            </div>
            <div className='surface' onClick={() => navigate('/article/5')} style={{height:"450px", width:"44%", background:`url(${article5Bg})`}}>
                <div>
                    <h1 style={{marginRight:"7%",marginLeft:"7%", color:"#0DB0B6", textShadow:"2px 2px 0px #444444"}}>Notes #3: How to Cope with Peer Pressure 内卷?</h1>
                </div>
            </div>
        </>
    )
}

export default <ArticleList/>;