import './MyResumeSkills.css';

export function MyResumeSkills() {
    return (
        <div className="MyResumeSkills" id='MyresumeSkills'>
            <p id="header">Technical Skills</p>
            <table>
                <tbody>
                    <tr>
                        <td id='side_header'>Languages</td>
                        <td>HTML, CSS, JavaScript, Java</td>
                    </tr>
                    <tr>
                        <td id='side_header'>Frameworks/Libraries</td>
                        <td>React.js with Redux, Node.js with Express.js</td>
                    </tr>
                    <tr>
                        <td id='side_header'>Databases</td>
                        <td>MongoDB with Mongoose ODM, MYSQL (DDL, DML, DQL statements), MSSMS</td>
                    </tr>
                    <tr>
                        <td id='side_header'>Stack</td>
                        <td>MERN and Java-React</td>
                    </tr>
                    <tr>
                        <td id='side_header'>Version Control</td>
                        <td>Git and GitHub</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p id="sub_header">Programming Proficiencies:</p>
                <ul>
                    <li>Manipulating arrays and strings to solve complex problems</li>
                    <li>Strong understanding of OOP principles such as Inheritance, Abstraction, and Polymorphism</li>
                    <li>Good at handling and debugging exceptions to ensure smooth execution of programs</li>
                    <li>Proficient in using Java Collections Framework for storing and manipulating groups of objects.</li>
                    <li>Proficient in CRUD operations with MYSQL and MSSMS</li>
                </ul>
            </div>
        </div>
    )
}