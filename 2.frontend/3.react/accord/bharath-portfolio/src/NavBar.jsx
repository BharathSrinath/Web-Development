import './NavBar.css'

export function NavBar() {
    return (
        <div className="NavBar">
            <div></div>
            <div>
                <ul>
                    <li><a href="#MyresumeIntro">Home</a></li>
                    <li><a href="#MyresumeEdu">Education</a></li>
                    <li><a href="#MyresumeExp">Experience</a></li>
                    <li><a href="#MyresumeSkills">Skills</a></li>
                    <li><a href="#MyresumeProjects">Projects</a></li>
                    <li><a href="#MyresumeCert">Certificates</a></li>
                    <li><a href="#MyresumeContact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}