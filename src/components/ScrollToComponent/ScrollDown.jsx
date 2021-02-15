import React from 'react'
import {Link} from 'react-scroll';
import './ScrollToComponent.css'

function ScrollDown(props) {
    return (
            <Link className='scroll-down' to={props.to} spy={true} smooth={true} duration={50} id={props.id}><i className="fas fa-chevron-down"></i></Link>
    )
}

export default ScrollDown
