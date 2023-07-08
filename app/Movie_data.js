
import Action from "./Action.js"
const Movie_data=(props)=>{
	return (
		<div className="movie_row">
			<div className="image">
				<img src="image 1.png"/>
			</div>
			<div className="details">
				<div className="movie_data">
					<h1>{props.data.Movie_Name}</h1>
					<p>{props.data.Movie_Year+"|"+props.data.Movie_Year+"|"+props.data.Gender}</p>
					<div className="Description">
						<h1>Description</h1>
						<p>{props.data.Description}</p>
					</div>
				</div>
				<Action />
			</div>
			
	
		</div>
	);
};

export default Movie_data;


