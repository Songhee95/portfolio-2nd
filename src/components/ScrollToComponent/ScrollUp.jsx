import React from 'react'
import {Link} from 'react-scroll';
import './ScrollToComponent.css'

function ScrollUp(props) {
    return (
        <div className='scroll-up'>
            <Link to={props.to} spy={true} smooth={true} duration={50} id={props.id}><i className="fas fa-chevron-up"></i></Link>
        </div>
    )
}

export default ScrollUp