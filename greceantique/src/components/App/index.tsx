import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import Pages
import Apropos from '../../pages/Apropos';
import ArticlesByCategory from '../../pages/ArticlesByCategory';
import ArticleDetails from '../../pages/ArticleDetails';
import ArticleList from '../../pages/ArticleList';
import CategoryList from '../../pages/CategoryList';
import Contact from '../../pages/Contact';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';

//import Components 
import Header from '../Header';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Header/><Home/><Footer/></>}/>
          <Route path="/contact" element={<><Header/><Contact/><Footer/></>}/>
          <Route path="/apropos" element={<><Header/><Apropos/><Footer/></>}/>
          <Route path="/error404" element={<><Header/><Error404/><Footer/></>}/>
          <Route path="/articlelist" element={<><Header/><ArticleList/><Footer/></>}/>
          <Route path="/articlesbycategory" element={<><Header/><ArticlesByCategory/><Footer/></>}/>
          <Route path="/article/:id" element={<><Header/><ArticleDetails/><Footer/></>}/>
          <Route path="/categorylist" element={<><Header/><CategoryList/><Footer/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
