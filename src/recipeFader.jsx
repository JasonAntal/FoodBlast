import React, {useState} from 'react'
import './App.css'
import recipeInfo from './RecipeRandomizer'

const RecipeFader = () => {
    const [fadeProp] = useState({
        fade: 'fadeIn',
    })

    return(
        <div className = {fadeProp.fade}>{recipeInfo()}</div>
    )
}

export default RecipeFader