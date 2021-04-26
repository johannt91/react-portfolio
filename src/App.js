import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      >
      </Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
