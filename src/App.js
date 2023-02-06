import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import MovieDetails from "./Page/MovieDetails";

function App() {
  const [movies,setMovies] = useState([
        { id : 1,title: "Les Simpson" ,image: "image/1.png" ,description:"TV series" ,duration: "3h22" ,movieLink: "https://youtu.be/A61ZASPeNZg",},
        { id : 2,title: "Les Dalton" ,image: "image/2.png" ,description:"TV series" ,duration: "3h22" ,movieLink: "https://youtu.be/gI25TR6XZLw",},
        { id : 3,title: "Les Supa Strikas" ,image: "image/3.png" ,description:"TV series" ,duration: "3h22" ,movieLink: "https://youtu.be/ldmCamYnNyQ",},
        { id : 4,title: "Titeuf" ,image: "image/4.png" ,description:"TV series" ,duration: "3h22" ,movieLink: "https://youtu.be/J5n70B3A4Nw",},
        { id : 5,title: "Shaun the sheep" ,image: "image/5.png" ,description:"TV series" ,duration: "3h22" ,movieLink: "https://youtu.be/NsWd15iLDHs",},
        { id : 6,title: "Toto's jokes" ,image: "image/6.png" ,description:"TV series" ,duration: "3h22" ,movieLink: "https://youtu.be/Icnn-QAU80Q",},
        { id : 7,title: "a new high school" ,image: "image/7.png" ,description:"TV series" ,duration: "3h22" ,movieLink: "https://youtu.be/KAgyTxbTNxw",},
        { id : 8,title: "ORPHELIA" ,image: "image/8.png" ,description:"TV series" ,duration: "3h22" ,movieLink: "https://youtu.be/x5KQ6b4qJmc",},
    ])

  return (
     <Routes>
       <Route path='/' element= {<Home movies={movies}/>} />
       <Route path='/detail/:id' element={<MovieDetails movies={movies}/>} />
     </Routes>
  );
}

export default App
