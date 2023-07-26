"use client"
import { useState } from 'react';
import Movie_list from "./Movie_list.js";
import Header from "./Header.js";
import Movie_row from "./Movie_row.js";
import "./globals.css";
import Footer from "./Footer.js";
import Form from "./form.js"

const Page=()=>{
	const [movies_data,setMovies_data]=useState(Movie_list)
	const sortArray=(data,vote)=>{
	    data.rating=vote
	    const newArray=[...movies_data]
        newArray.sort((a, b) => b.rating - a.rating);
        setMovies_data(newArray)  
	}
	const handleDelete=(moviedata)=>{
		const movie_data=movies_data.filter((movie)=>moviedata.movie_Name!=movie.movie_Name);
		setMovies_data(movie_data);
	}	
	const uploadMovie=(movie_Data)=>{
	    movie_Data["image"] = movie_Data["image"].substring(6, movie_Data["image"].length - 1);
	    const newArray=[...movies_data];	    
	    newArray.push(movie_Data)
	    setMovies_data(newArray);    
	}
	
	return (
	<>
		<Header />
		{movies_data.map((item) => (
        		<Movie_row 
        			data={item} 
        			handleDelete= {()=>handleDelete(item)}
        			like_sortArray={()=>sortArray(item,item.rating+1)}
        			dislike_sortArray={()=>sortArray(item,item.rating-1)}
        		/>
        	))}
        	<Footer/>
        	<Form 
        	    uploadMovie={uploadMovie}
        	/>
	</>	
	);

}
export default Page;
