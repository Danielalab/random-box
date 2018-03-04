import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const styleColors = ['#C70039', '#581845', '#900C3F', '#369DAD', '#3876AD'];

    const phrases = [
      {
        phrase: 'El miedo es el camino hacia el Lado Oscuro, el miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento. Veo mucho miedo en ti.',
        author: 'Maestro Yoda'
      },
      {
        phrase: 'Siempre en movimiento está el futuro',
        author: 'Maestro Yoda'
      },
      {
        phrase: 'No lo intentes. Hazlo, o no lo hagas, pero no lo intentes',
        author: 'Maestro Yoda'
      },
      {
        phrase: 'La capacidad de hablar no te hace inteligente',
        author: 'Qui Gon Jinn'
      }, 
      {
        phrase: '¿Quién es más loco: el loco o el loco que sigue al loco?',
        author: 'Obi Wan'
      }
    ];

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let numberRandom = getRandomInt(0, styleColors.length);

    let colorDiv = styleColors[numberRandom];
    let phrase = phrases[numberRandom].phrase;
    let author = phrases[numberRandom].author;
    let styleFinal = {
      backgroundColor: colorDiv, 
      color: 'white', 
      textAlign: 'center', 
      height: '95vh',
      fontSize: '1.5rem',
      padding: '.9rem 1rem'    
    }; 

    return (
      <div style={styleFinal}>
        <div style={{position: 'relative', top:'50%', transform:'translateY(-50%)'}}>
          <p>
            {phrase}
          </p>
          <p>
            {author}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
