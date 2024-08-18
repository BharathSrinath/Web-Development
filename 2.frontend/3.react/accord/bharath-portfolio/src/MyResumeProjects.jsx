import './MyResumeProjects.css'
import projectCE from './assets/images/project-CE.jpg'
import projectJAT from './assets/images/project-JAT.JPG'
import projectCSM from './assets/images/project-CSM.jpg'

export function MyResumeProjects() {
    return (
        <div className="MyResumeProjects" id='MyresumeProjects'>
            <p id="header">Projects</p>
            <div id='projects'>
                <div className='project'>
                    <img src={projectCE} alt="" />
                    <div>
                        <p id='subHeader'>Campground Explorer</p>
                        <p><b>Primary Skills: </b>HTML, CSS, JS, Node.js with Express.js, MongoDB with Mongoose ODM, Git and GitHub</p>
                        <ul><b>Features: </b>
                        <li>Login/register page with <b>authentication</b></li>
                        <li><b>Sessions</b> to track login status</li>
                        <li><b>CRUD operations</b> on campgrounds and reviews created by the user</li>
                        <li>File upload feature</li>
                        </ul>
                    </div>
                </div>
                <div className='project'>
                    <img src={projectJAT} alt="" />
                    <div>
                        <p id='subHeader'>Job Application Tracker:</p>
                        <p><b>Primary Skills: </b>Java and MYSQL with JDBC</p>
                        <ul><b>Features: </b>
                        <li>HR’s can post jobs and Users can <b>apply for Jobs</b></li>
                        <li>HR can retrieve the information of applicants</li>
                        <li>both Users and HR’s can perform <b>CRUD operations</b>.</li>
                        </ul>
                    </div>
                </div>
                <div className='project'>
                    <img src={projectCSM} alt="" />
                    <div>
                        <p id='subHeader'>Cricket Scorecard Manager:</p>
                        <p><b>Primary Skills: </b>React.js, Node.js with Express.js, MongoDB with Mongoose ODM, Git and GitHub</p>
                        <ul><b>Features: </b>
                        <li>Customizable team and format interface</li>
                        <li>Toss <b>animation</b></li>
                        <li><b>Form validation</b></li>
                        <li>Sortable player statistics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}