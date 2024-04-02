import React from 'react';
import '../Aboutme.css';
import DR from '../images/Davinci.png';
import Blender from '../images/Blender.png';
import Java from '../images/Java.png';
import Indesign from '../images/Indesign.png';
import SFM from '../images/SFMLogo.png';
import HTML from '../images/HTML.png';
import Python from '../images/Python.png';
import After from '../images/After.png';

export default function AboutMe() {
    return (
        <div>
            <div className='case'>
                <div className='aboutBox'>
                    <h1 className='aboutMeTitle' style={{ fontSize: "48px" }}>About Me</h1>
                    <p style={{ fontSize: "22px" }}>My name is Francesco Giorcelli, and I am a student of Creative Technology at the University of Twente.
                        My main strengths are my leadership, creativity and determination, which I use to ensure that every project I work on is successful.</p>
                    <p style={{ fontSize: "22px" }}>I strive for perfection, and constantly try to greatly improve all the skills I practice, through hard work and strong presence.
                        I can learn new skills incredibly quickly, meaning I have a broad knowledge in many sectors including computer science, video editing, 3D modeling, animation, and music to name a few.
                    </p>
                </div>
                <div className='skillsBox'>
                    <h1 style={{ fontSize: "48px" }}>Skills</h1>
                    <div className='progressBarBox'>
                        <p className='textBar'><b>DAVINCI RESOLVE</b></p>
                        <label for="bar1"><img src={DR} alt="Davinci Resolve" title="Davinci Resolve" className='progressImages' /></label>
                        <progress id="bar1" className='progressBar' value={100} max={100} />
                    </div>

                    <div className='progressBarBox'>
                        <p className='textBar'><b>HTML/CSS</b></p>
                        <label for="bar2"><img src={HTML} alt="HTML/CSS" title="HTML/CSS" className='progressImages' /></label>
                        <progress id="bar2" className='progressBar' value={90} max={100} />
                    </div>

                    <div className='progressBarBox'>
                        <p className='textBar'><b>BLENDER</b></p>
                        <label for="bar3"><img src={Blender} alt="Blender" title="Blender" className='progressImages' /></label>
                        <progress id="bar3" className='progressBar' value={90} max={100} />
                    </div>

                    <div className='progressBarBox'>
                        <p className='textBar'><b>JAVA</b></p>
                        <label for="bar4"><img src={Java} alt="Java" title="Java" className='progressImages' /></label>
                        <progress id="bar4" className='progressBar' value={80} max={100} />
                    </div>

                    <div className='progressBarBox'>
                        <p className='textBar'><b>SOURCE FILMMAKER</b></p>
                        <label for="bar5"><img src={SFM} alt="SFM" title="Source Filmmaker" className='progressImages' /></label>
                        <progress id="bar5" className='progressBar' value={70} max={100} />
                    </div>

                    <div className='progressBarBox'>
                        <p className='textBar'><b>INDESIGN</b></p>
                        <label for="bar6"><img src={Indesign} alt="Indesign" title="Indesign" className='progressImages' /></label>
                        <progress id="bar6" className='progressBar' value={70} max={100} />
                    </div>

                    <div className='progressBarBox'>
                        <p className='textBar'><b>PYTHON</b></p>
                        <label for="bar7"><img src={Python} alt="Python" title="Python" className='progressImages' /></label>
                        <progress id="bar7" className='progressBar' value={60} max={100} />
                    </div>

                    <div className='progressBarBox'>
                        <p className='textBar'><b>AFTER EFFECTS</b></p>
                        <label for="bar8"><img src={After} alt="After Effects" title="After Effects" className='progressImages' /></label>
                        <progress id="bar8" className='progressBar' value={50} max={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}