import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import SearchForm from './components/Search';

export default function App() {
  return (
    <div>
      <NavBar />
      <SearchForm />
      <Footer />
    </div>
  )
};
