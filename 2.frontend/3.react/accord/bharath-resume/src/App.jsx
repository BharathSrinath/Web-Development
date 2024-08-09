import './App.css';
import { MyResumeIntro } from './MyResumeIntro';
import { MyResumeCert } from './MyResumeCert';
import { MyResumeEdu } from './MyResumeEdu';
import { MyResumeExp } from './MyResumeExp';
import { MyResumeProjects } from './MyResumeProjects';
import { MyResumeSkills } from './MyResumeSkills';

function App() {
  return (
    <div className="App">
      <MyResumeIntro/>
      <MyResumeEdu/>
      <MyResumeExp/>
      <MyResumeSkills/>
      <MyResumeProjects/>
      <MyResumeCert/>
    </div>
  );
}

export default App;
