import Header from './Header.js'
import Movie_row from './Movie_data.js'
import Footer from './Footer.js'

import './page.css'
const Page = () => {
  return (
  	<>
  		<Header />
  		<div className="box">
  			<Movie_row 
  				Movie_Name="Dear Zindgi"
  				Year="2017"
  				time="2h 31m"
  				Gender="Drama,Ramance"
  				description="aira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps he"
  				movie_image="Moana.png"
  				count="0"
  			/>
  		</div>
  		<Footer />
  		
  	</>

  
  );
}

export default Page;

