import React from 'react'
import {Link} from 'react-scroll';
import './ScrollToComponent.css';

function ToTop(props) {
    return (
        <div>
            <div className='scroll-up'>
                <Link to={props.to} spy={true} smooth={true} duration={50} id={props.id}><i className="fas fa-chevron-up"><div className="totop-text">To Top</div></i></Link>
            </div>
        </div>
    )
}

export default ToTop
