"use client"
import React, { useState } from 'react';
import Movie_list from "./Movie_list.js";
import Header from "./Header.js";
import Movie_row from "./Movie_row.js";
import "./globals.css";
import Footer from "./Footer.js";
import Form from "./form.js"

const Page=()=>{
	const [movies_data,setMovies_data]=useState(Movie_list)
	const sortArray=(data,vote)=>{
	    data.rating+=1
	    const newArray=[...movies_data]
        newArray.sort((a, b) => b.rating - a.rating);
        setMovies_data(newArray)  
	}

	function handleDelete(moviedata){
		const movie_data=movies_data.filter((movie)=>moviedata.movie_Name!=movie.movie_Name);
		setMovies_data(movie_data);
	}	
	


	return (
	<body>
		<Header />
		{movies_data.map((item) => (
        		<Movie_row 
        			data={item} 
        			handleDelete= {()=>handleDelete(item)}
        			sortArray={sortArray}
        		/>
        	))}
        	<Footer/>
        	<Form />
	</body>
      	
		
	);

}
export default Page;
