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
// import Header from '../Header';
import Header2 from '../Header2';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header2/>
        <Routes>
          <Route path="/" element={<><Home/><Footer/></>}/>
          <Route path="/contact" element={<><Contact/><Footer/></>}/>
          <Route path="/apropos" element={<><Apropos/><Footer/></>}/>
          <Route path="/error404" element={<><Error404/><Footer/></>}/>
          <Route path="/articlelist" element={<><ArticleList/><Footer/></>}/>
          <Route path="/articlesbycategory" element={<><ArticlesByCategory/><Footer/></>}/>
          <Route path="/article/:id" element={<><ArticleDetails/><Footer/></>}/>
          <Route path="/categorylist" element={<><CategoryList/><Footer/></>}/>
          <Route path="*" element={<><Error404 /><Footer /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
