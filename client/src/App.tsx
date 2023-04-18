import React, { useState } from 'react';
import './App.css';
import Header from './header/header';
import Solve from './pages/solve/solve';
import MyPuzzles from './pages/my-puzzles/my-puzzles';
import CreatePuzzle from './pages/create-puzzle/create-puzzle';
import Help from './pages/help/help';
import Footer from './footer/footer';

function App() {

  const [currentPage, setPage] = useState('Solve')

  const pages: { [index: string]: any } = {
    'Solve':<Solve/>,
    'My Puzzles':<MyPuzzles/>,
    'Create a Puzzle':<CreatePuzzle/>,
    'Help':<Help/>
  }

  return (
    <div id="wrapper">
      <Header/>
      <main>
        {pages[currentPage]}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
