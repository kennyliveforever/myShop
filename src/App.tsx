import React from 'react';
import './App.css';
import Header from "./Header";
import CategoriesBar from "./CategoriesBar";
import Content from "./Content";
import Filters from "./Filters";

function App() {
  return (
    <div className="App">
        <div className={'main-wpaper'}>
            <Header/>
            <CategoriesBar/>
            <Filters/>
            <Content/>
        </div>
    </div>
  );
}

export default App;
