import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
// import Update from './views/Update';
import Create from './views/Create';
import NewReview from './views/NewReview';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
            {/* <Route element={<Navigate to="/movies" replace/>} path="/"/> */}
            <Route element={<Main/>} path="/" />
            <Route element={<Detail />} path="/view/movie/:_id"/>
            <Route element={<Create />} path="movies/create/"/>
            <Route element={<NewReview />} path="movie/new/review/:_id"/>
        </Routes>  
      


      
    </div>
  );
}

export default App;
