import logo from './logo.svg';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import CreateBook from './Components/CreateBook';
import ShowBookList from './Components/ShowBookList';
import ShowBookDetails from './Components/ShowBookDetails';
import UpdateBookInfo from './Components/UpdateBookInfo'; 
import { Component } from 'react/cjs/react.production.min';

class App extends Component{
  render()
  {
      return(
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<ShowBookList />}/>
              <Route path="create-book" element={<CreateBook />}/>
              <Route path="edit-book/:id" element={<UpdateBookInfo/>}/>
              <Route path="show-book/:id" element={<ShowBookDetails/>}/>
            </Routes>
        </BrowserRouter>
      )
  }
}

export default App;
