"use client"
import React, { useState } from 'react';
const Form=()=>{
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
        setShowForm(true);
    };
    const handleBack=()=>{
       setShowForm(false); 
    
    }
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
                        <button onClick={handleBack}>
                            back
                        </button>
                    </div>
                </div>
                <div className="movie_name">
                    <label HtmlFor="name">Movie Name :</label>
                    <br/>
                    <input type="text" name="name"/>
                    
                </div>
                <div className="movie_name">
                    <label>realese year :</label>
                    <br/>
                    <input type="text"/>

                    
                </div>
                <div className="movie_duration">
                    <label>movie_duration :</label>
                    <br/>
                    <input className="inputbox" type="time"/>
                    <label>Hour </label>
                    <input className="inputbox" type="time"/>
                    <label>min </label>
                </div>      
                <div className="moviegenre">
                </div>
                <div className="movie_discription">
                    <label>Description:</label>
                    <br/>
                    <input className="Description" type="text"/>
                </div>
                
                <div className="upload_Movie">
                    <label>upload Movie:</label>
                    <br/>
                    <button className="upload">upload</button>
                    
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

