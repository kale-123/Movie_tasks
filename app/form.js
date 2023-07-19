"use client"
import React, { useState } from 'react';
const Form=(props)=>{
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
        setShowForm(true);
    };
    const handleBack=()=>{
       setShowForm(false); 
    
    }
    const [data,setData]=useState({movie_Name:" ",movie_Year:" ",movie_Time:" ",movie_Type:" ",rating:0,description:" "})
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
        
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
                        <button onClick={handleBack}>
                            back
                        </button>
                    </div>
                </div>
                <div className="movie_name">
                    <label HtmlFor="name">Movie Name :</label>
                    <br/>
                    <input type="text" name="movie_Name" autocomplete="off"  placeholder="Movie Name"  value={data.movie_Name}
  onChange={handleInputChange} />
                    
                    
                    
                </div>
                <div className="movie_name">
                    <label>realese year :</label>
                    <br/>
                    <input type="year" name="movie_Year" autocomplete="off"  placeholder="movie_Year"  value={data.movie_Year}
  onChange={handleInputChange} />

                    
                </div>
                <div className="movie_duration">
                    <label>movie_duration :</label>
                    <br/>
                    <input type="time" className="inputbox" name="movie_Time" autocomplete="off"  placeholder="movie_Time"  value={data.movie_Time} onChange={handleInputChange} />

                </div>      
                <div className="moviegenre">
                    <label>movie Genre:</label>movie_Time
                    <br/>
                    <input type="text" className="inputGenre" name="movie_Type" autocomplete="off"  placeholder="movie_Type"  value={data.movie_Type} onChange={handleInputChange} 
                    />

                </div>
                <div className="movie_discription">
                    <label>Description:</label>
                    <br/>
                    <input type="text" className="Description"  name="description" autocomplete="off"  placeholder="description"  value={data.description} onChange={handleInputChange} 
                    />
 
  
                </div>
                
                <div className="upload_Movie">
                    <label>upload Movie:</label>
                    <br/>                             
                    <button className="upload" onClick={()=>props.uploadMovie(data)}>upload</button>
                    
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

