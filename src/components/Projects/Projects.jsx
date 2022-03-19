import React, {useState} from 'react';
import './Projects.css';
import projectLists from './projectLists';
import ToTop from '../ScrollToComponent/ToTop'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Projects() {
    const [list, setList] = useState(projectLists);
    
    const displayList = list.map(list =>(
            <div className="project__individual__container" key={list.key}>
                <div className="project__individual__wrap">
                <Carousel className='project-image' autoPlay interval='5000' transitionTime='1000' infiniteLoop={true} showThumbs={false}>
                    {list.image.map(img =>(
                        <img className='slide' src={process.env.PUBLIC_URL + img} alt={list.title} />
                    ))}
                </Carousel>
                <div className="project__description__wrap">
                    <h3 className="project__title">{list.title}</h3>
                    <p className="project__description">{list.description}</p>
                    <div className="project__description__icon__wrap">
                        {list.icon.map(icon=>(
                            <i className={icon}></i>
                        ))}
                    </div>
                    <div className="links">
                        {list.demo && <div><a href={list.demo} className="card-link">Demo</a></div>}
                        {list.github && <div><a href={list.github} className="card-link">Github</a></div>}
                        {list.deploy && <div><a href={list.deploy} className="card-link">WepPage</a></div>}
                        {list.appStore && <div><a href={list.appStore} className="card-link">AppStore</a></div>}
                    </div>
                </div>
                </div>

            </div>
    ))

    return (
        <div className="project-container container" id='project'>
            <h1 className='project-title'>Projects</h1>
        {/* <video src={process.env.PUBLIC_URL + "/videos/1.mp4"} autoPlay loop muted /> */}
        <div className='project-row'>{displayList}</div>
        <div className='project-scrollup'>
                <ToTop to="home"/>
        </div>
        </div>
    )
}

export default Projects
