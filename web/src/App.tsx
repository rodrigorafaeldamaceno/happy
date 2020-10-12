import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import './styles/global.css';
import './styles/pages/page-landing.css';

import logoIMg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoIMg} alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Medianeira</strong>
          <span>Paraná</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={25} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
