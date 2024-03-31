import React, {useState} from 'react';
import '../Projects.css';
import CloseBtn from '@mui/icons-material/Close';
import Img1 from '../images/JapaneseHouse.png';
import Img2 from '../images/JapaneseInside.png';
import Img3 from '../images/VideoTimeline.png';
import Img4 from '../images/BlenderWoman.png';
import Img5 from '../images/TheRemag.png';
import Img6 from '../images/SFM2.png';
import Img7 from '../images/SFM3.png';
import Img8 from '../images/Ballista.png';
import Img9 from '../images/SFM.png';
import Img10 from '../images/BlenderAnim.png';

const Projects = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
            title: 'Blender-made Japanese House Model',
            description: 'This is a model made as an assignment during the second module of the Bachelors degree of Creative Technology, entirely done using Blender. The entire project was done in the span of 2 weeks, during which I learnt to model. This is one of the first models I have made using this software.',
        },
        {
            id: 2,
            imgSrc: Img2,
            title: 'Blender-made Japanese House Interior',
            description: 'This interior is related to the Japanese House, and consists of multiple models and assets made by me, including materials which let light pass through as it were paper.',
        },
        {
            id: 3,
            imgSrc: Img3,
            title: 'Timeline Of A Video',
            description: 'This image represents the timeline of a video that I made using Davinci Resolve, outlining the combination and timing of many clips which are played at the same time. This is my most complex timeline, totaling at 14 layers of video, not taking into account compounded clips which could reduce this number.',
            url: "https://youtu.be/yTg5mNTftU8"
        },
        {
            id: 4,
            imgSrc: Img4,
            title: 'Blender-made Low Poly Character',
            description: 'This is one of my first models ever made using Blender, and is a relatively simple, as I was learning how to properly operate the software.',
        },
        {
            id: 5,
            imgSrc: Img5,
            title: 'ReMag Product Pitch Video',
            description: "A promotional video pitching an imaginary product which was conceived during the first hackathon during the first module of the Creative Technology Bachelor's degree. Editing and camera work done by me, in collaboration with the rest of the team.",
            url: "https://youtu.be/Q9X6030a8H4"
        },
        {
            id: 6,
            imgSrc: Img6,
            title: 'Source Filmmaker Poster',
            description: 'A poster made in the software Source Filmmaker, created by Valve. The characters originate from a video game released by Valve, named Team Fortress 2, which lets people use and animate their characters or assets for free.',
        },
        {
            id: 7,
            imgSrc: Img7,
            title: 'SFM poster',
            description: 'A poster made in the software Source Filmmaker, created by Valve. The character models belong to Valve, I simply positioned them and applied effects, similarly to how other 3D animation softwares function.',
        },
        {
            id: 8,
            imgSrc: Img8,
            title: "Blender-made Rendition Of Leonardo's Ballista",
            description: "Using rough sketches from Leonardo Da Vinci's work, I recreated one of his concepts for a ballista using Blender to model and create my own interpretation. No third party assets were used to create this model, and the materials fall into the free use category, as they are copyright free.",
        },
        {
            id: 9,
            imgSrc: Img9,
            title: 'SFM poster',
            description: 'Another render made using Source Filmmaker, which functions in the same way as more popular 3D animation softwares such as Maya. It is created by Valve, and lets users access all assets and models from games they have made, and animate them.',
        },
        {
            id: 10,
            imgSrc: Img10,
            title: 'Blender Animation',
            description: 'A still of an animation created in Blender using models and lighting made by me, which includes a walk and upper body movements. Materials such as the wall and the floor are copyright free.',
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const getImg = (item) => {
        setTempImgSrc(item.imgSrc);
        setTitle(item.title);
        setDescription(item.description);
        setLink(item.url);
        setModel(true);
    }

    return (
        <div>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} />
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <a className="projectButton" href={link} target="_blank">Link to the video</a>
            </div>
            <CloseBtn onClick={()=> setModel(false)} />
        </div>
        <div className="projects">
            {data.map((item, index) => {
                return (
                    <div className="pics" key={index} onClick={() => getImg(item)}>
                        <img src={item.imgSrc} style={{width: "100%"}} />
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Projects;
