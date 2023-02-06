import React from 'react';
import './App.css';
import Header from "./Header";
import CategoriesBar from "./CategoriesBar";
import Content from "./Content";

function App() {
  return (
    <div className="App">
        <div className={'main-wpaper'}>
            <Header/>
            <CategoriesBar/>
            <Content/>
        </div>
    </div>
  );
}

export default App;
