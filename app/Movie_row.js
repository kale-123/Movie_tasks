import Action from "./Action.js"
const Movie_row=(props)=>{
	return (
		<div className="movie_row">
			<div className="Movie_image">
				<img src="Brave.png"/>
			</div>
			
			<div className="Movie_details">
				<div className="details">
					<h2>{props.data.movie_Name}</h2>
					<p>{props.data.movie_Year+"|"+props.data.movie_Time+"|"+props.data.movie_Type}</p>
					<p>{props.data.description}</p>
				</div>
				<Action {...props} />

			</div>
						
		</div>
	);
};

export default Movie_row;

