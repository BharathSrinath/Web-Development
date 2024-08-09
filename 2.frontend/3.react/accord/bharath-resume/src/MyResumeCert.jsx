import './MyResumeCert.css'

export function MyResumeCert(){
    return (
        <div className="MyResumeCert">
            <p id="header">CERTIFICATIONS</p>
            <hr />
            <div className="certificates">
                <p><b>The Web Developer Bootcamp </b>| Udemy</p>
                <p><i>Oct 2023 - Dec 2023</i></p>
            </div>
            <div className="certificates">
                <p><b>Modern React with Redux </b>| Udemy</p>
                <p><i>Oct 2023 - Dec 2023</i></p>
            </div>
            <div className="certificates">
                <p><b>Harvard CS50’S Introduction to Computer Science </b>| edX</p>
                <p><i>Oct 2023 - Jan 2024</i></p>
            </div>
            <div className="certificates">
                <p><b>Java-React Full Stack Developer </b>| Accord Info-Matrix (In Progress)</p>
                <p><i>Feb 2024 - Oct 2024</i></p>
            </div>
        </div>
    )
}