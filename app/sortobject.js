const movie_Data = {
	movie_Name:"Dear Zindagi",
	movie_Year:2016,
	image:"Dear Zindagi.png", 
	rating:0,
	movie_duration:"2h 31m",
	genre:"Drama, Romance",
	description:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jugunconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all abofinding comfort in life's imperfections"
}
movie_Data["image"] = movie_Data["image"].substring(6, movie_Data["image"].length - 1);
console.log(movie_Data);

