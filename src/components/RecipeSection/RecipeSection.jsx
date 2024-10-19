import { useState } from 'react';
import { useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import Cooking from '../Cooking/Cooking';
import './RecipeSection.css'


const RecipeSection = () => {

    const [recipes, setRecipes]= useState([])
    const [cook, setCook]= useState([])
    const [cooking, setCooking]= useState([])

    useEffect(()=>{
        fetch('./recipesData.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    const handleCookBtn = (recipe)=>{
        const isExist = cook.find((singelCook)=> singelCook.id === recipe.id);
        if(!isExist){
            const newCook = [...cook, recipe]
            setCook(newCook)
        }

        else{
            alert("You already have Select, Plz try another one!")
        }
    }


    const handlePreparing = (elementCook, id)=>{
        
        const newCook = cook.filter((iteamCook)=> iteamCook.id !== id);
        setCook(newCook)

        const newCooking = [...cooking, elementCook];
        setCooking(newCooking)
    }

    console.log(cooking)

    return (
        <div className="recipe-section-wrapper">
            <div className="our-recipe">
                <h2>Our Recipes</h2>
                <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className='all-recipes-and-cook'>
                <div className='all-recipes'>
                    {
                        recipes.map((recipe)=> <RecipeCard
                        recipe={recipe}
                        handleCookBtn={handleCookBtn}
                        key={recipe.id}></RecipeCard>)
                    }
                </div>
                <div className='recipes-cook'>
                   {
                    <Cooking
                    cook={cook}
                    cooking={cooking}
                    handlePreparing={handlePreparing}></Cooking>
                   }
                </div>
            </div>
        </div>
    );
};

export default RecipeSection;