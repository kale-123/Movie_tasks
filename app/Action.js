"use client"
import React, { useState } from 'react';

const Action=(props)=>{

	return(
		<div className="rating_row">
			<div className="rating_col">
				<div className="like">
					<button onClick={()=>props.sortArray(props.data)}>
						<img src="like.png"/>
					</button>
				</div>
				<div className="count">
					<div className="count_1">
						{props.data.rating}
					</div>
				</div>
				<div className="dislike">
					<button onClick={()=>props.sortArray(props.data)}>
						<img src="dislike.png"/>
					</button>
				</div>	
			</div>
			
			<div className="delete">
				<button onClick={props.handleDelete}>
					<img src="delete.png"/>
				</button>
			</div>
		</div>
	);	
}
export default Action;


