import PropTypes from 'prop-types';
import './Cooking.css'

const Cooking = ({ cook, handlePreparing, cooking, recipeTime, caloriesTime }) => {


    return (
        <div className="cook-and-cooking-wrapper">
            <div className="cook-for-preparing-main">
                <div className='cook-heading'>
                    <h3>Want to cook: <span>{cook.length}</span></h3>
                </div>
                <table className='main-table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='tbody-main'>

                        {
                            cook.map((elementCook, index) => (
                                <tr key={elementCook.id}>
                                    <td>{index + 1}</td>
                                    <td>{elementCook.recipe_name}</td>
                                    <td><span>{elementCook.preparing_time}</span> minutes</td>
                                    <td><span>{elementCook.calories}</span> calories</td>
                                    <td><button onClick={() => handlePreparing(elementCook, elementCook.id, elementCook.preparing_time, elementCook.calories)} className="status-button">Preparing</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            <div className="cook-for-preparing-main">
                <div className='cook-heading'>
                    <h3>Currently Cooking: <span>{cooking.length}</span></h3>
                </div>
                <table className='main-table'>
                    <thead>
                        <tr id='main-table-tr'>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-main'>

                        {
                            cooking.map((elementCooking, index) => (
                                <tr key={index} id='tbody-cooking-tr'>
                                    <td>{index + 1}</td>
                                    <td>{elementCooking.recipe_name}</td>
                                    <td><span>{elementCooking.preparing_time}</span> minutes</td>
                                    <td><span>{elementCooking.calories}</span> calories</td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>

                <div className='totals'>
                    <p>Total Time = <span>{recipeTime}</span> minutes</p>
                    <p>Total Calories = <span>{caloriesTime}</span> calories</p>
                </div>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    cook: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    cooking: PropTypes.array.isRequired,
    recipeTime: PropTypes.number,
    caloriesTime: PropTypes.number
}

export default Cooking;