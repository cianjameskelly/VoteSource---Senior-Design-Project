import React from 'react'
import './moreInfo.css'

function moreInfo(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='inner'>
                <button className = 'close-btn'>Close</button>
                {props.children}
            </div>
        </div>
    ) : '';
}

export default moreInfo

