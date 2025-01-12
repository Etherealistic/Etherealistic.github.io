import './App.css';
import NavBar from './Components/Navbar';
import Preview from './Components/Preview';
import Profile from './Components/Profile';
import {PreviewData} from './Components/PreviewData';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
// cd website then npm start

function App() {
  return (
    <div className="App">
      <div className='anim_gradient' id="home">
        <body>
          <header>
              <NavBar />
          </header>
          <div className='intro'>
            <Profile />      
          </div>
          <div id="projects" />
          <hr style={{height: "30px", opacity: "0.2", borderWidth: "0", color: "black", backgroundColor: "black", marginTop: "25px"}}></hr>
          <Preview slides={PreviewData} />
          <Projects />
          <div id="about" />
          <AboutMe />
          <div id="contact" />
          <Contact />
          <br></br>
        </body>
      </div>
    </div>
  );
}

export default App;