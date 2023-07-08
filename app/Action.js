"use client"
import React, { useState } from 'react';
const Action=()=>{
	return(
		<div className="main">
					<div className="col_1">
						<div className="like">
							<button>
								<img src="like.png"/>
							</button>
						</div>
						<div className="count">
							<span>
								{0}
							</span>
						</div>
						<div className="like">
							<button>
								<img src="dislike.png"/>
							</button>
						</div>	
					</div>
					<div className="delete">
							<button>
								<img src="delete.png"/>
							</button>
					</div>
					
		</div>
	);	
}
export default Action;

