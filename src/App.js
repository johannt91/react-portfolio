import React, { useState } from 'react'
import './App.css';
import About from './components/About'
import Nav from './components/Nav'
import Projects from './components/Projects'

function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      ></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
