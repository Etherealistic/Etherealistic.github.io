import React, {useState} from 'react'
import {PreviewData} from './PreviewData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import '../Profile.css';


const Preview = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      
      {PreviewData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            <div className='invisibleBox'>
              <div className='gradientBox'></div>
              <h1 className='titleCard'>{slide.title}</h1>
              <hr className="sepLine"></hr>
              <p className="descCard">{slide.description}</p>
            </div>
            {index === current && (
            <img src={slide.image} alt="project" className="image" />)}         
          </div> 
        );
      })}
    </section>
  )
}

export default Preview
