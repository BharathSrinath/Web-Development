import './MyResumeEdu.css';

export function MyResumeEdu() {
    return (
        <div className="MyResumeEdu" id='MyresumeEdu'>
            <p id='header'>Educational Qualification</p>
            <table>
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Qualification</th>
                        <th>Place of Education</th>
                        <th>Grade</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>BE/ECE</td>
                        <td>MNM Jain Engineering College</td>
                        <td>79%</td>
                        <td>2016</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>12<sup>th</sup></td>
                        <td>Velammal Mat. Hr. Sec. School</td>
                        <td>86.4%</td>
                        <td>2012</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>10<sup>th</sup></td>
                        <td>Velammal Mat. Hr. Sec. School</td>
                        <td>89.2%</td>
                        <td>2010</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}