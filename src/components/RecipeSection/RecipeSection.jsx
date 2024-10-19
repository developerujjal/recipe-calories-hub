import { useState } from 'react';
import { useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import Cooking from '../Cooking/Cooking';
import './RecipeSection.css'


const RecipeSection = () => {

    const [recipes, setRecipes]= useState([])

    useEffect(()=>{
        fetch('./recipesData.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="recipe-section-wrapper">
            <div className="our-recipe">
                <h2>Our Recipes</h2>
                <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className='all-recipes-and-cook'>
                <div className='all-recipes'>
                    {
                        recipes.map((recipe)=> <RecipeCard recipe={recipe} key={recipe.id}></RecipeCard>)
                    }
                </div>
                <div className='recipes-cook'>
                   {
                    <Cooking></Cooking>
                   }
                </div>
            </div>
        </div>
    );
};

export default RecipeSection;