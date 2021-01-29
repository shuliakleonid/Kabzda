import React from 'react';
import Rating from './components/raiting/rating';
import Accordion from './components/accordion/acardion';

function App() {
  return (
      <div>
        <Accordion/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <Accordion/>
      </div>
  );
}

export default App;
