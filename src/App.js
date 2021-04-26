import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <About />;
      // case 'Resume':
      //   return <Resume />
    }
  }

  return (
    <div>
      <Header
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      >
      </Header>
      <main>
        {renderPage(currentPage)}
      </main>
    </div>
  );
}

export default App;
