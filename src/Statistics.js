import React, { useState, useEffect, useRef } from "react";
import './Statistics.css';
import './App.css';
import stats1 from './img/statistics1.PNG';

function Statistics() {
    const colorArr = [
        "rgb(255,224,194)", "rgb(209,237,242)", "rgb(239,236,242)", "rgb(225,252,225)", "rgb(255, 225, 224)"
    ]
    
    return (
        <>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>1) On a scale of 1-10, how stressful do you think your life is?</h1>
                <div className='panel-text'>
                    <ul>
                        <li>The mean is 7.12 on a scale of 1 to 10:
                            <ul>
                                <li>&le;5: 8.1%</li>
                                <li>5-6: 19.1%</li>
                                <li>7-8: 53.7%</li>
                                <li>9-10: 19.1%</li>
                            </ul>
                        </li>
                        <li>Variance: 1.40</li>
                        <li>Standard deviation: 1.18</li>
                        <li>Coefficient of variation: 0.17
                            <ul>
                                <li>CV&le;1, so there isnt much variance in the results</li>
                                <li>Since the scores are scaled largely at the higher end of the spectrum, there appears to be a trend that students are feeling stressed.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>2) In your opinion, what are your main sources of stress in life?</h1>
                <div className='panel-text'>
                    <ul>
                        <li>The top three most frequently chosen options are:
                            <ul>
                                <li>Peer pressure: 78.1%</li>
                                <li>Tests/GPA: 75.61%</li>
                                <li>Deadlines: 68.29%</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>3) How often do you find yourself procrastinating?</h1>
                <div className='panel-text'>
                    <ul>
                        <li>It is interesting to note that none of the respondent chose "seldom" or "never".</li>
                        <li>Most chose "often":
                            <ul>
                                <li>Meaning procrastination is becoming a part of our lives.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>4) What do you believe is causing you to procrastinate?</h1>
                <div className="panel-text">
                    <ul>
                        <li>The top three most frequently chosen options are:
                            <ul>
                                <li>Doing homework continuously is too boring and tiresome: 88.9%</li>
                                <li>The deadline has not yet approach: 62.9%</li>
                                <li>The homework is too hard: 68.29%</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>5) What is the quantile range of GPA you are aiming at achieving <em>realistically</em>?</h1>
                <div className="panel-text">
                    <ul>
                        <li>Largely centered around &le;20%: 64.52%</li>
                        <li>Only 2 students feedbacked that they do not have a GPA goal.</li>
                        <li>Students are still largely influenced by their academic performance.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>6) Do you think the test and GPA system our school is utilizing right now is not very appropriate?</h1>
                <div className="panel-text">
                    <ul>
                        <li>Students are responding "yes" (58.06%) more than "no".</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>7) What do you believe are the reasons behind your choice?</h1>
                <div className="panel-text">
                    <ul>
                        <li>The survey results show that they are largely due to the fact that tests are more of a determinant of term scores than homework or projects, while most are unable to do as well on tests as those assignments.</li>
                        <li>A large percentage also remarked that the tests are scheduled too close, which is derived from the pressure of having to study for a test in a month with cumulative content for 6 or more subjects.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>8) How often do you feel the students in SHSID are too 卷?</h1>
                <div className="panel-text">
                    <ul>
                        <li>68.75% feedbacked always.</li>
                        <li>This peer pressure is a large factor that influences how people feel about the educational atmosphere in SHSID.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>9) What are some reasons that cause you to feel this way?</h1>
                <div className="panel-text">
                    <ul>
                        <li>Mostly competition participation and high test scores that levies more pressure on students.</li>
                        <li>A plausible reason can be the emphasis on gpa and academic achievement in school (i.e. the scholarships, the percentile in GPA, etc.).</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>10) What is the average amount of sleep that you get every day?</h1>
                <img src={stats1} className="wrap-image-right" width="50%"/>
                <div className="panel-text">
                    <ul>
                        <li>The survey results reports that 95% of stuents said 4-6 hours of sleep per day.</li>
                        <li>Since the histogram appears to be roughly normal and we can assume that the amount of sleep one SHSIDer gets is independent from another's we will procede with a one-sample t-test to determine whether the average amount of sleep students get is smaller than the recommended 8 hours of sleep.</li>
                        <li>H<sub>0</sub>: μ=8</li>
                        <li>H<sub>A</sub>: μ&le;8
                            <ul>
                                <li>Standard deviation = 0.125 hours.</li>
                                <li>μ<sub>0</sub> = 8 hours.</li>
                                <li>x̄ = 5.125.</li>
                                <li>df = n-1 = 19.</li>
                                <li>t = -102.859.</li>
                            </ul>
                        </li>
                        <li>At a significance level of 0.05, P(t&le;-102.859) = 0.000. There is strong evidence for the alternate hypothesis that the actual mean sleeping time of SHSID students is below 8 hours, centered at 5 hours.</li>
                        <li>It is significantly lower than officially recomended 8 hours.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>11) What do you believe is causing your lack of sleep?</h1>
                <div className="panel-text">
                    <ul>
                        <li>70.83% responded the cause was homework.</li>
                        <li>54.17% responded the cause was procratination.</li>
                        <li>Both top reponses are related to time. It appears that time management seems to be a major issue.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>12) How often do you feel the DDL of major assignments is too short?</h1>
                <div className="panel-text">
                    <ul>
                        <li>Answers pretty spread out for this question. On a chi-square goodness of fit test, a P(Chi<sup>2</sup>&ge;8.071) = 0.089 &#62; 0.05 α level is found insignificant.</li>
                        <li>It is not as concentrated as the previous ones, but still most still commented "often" (35.71%)</li>
                        <li>However, it is not as big of a problem students feel relative to other sources of stress in their lives.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>13) Do you hold any K about mental health, or how well do you think you know stress?</h1>
                <div className="panel-text">
                    <ul>
                        <li>The average is 5.54 on a scale of 1 to 10.</li>
                        <li>Students are still not really knowledgable about mental health in general, which can reflect a very serious problem especially combined with the fact that a lot of participants said that they always feel stressed.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>14) To what extent do you believe learning about stress and how to cope with stress is important?</h1>
                <div className="panel-text">
                    <ul>
                        <li>The average is 8.17 on a scale of 1 to 10.</li>
                        <li>Most students believe that learning to cope with stress can be very important, which brings more meaning to our project.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>15) What are some things that you hope to be able to access to relieve stress?</h1>
                <div className="panel-text">
                    <ul>
                        <li>The most popular answers are:
                            <ul>
                                <li>Encouraging quotes/memes that make you laugh: 63.41%.</li>
                                <li>A place where you can express your thoughts anonymously: 51.22%.</li>
                                <li>Introductions to problems and positive solutions of mental stress: 43.9%.</li>
                                <li>Music recommendations and compositions: 43.9%.</li>
                            </ul> 
                        </li>
                        <li>All of these answers become solutions posted on our website.</li>
                    </ul>
                </div>
            </div>
            <div className="survey-panel" style={{background:colorArr[parseInt(Math.random()*colorArr.length)]}}>
                <h1 style={{fontSize:"40px", alignItems:"center", color:"black"}}>16) To what extent do you think that relieving stress is beneficial for your school/social/family life?</h1>
                <div className="panel-text">
                    <ul>
                        <li>Students largely reflected to be beneficial either to a small or large scale</li>
                        <li>The most popular answers are:
                            <ul>
                                <li>I believe that stress relief has changed my academic career/social life/family relations in a more positive direction: 53.66%.</li>
                                <li>I think it has had some positive impact: 34.15%.</li>
                            </ul>
                        </li>
                        <li>Only 1 student reflected that they want stress to be more productive.</li>
                        <li>Most people feel like this stress is harmful for their mental and physical health.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default <Statistics />;