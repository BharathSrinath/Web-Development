import './App.css';
import { NavBar } from './NavBar';
import { MyResumeIntro } from './MyResumeIntro';
import { MyResumeCert } from './MyResumeCert';
import { MyResumeEdu } from './MyResumeEdu';
import { MyResumeExp } from './MyResumeExp';
import { MyResumeProjects } from './MyResumeProjects';
import { MyResumeSkills } from './MyResumeSkills';
import { MyResumeContact } from './MyResumeContact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MyResumeIntro/>
      <MyResumeEdu/>
      <MyResumeExp/>
      <MyResumeSkills/>
      <MyResumeProjects/>
      <MyResumeCert/>
      <MyResumeContact/>
    </div>
  );
}

export default App;
