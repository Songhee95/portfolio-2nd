import React, {useState} from 'react';
import './Projects.css';
import projectLists from './projectLists';
import ToTop from '../ScrollToComponent/ToTop'

function Projects() {
    const [list, setList] = useState(projectLists);
    
    const displayList = list.map(list =>(
            <div className="card border-warning" key={list.key}>
            <div className="card-header bg-dark border-warning ">{list.title}</div>
                <img className="project-image" src={process.env.PUBLIC_URL + list.image}  alt={list.title} />
                    <div className="card-text bg-dark">{list.description}</div>
                    <div className='icon bg-dark'>

                        {list.icon.map(icon=>(
                            <i className={icon}></i>
                        ))}

                    </div>
                <div className="links card-footer bg-dark border-warning">
                    <div><a href={list.github} className="card-link">Github</a></div>
                    <div><a href={list.deploy} className="card-link">WepPage</a></div>
                </div>
            </div>
    ))

    return (
        <div className="project-container">
        <video src={process.env.PUBLIC_URL + "/videos/1.mp4"} autoPlay loop muted />
        <div className='project-row'>{displayList}</div>
        <div className='project-scrollup'>
                <ToTop to="home" id='project'/>
        </div>
        </div>
    )
}

export default Projects
