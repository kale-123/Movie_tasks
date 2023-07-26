const Action=(props)=>{

	return(
		<div className="rating_row">
			<div className="rating_col">
				<div className="like">
				    <img onClick={props.like_sortArray} src="like.png"/>
				</div>
				<div className="count">
					<div className="count_1">
						{props.data.rating}
					</div>
				</div>
				<div className="dislike">
				    <img onClick={props.dislike_sortArray} src="dislike.png"/>
				</div>	
			</div>
			
			<div className="delete">
				<img onClick={props.handleDelete} src="delete.png"/>
			</div>
		</div>
	);	
}
export default Action;


