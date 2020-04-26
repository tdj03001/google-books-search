// import React from 'react';
// import './App.css';
// import NavBar from "./components/NavBar/index";
// import Footer from "./components/Footer/index";
// import SearchForm from './components/Search';

// export default function App() {
//   return (
//     <div>
//       <NavBar />
//       <SearchForm />
//       <Footer />
//     </div>
//   )
// };



import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bookshelf from "./pages/bookshelf";
import Search from "./pages/search";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Search} />
        <Route exact path="/bookshelf" component={Bookshelf} />
        <Route exact path="/search" component={Search} />

      </div>
    </Router>
  )
};


