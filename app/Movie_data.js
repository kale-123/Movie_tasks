
const Movie_row=(props)=>{
	return (
		<div className="movie_row">
			<div className="image">
				<img src={props.movie_image}/>
			</div>
			<div className="details">
				<h1>{props.Movie_Name}</h1>
				<p>{props.Year+"|"+props.time+"|"+props.Gender}</p>
				<h2>Description</h2>
				<p>{props.description}</p>
				<div className="main">
					<div className="col_1">
						<div className="like">
							<img src="Vector.png"/>
						</div>
						<div className="count">
							<h3>{props.count}</h3>
						</div>
						<div className="like">
							<img src="Vector.png"/>
						</div>
						
					
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Movie_row;


