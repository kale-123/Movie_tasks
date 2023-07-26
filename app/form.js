"use client"
import React, { useState } from 'react';
const Form=(props)=>{
    const [showForm, setShowForm] = useState(false);
    const [addMovie_button, setaddMovie_button] = useState(true);
    const handleClick = () => {
        setShowForm(true);
        setaddMovie_button(false);
    };
    const handleBack=()=>{
       setShowForm(false); 
       setaddMovie_button(true);
    
    }

    const [addMoviedata,setaddMoviedata]= useState({
        movie_Name: '',
        movie_Year: '',
        rating:'',
        movie_duration:'',
        genre:'',
        image:'',
        description:'',
        rating:0
    });
    let name,value;
    const handleChange = (event) => {
        name=event.target.name;
        value=event.target.value;
        setaddMoviedata({...addMoviedata,[name]: value, });
    };
	return (
	<>
	    {showForm && (
        <form onSubmit={handleBack}>
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
                    <input type="text" name="movie_Name" autocomplete="off"  placeholder="Movie Name" value={addMoviedata.movie_Name} onChange={handleChange} />
                    
                    
                    
                </div>
                <div className="movie_name">
                    <label>realese year :</label>
                    <br/>
                    <input type="year" name="movie_Year" autocomplete="off"  placeholder="movie_Year" value={addMoviedata.movie_Year} onChange={handleChange} />

                    
                </div>
                <div className="movie_duration">
                    <label>movie_duration :</label>
                    <br/>
                    <input type="time" className="inputbox" name="movie_duration" autocomplete="off"  placeholder="movie_duration"  value={addMoviedata.movie_duration} onChange={handleChange} />

                </div>      
                <div className="moviegenre">
                    <label for="cars">Choose a car:</label>
                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>

                </div>
                <div className="movie_discription">
                    <label>Description:</label>
                    <br/>
                    <input type="text" className="Description"  name="description" autocomplete="off"  placeholder="description"   value={addMoviedata.description} onChange={handleChange} />
                </div>
                
                <div className="upload_Movie image">
                    <label>upload Movie:</label>
                    <br/>                             
                    <input type="file" name="image" value={addMoviedata.image} onChange={handleChange}/>
                    
                </div>
                <div className="add_Movie">
                    <button type="submit" className="addmovie" onClick={()=>props.uploadMovie(addMoviedata)}>Add Movie </button>
                    
                </div>
            </div>
       </form>
        )}
        {addMovie_button &&(
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
        )} 
    </>
	);

};
export default Form;

