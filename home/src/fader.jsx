import React, {useState} from 'react'
import './App.css'
import displayInfo from './MealRandomizer'

const Fader = () => {
    const [fadeProp] = useState({
        fade: 'fadeIn',
    })

    return(
        <div className = {fadeProp.fade}>{displayInfo()}</div>
    )
}

export default Fader