import './MyResumeProjects.css'

export function MyResumeProjects(){
    return (
        <div className="MyResumeProjects">
            <p id="header">PROJECTS</p>
            <hr />
            <ul>
                <li id="sub_header">Personal Portfolio</li>
                <p><b>Primary Skills: </b>HTML5, CSS, JS, Node.js</p>
                    <p><b>Features: </b>Animated landing page, skills-based projects filter, progress bar with sliding animation demonstrating soft skills, colliding animation effect documenting my journey and a contact form with validation.</p>
                <li id="sub_header">Job Application Tracker:</li>
                    <p><b>Primary Skills: </b>Java and MYSQL with JDBC</p>
                    <p><b>Features: </b>HR’s can post jobs and Users can apply for Jobs through the same portal, HR can retrieve the information of applicants and both Users and HR’s can perform CRUD operations.</p>
                
            </ul>
        </div>
    )
}