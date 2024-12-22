import './MyResumeIntro.css';
import dp from './assets/images/dp.png';

export function MyResumeIntro() {
    return (
        <div className='MyResumeIntro' id='MyresumeIntro'>
            <div id='intro'>
                <p id='greeting'>Hey!</p>
                <p id='myname'>I'm Bharath</p>
                <p id='designation'>Full Stack Web Developer</p>
                <p id='about'>A proactive learner who thrives in the dynamic tech landscape, continuously acquiring new skills and staying current with industry trends. Demonstrated expertise through self-initiated projects, showcasing the ability to design, develop, and deploy web applications and websites.</p>
            </div>
            <div id='dp'>
                <img src={dp} alt="" id='profilePic'/>
            </div>
        </div>
    )
}