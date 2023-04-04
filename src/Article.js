import React from "react";
import "./Article.css";
import articleA1 from './img/article_1_1.png';
import articleBg from './img/article_bg.png';

function Article(id) {
    return (
    <>
        <div style={{marginRight:"5%", justifyContent:"right", display:"flex"}}>
            <img src={articleBg} style={{height:"120px"}}/>
        </div>
        {ARTICLE_CONTENTS[id-1].content}
    </>)
}

const colorArr = [
    "#ffe0c2", "rgb(209,237,242)", "rgb(239,236,242)", "rgb(225,252,225)", "rgb(255, 225, 224)"
]  

const ARTICLE_CONTENTS = [
    {
        id: 1,
        content: 
            <>
                <div className="surface" style={{height:"820px", background:colorArr[parseInt(colorArr.length*Math.random())]}}>
                    <div className="text-container">
                        <h1 style={{fontSize:"50px"}}>Stress and Mindfulness Training</h1>
                        <p style={{fontSiz:"15px", color:"#999999"}}>Author: Karen</p>
                        <img className="wrap-image-right" style={{width:"22%",height:"auto"}} src={articleA1} alt={'articleA1'}></img>
                        <p style={{textAlign:"left", fontSize:"25px"}}>Stress is a common issue experienced during studenthood. Students often need to cope with overwhelming exams, projects, and loads of homework. Moreover, stress may come from other sources, such as peer pressure, family relationship, and the urge to improve oneself. When a person encounters a stressful stimulus, such as the AP exam, the stress hormone cortisol will act as a neurotransmitter to initiate chemical communications in the brain. This may result in neurological symptoms such as memory loss, fatigue, and insomnia, and physical symptoms such as weight gain, high blood pressure, and high blood sugar. Thus, it is necessary to investigate a scientifically proven method that can help students relieve their stress.</p>
                        <p style={{textAlign:"left", fontSize:"25px"}}>Mindfulness training is a reasonable solution to reduce the stress hormone cortisol. Mindfulness can be defined as a way of training attention that helps to deactivate the stress response in the body. Studies have shown that people who receive more mindfulness training have lower stress severity ratings. This can be explained because mindfulness training can reduce the brain's default mode of activity, which is associated with introspective thoughts such as daydreaming. Common mindfulness techniques that students can practice in their daily lives include mindful breathing and mindful eating. Mindful breathing is the exercise of slowing down the breathing movement and paying close attention to your awareness and your breath in and out. Mindful eating refers to deliberately slowing down the eating process and focusing on your sensation when you smell, taste, and swallow the food.</p>
                        <h2>Citation</h2>
                        <p style={{textAlign:"left", fontSize:"25px"}}>"How to Reduce Stress through Mindfulness | Rehabilitation Research and Training Center on Aging with Physical Disabilities." <em>Agerrtc.washington.edu</em>, agerrtc.washington.edu/info/factsheets/. mindfulness#techniques. Accessed 6 May. 2022.</p>
                        <p style={{textAlign:"left", fontSize:"25px"}}>"Meditation & Mindfulness for Stress Reduction." <em>Pacific Neuroscience Institute</em>, 11 Mar. 2020, www.pacificneuroscienceinstitute.org/blog/brain-health/meditation-mindfulness-for-stress-reduction/. Accessed 6 May 2022.</p>
                    </div>
                </div>
            </>
    },
    {
        id: 2,
        content:
            <>
                <div className="surface" style={{height:"680px", background:colorArr[parseInt(colorArr.length*Math.random())]}}>
                    <div className="text-container"> 
                        <h1 style={{fontSize:"50px"}}>Stress and Outdoor Environment</h1>
                        <p style={{fontSiz:"15px", color:"#999999"}}>Author: Karen</p>
                        <p style={{textAlign:"left", fontSize:"25px"}}>When we feel anxious during studying, our parents and teachers often suggest us to talk a walk outdoor or do some outdoor exercises. Many times, we may ignore their advice and choose to play mobile phones to cope with stressful periods. However, going outdoor is not only a cliche, but has been scientifically proven to help relieve stress and improve people's health. Exposure to the outdoor environment, including outdoor walks, outdoor exercise, and nature viewing, are all regarded as mechanisms that suppress stress chemicals within an acceptable boundary, thus reducing people's emotional reactions. A systematic study published by the University of Pennsylvania demonstrated that spending time in outdoor environment is effective on decrease people's experience of stress, especially in green areas. The researchers analyzed and reviewed 43 real-time non-laboratory studies of stress responses to outdoor environments as well as participant's self-report to stress measurement. Since different studies use different research methods and measurements of stress, it is difficult to generalize the physiological effect of exposing people to outdoor environment. Nonetheless, the majority of the studies provide convincing evidence to show that exposure to outdoor environment helps to reduce stress. Moreover, going outdoor has long-term health benefits in terms of stress-coping, such as restoring attention and enhancing cognitive function. Considering the potential benefits of exposure to outdoor environments, especially those that contain natural spaces, going outdoor is a recommended and applicable way to help reduce stress.</p>
                        <h2>Citation</h2>
                        <p style={{textAlign:"left", fontSize:"25px"}}>Kondo, Michelle C., Sara F. Jacoby, and Eugenia C. South. "Does spending time outdoors reduce stress? A review of real-time stress response to outdoor environments." <em>Health & place</em> 51 (2018): 136-150. Accessed 20 May 2022.</p>
                        <p style={{textAlign:"left", fontSize:"25px"}}>Live Science Staff. "Dreaming May Help Relieve a Bad Day." <em>Livescience.com</em>, 29 Nov. 2011, www.livescience.com/17216-dreaming-relieve-bad-day-study-suggests.html. Accessed 19 May 2022.</p>
                    </div>
                </div>
            </>
    },
    {
        id: 3,
        content:
            <>
                <div className="surface" style={{height:"770px", background:colorArr[parseInt(colorArr.length*Math.random())]}}>
                    <div className="text-container"> 
                        <h1 style={{fontSize:"50px"}}>Notes #1: What Hormones are Associated with Depression?</h1>
                        <p style={{fontSiz:"15px", color:"#999999"}}>Author: Yutong</p>
                        <p style={{textAlign:"left", fontSize:"25px"}}>Pressure is surely something that all of us are familiar with, whether we'd like to or not. The reasons for having pressure can vary with people, but what is the actual biological cause of having depression? </p>
                        <p style={{textAlign:"left", fontSize:"25px"}}>Our emotions are controlled by several neurotransmitters:</p>
                        <ol style={{textAlign:"left", fontSize:"25px"}}>
                            <li>Serotonin:</li>
                            <ul>
                                <li>Assists with desire, learning, memory, appetite, body temperature, and much more.</li>
                                <li>Individuals with depression typically have insufficient serotonin.</li>
                                <li>This may be related to reasons as simple as not getting enough sunlight.</li>
                                <ul>
                                    <li>So if you feel strong, negative emotions, do not hesitate to take a walk outside, maybe with your headphones on, and relax yourself for a few minutes, focusing only on the view before you.</li>
                                </ul>
                            </ul>
                            <li>Dopamine:</li>
                            <ul >
                                <li>Assists with reward responses, movement, and emotional responses.</li>
                                <li>Depressed individuals tend to have lower levels of dopamine on average.</li>
                                <ul>
                                    <li>Eating chocolate helps with the secretion of dopamine, so when you feel stressed, eat a block of chocolate to relieve yourself. </li>
                                    <li>This way, you can also mentally calm yourself. </li>
                                </ul>
                            </ul>
                            <li>Norepinephrine:</li>
                            <ul>
                                <li>Norepinephrine is related to attention, sleep, and arousal among other roles. </li>
                                <li>People with depression tend to have lower levels of norepinephrine on average, but too much of it can actually contribute to anxiety and other unpleasant effects.</li>
                                <li>It is similar to adrenaline, which is used to treat life-threatening low blood pressure.</li>
                            </ul>
                        </ol>
                        <p></p>
                    </div>
                </div>
            </>
    },
    {
        id: 4,
        content:
            <>
                <div className="surface" style={{height:"800px", background:colorArr[parseInt(colorArr.length*Math.random())]}}>
                    <div className="text-container"> 
                        <h1 style={{fontSize:"50px"}}>Notes #2: How to Cope with Stress?</h1>
                        <p style={{fontSiz:"15px", color:"#999999"}}>Author: Yutong</p>
                        <ol style={{textAlign:"left", fontSize:"25px"}}>
                            <li>Take breaks from watching, reading, or listening to news stories, including those on social media.</li>
                            <ul>
                                <li>It's good to be informed but hearing about the traumatic event constantly can be upsetting. Consider limiting news to just a couple of times a day and disconnecting from phone, TV, and computer screens for a while.</li>
                            </ul>
                            <li>Take care of yourself.</li>
                            <ul>
                                <li>Take deep breaths, stretch.</li>
                                <li>Try to eat healthy, well-balanced meals.</li>
                                <ul>
                                    <li>Of course, if eating some food can help you recover from sadness, do so, but do not do it regularly if it includes all junk food.</li>
                                </ul>
                                <li>Exercide regularly.</li>
                                <ul>
                                    <li>Exercising is a good way of relieving stress for your brain.</li>
                                    <li>Playing video games <em>CANNOT</em> help you get rest: yes, you do get happier if you play occasionally, but you might also feel more tired if you play for more than half an hour in a row.</li>
                                </ul>
                                <li>Get plenty of sleep.</li>
                                <li>Try to do some other activities you enjoy.</li>
                            </ul>
                            <li>Talk to others.</li>
                            <ul>
                                <li>Talk with people you trust about how you are feeling. </li>
                                <ul>
                                    <li>You may not even need good feedback, because talking alone can relieve some of the stress.</li>
                                    <li>Share your problems and how you are feeling and coping with a parent, friend, counselor, doctor, or pastor.</li>
                                </ul>
                                <li>Connect with your community- or faith-based organizations.</li>
                                <ul>
                                    <li>Immersing yourself in your hobbies is a good way of distracting yourself from all the sadness in your life.</li>
                                </ul>
                                <li>Recognize when you need more help. </li>
                                <ul>
                                    <li>If problems continue or you are thinking about self-harm, talk to a psychologist, social worker, or professional counselor.</li>
                                    <li>There is a professional counselor in our school!</li>
                                </ul>
                            </ul>
                        </ol>
                        <p></p>
                    </div>
                </div>
            </>
    },
    {
        id: 5,
        content:
        <>
            <div className="surface" style={{height:"850px", background:colorArr[parseInt(colorArr.length*Math.random())]}}>
                <div className="text-container"> 
                    <h1 style={{fontSize:"50px"}}>Notes #3: How to Cope with Peer Pressure 内卷?</h1>
                    <p style={{fontSiz:"15px", color:"#999999"}}>Author: Yutong</p>
                    <p style={{textAlign:"left", fontSize:"25px"}}>内卷 is a special term that we are becoming more and more familiar with. I'm sure many of us can hear it at least several times in a week, as it is becoming one of the popular phrases on the internet, but before we learn how to cope with it, lets first analyze what <em>is</em> 内卷.</p>
                    <p style={{textAlign:"left", fontSize:"25px"}}>Let's demonstrate 内卷 using a simple example. </p>
                    <p style={{textAlign:"left", fontSize:"25px"}}>For instance, you are working in a company selling marshmallows. During the pandemic, your boss informs you that due to decreased demand for marshmallows, your company would begin firing workers to lower its production costs. Of course, you would like to keep your job, so you work harder to prevent yourself from being fired. However, your co-workers also would not want to be fired, so they also work harder. Over time, everyone begins exhausting themselves, but in the eyes of your boss, your relative abilities have not changed, so you would have to work even harder to prove yourself. This is how 内卷 begins, and why most people believe that 内卷 is detrimental to society. </p>
                    <p style={{textAlign:"left", fontSize:"25px"}}>Some of us believe that 内卷 can push ourselves to obtain more achievements than we were able to but have never tried. However, other people believe that 内卷 is nothing more than a vicious cycle of stress and pain that deprives one of their true interests in learning. While some choose to 躺平in the process, others are forced to become a part of this cycle. </p>
                    <p style={{textAlign:"left", fontSize:"25px"}}>So how do we cope with 内卷?</p>
                    <ol style={{textAlign:"left", fontSize:"25px"}}>
                        <li>Have your own goals.</li>
                        <ul>
                            <li>You should be clear about what your long-term goal is, regardless if it is going to a university you look up to, or living in a certain country you like. </li>
                            <li>Only when you have a clear goal can you see if what you are doing can lead you up to that goal. If what you are doing does not interest you, nor does it help in your long-term goal, then you might not want to use most of your time on this task. </li>
                        </ul>
                        <li>Do not directly go with what you are told. </li>
                        <il>
                            <li>内卷 can be very stressful, and you might want to exceed other people by doing everything you can. </li>
                            <li>But following what everyone believes is good may not be the best choice: still, ask yourself if what you are doing can truly lead you to your goal. Afterwards, you may be able to have a clearer view about what you should focus on doing. </li>
                        </il>
                    </ol>
                </div>
            </div>
        </>
    },
]

export default Article;