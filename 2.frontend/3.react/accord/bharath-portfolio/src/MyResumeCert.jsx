import './MyResumeCert.css'
import harvard from './assets/images/harvard.PNG';
import react from './assets/images/react.jpg';
import fullstack from './assets/images/fullstack.jpg';

export function MyResumeCert() {
    return (
        <div className="MyResumeCert" id='MyresumeCert'>
            <p id="header">Certifications</p>
            <div className='certificates'>
                <div>
                    <img src={fullstack} alt="" className='certificate'/>
                    <p><b>The Web Developer Bootcamp </b>| Udemy</p>
                    <p><i>Oct 2023 - Dec 2023</i></p>
                </div>
                <div>
                    <img src={react} alt="" className='certificate'/>
                    <p><b>Modern React with Redux </b>| Udemy</p>
                    <p><i>Oct 2023 - Dec 2023</i></p>
                </div>
                <div>
                    <img src={harvard} alt="" className='certificate'/>
                    <p><b>Harvard CS50’S Introduction to Computer Science </b>| edX</p>
                    <p><i>Oct 2023 - Jan 2024</i></p>
                </div>
            </div>
        </div>
    )
}