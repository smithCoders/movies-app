import NavBar from "./Components/NavBar/NavBar";
import Logo from "./Components/Logo/Logo";
import SearchInput from "./Components/SearchInput/SearchInput";
import Result from "./Components/Result/Result";
import MovieList from "./Components/MovieDisplayed/MovieList/MovieList";
import './index.css'
import { useEffect, useState } from "react";

import Box from "./Components/MovieDisplayed/Box";
import Summary from "./Components/MovieFavorite/Summary/Summary";
import List from "./Components/MovieFavorite/Lists/List";
import Loader from "./Components/ToggleButton/Loader/Loader";
import Error from './Components/ToggleButton/Loader/Error'
import SelectedId from "./Components/MovieFavorite/SelectedID/SelectedId";
 export  const KEY='89aabd98';
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
const[isLoading,setIsLoading]=useState(false);
const[error,setError]=useState('');
const [query, setQuery] = useState("");
const[selectedId,setSlectedId]=useState(null);

const detailHandler=(id)=>{
  setSlectedId((selectedId)=>(id===selectedId?null:id))
}
const movieCloseHandler=()=>{
  setSlectedId(null)
}
  useEffect(()=>{
    // telling the UI we are loading some datas.
 
  async function fetchMovie (){
  try {  
    setIsLoading(true)
    setError('');
    const resp= await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`)
      // displaying error message when the data isn't fetching
      if(!resp.ok) throw new Error('something went wrong')
      const data= await resp.json();
      if(data.Response==='False') throw new Error('Movie not found')
      setMovies(data.Search)
  
    }catch(err){
    setError(err.message)
   
    }
  finally{    setIsLoading(false);}
  } 
  if(!query.length){
    setMovies([]);
    setError('');
    return;
  }
   fetchMovie();
  },[query])

  return (
    <>
<NavBar>
<Logo/>
   <SearchInput query={query} setQuery={setQuery}/>
        <Result movies={movies}/>
</NavBar>
      <main className="main">
      <Box>  
        {/* {isLoading?<Loader/>: }      */}
        {isLoading && <Loader/>}
        {!isLoading && !error && <MovieList movies={movies}  onSelected={detailHandler} movieClose={movieCloseHandler}/> }
     
        {error && <Error message={error}/>}
</Box>
<Box>
 { selectedId?<SelectedId  selectedId={selectedId}/>: <><Summary watched={watched}/>
  <List watched={watched}/></> }
</Box>
    
      </main>
    </>
  );
}
