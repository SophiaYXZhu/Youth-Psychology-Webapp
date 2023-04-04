import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    return (
        <form className="nav-bar">
        <div className="form-group">
            <button className="btn" onClick={() => navigate('/')}>Homepage</button>
        </div>
        <div className="form-group">
            <button className="btn" onClick={() => navigate('/flashcard')}>正能量卡片</button>
        </div>
        <div className="form-group">
            <button className="btn" onClick={() => navigate('/article')}>心理学专栏</button>
        </div>
        <div className="form-group">
            <button className="btn" onClick={() => navigate('/gallary')}>美术鉴赏</button>
        </div>
        </form>
    )
}

function Gallary(){
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Gallary</h1>
        </div>
    )
}

export default
<>
    <NavBar/>
    <Gallary/>
</>;