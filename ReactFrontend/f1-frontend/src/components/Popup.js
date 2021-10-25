import React from 'react'
import Button from './Button'
import '../styling/Popup.css'

const Popup = (props) => {

    if(props.trigger){
        document.body.style.overflow = 'hidden';
        return(
            <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-title'>
                    <h3 className='popup-title-value'>{props.title}</h3>
                    <div className='close-btn-container'>
                        <Button onClick={props.triggerUpdate} text='Close'/>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
        )
    }
    else{
        return '';
    }
}

export default Popup
