import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Preview from './pages/Preview';

const App = () => {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/preview/:id" element={<Preview />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
