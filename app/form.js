"use client"
import React, { useState } from 'react';
const Form=()=>{
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
        setShowForm(true);
    };

	return (
	<>
	    {showForm && (
        <form>
            <div className="form_box">
                <div className="heading_row">
                    <div className="heading">
                        <h2>Fill This Form To Add This Movie</h2>
                    </div>
                    <div className="back">
                        <button>
                            back
                        </button>
                    </div>
                </div>
                <div className="movie_name">
                    <label>Movie Name </label>
                    <input type="text"/>
                </div>
                
            
            </div>
       </form>
        )}
		<div className="new_movie">
			<div className="new_movie_1">
				<div className="newMovie_box">new movie</div>
				<div className="add_col">
					<div className="auto">
						<button onClick={handleClick}>+</button>
					</div>
				
					
				</div>
				
			</div>
		</div>	  
    </>
	);

};
export default Form;

