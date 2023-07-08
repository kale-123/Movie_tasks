import Movie_data from "./Movie_data.js";
import Action from "./Action.js"
const Movie_row=(props)=>{
  const movies_data =[
	{Movie_Name:"Dear Zindagi",
	Movie_Time:2016,
	Movie_Year:"2h 31m",
	Gende:"Drama, Romance",
	Description:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jugunconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all abofinding comfort in life's imperfections"},

	{Movie_Name:"Brave",
	Movie_Year:2012,
	Movie_Time:"1h 33m",
	Gender:"Adventurous, Comedy",
	Description:"Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her 		kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse"},

	{Movie_Name:"Moana",
	Movie_Year:2016, 
	Movie_Time:"1h 47m",
	Gender:"Adventurous, Comedy",
	Description:"In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she 		answers the Ocean's call to seek out the Demigod to set things right."},
	
	{Movie_Name:"Mulan",
	Movie_Year:1998,
	Movie_Time:"1h 27m",
	Gender:"Adventurous, Comedy",
	Description:"To save her father from death in the army, a young maiden secretly goes in his place and becomes one 		of China's greatest heroines in the process."},

	{Movie_Name:"He Named Me Malala",	
	Movie_Year:2015,
	Movie_Time:"1h 28m",
	Gender:"Biography, Documentary",
	Description:"A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for 		speaking out on girls' education, followed by the aftermath, including her speech to the United Nations."},

	{Movie_Name:"Soul surfer",
	Movie_Year:2011 ,
	Movie_Time:"1h 52m",
	Gender:"Drama, Biography, Family",
	Description:"Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after 		losing her left arm in a shark attack"},
	
	{Movie_Name:"Bend it like beckham",
	Movie_Year:2002,
	Movie_Time:"1h 52m",
	Gender:"Comedy, Drama & Romance",
	Description:"Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional 	football."},

	{Movie_Name:"Into the wild",
	Movie_Year:2007,
	Movie_Time:"2h 28m",
	Gender:"Adventure, Biography, Drama",
	Description:"After graduating from Emory University, top student and athlete Christopher McCandless abandons 	    hisossessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in   the        wilderness. Along the way, Christopher encounters a series of characters that shape his life."},

	{Movie_Name:"The Pursuit of Happyness",
	Movie_Year:2006,
	Movie_Time:"1h 57m",
	Gender:"Drama, Biography",
	Description:"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional 	career."},

	{Movie_Name:"The Intouchables",
	Movie_Year:2011, 
	Movie_Time:"1h 52m",
	Gender:"Drama, Biography, Drama",
	Description:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man fromthe projects to be his caregiver"}
]
  return (
     <div>
     	{movies_data.map((item) => (
        <Movie_data data={item} />
      ))}
     </div>

  );
};

export default Movie_row;


