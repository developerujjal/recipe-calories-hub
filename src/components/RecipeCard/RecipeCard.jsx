import PropTypes from 'prop-types';
// import recipe from '../../assets/img/recipes/recipe-01.png'
import './RecipeCard.css'

const RecipeCard = ({recipe}) => {
console.log(recipe)
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories}= recipe;
    return (
        <div className="recipe-card">
            <div className="recipe-img">
                <img src={recipe_image} alt="" />
            </div>
            <div className='recipe-des-container'>
                <div className='recipe-short-info'>
                    <h3 className='recipes-title-color'>{recipe_name}</h3>
                    <p className='paragraph-text recipes-gray-text-color'>{short_description}</p>
                </div>
                <div className='recipe-ingredients'>
                    <h4 className='recipes-title-color'>Ingredients: 3</h4>
                    <ul className='ingredients-list paragraph-text recipes-gray-text-color'>
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                    </ul>
                </div>
                <div className='recipe-time-main'>
                    <div className='recipe-time'>
                        {/* <i className="material-icons">account_circle</i> */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#150B2B"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                        <p className='paragraph-text recipes-gray-text-color'><span>{preparing_time}</span> minutes</p>
                    </div>
                    <div className='recipe-time'>
                        {/* <i className="material-icons">account_circle</i> */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#150B2B"><path d="M491-200q12-1 20.5-9.5T520-230q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343-375q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z"/></svg>
                        <p className='paragraph-text recipes-gray-text-color'><span>{calories}</span> calories</p>
                    </div>
                </div>
                <div className='recipe-cook-btn'>
                    <button>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default RecipeCard;