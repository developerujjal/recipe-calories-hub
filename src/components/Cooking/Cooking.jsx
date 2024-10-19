import './Cooking.css'

const Cooking = () => {
    return (
        <div className="cook-and-cooking-wrapper">
            <div className="cook-for-preparing-main">
                <div className='cook-heading'>
                    <h3>Want to cook: <span>0</span></h3>
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
                        <tr>
                            <td>1</td>
                            <td>Chicken Caesar Salad</td>
                            <td><span>20</span> minutes</td>
                            <td><span>400</span> calories</td>
                            <td><button className="status-button">Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="current-cooking-main">

            </div>
        </div>
    );
};

export default Cooking;