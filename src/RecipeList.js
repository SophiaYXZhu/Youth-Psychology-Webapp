import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";
import recipeHead from './img/recipe_bg_head.png';
import recipeFoot from './img/recipe_bg_foot.PNG';
import recipe1Bg from './img/recipe1_bg.PNG';
import recipe2Bg from './img/recipe2_bg.png';
import recipe3Bg from './img/recipe3_bg.PNG';
import recipe4Bg from './img/recipe4_bg.PNG';
import recipe5Bg from './img/recipe5_bg.PNG';
import recipe6Bg from './img/recipe6_bg.PNG';
import recipe7Bg from './img/recipe7_bg.PNG';

function RecipeList() {
    const navigate = useNavigate();
    return (
        <>
            <div className="parallel" style={{marginTop:"7.5%"}}>
                <div className='small-surface' onClick={() => navigate('/recipe/1')} style={{ background:`url(${recipe1Bg})`}}>
                    <div style={{height: "0", paddingBottom: "50%", paddingTop:"50%", fontSize:"50px", color: "#DBF3FA", textShadow:"2px 2px 0px #000000"}}><b>小雪</b></div>
                </div>
                <div className='small-surface' onClick={() => navigate('/recipe/2')} style={{ background:`url(${recipe2Bg})`}}>
                    <div style={{height: "0", paddingBottom: "50%", paddingTop:"50%", fontSize:"50px", color: "white", textShadow:"2px 2px 0px #000000"}}><b>大雪</b></div>
                </div>
                <div className='small-surface' onClick={() => navigate('/recipe/3')} style={{ background:`url(${recipe3Bg})`}}>
                    <div style={{height: "0", paddingBottom: "50%", paddingTop:"50%", fontSize:"50px", color: "#FFFBDD", textShadow:"2px 2px 0px #000000"}}><b>冬至</b></div>
                </div>
                <div className='small-surface' onClick={() => navigate('/recipe/4')} style={{ background:`url(${recipe4Bg})`}}>
                    <div style={{height: "0", paddingBottom: "50%", paddingTop:"50%", fontSize:"50px", color: "#E5F6DF", textShadow:"2px 2px 0px #000000"}}><b>惊蛰</b></div>
                </div>
            </div>
            <div className="parallel">
                <div className='small-surface' onClick={() => navigate('/recipe/5')} style={{ background:`url(${recipe5Bg})`}}>
                    <div style={{height: "0", paddingBottom: "50%", paddingTop:"50%", fontSize:"50px", color: "#E5F6DF", textShadow:"2px 2px 0px #000000"}}><b>春分</b></div>
                </div>
                <div className='small-surface' onClick={() => navigate('/recipe/6')} style={{ background:`url(${recipe6Bg})`}}>
                    <div style={{height: "0", paddingBottom: "50%", paddingTop:"50%", fontSize:"50px", color: "#DBF3FA", textShadow:"2px 2px 0px #000000"}}><b>清明</b></div>
                </div>
                <div className='small-surface' onClick={() => navigate('/recipe/7')} style={{ background:`url(${recipe7Bg})`}}>
                    <div style={{height: "0", paddingBottom: "50%", paddingTop:"50%", fontSize:"50px", color: "#FFFBDD", textShadow:"2px 2px 0px #000000"}}><b>谷雨</b></div>
                </div>
            </div>
            <img src={recipeHead} width="100%" height="auto" style={{marginTop:"60px", position:"fixed", top:"0"}}/>
            <img src={recipeFoot} width="100%" height="auto" style={{bottom:"0", position:"fixed"}}/>
        </>
    )
}

export default <RecipeList />