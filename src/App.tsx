import React from 'react';
import Rating from './components/raiting/rating';
import Accordion from './components/accordion/acardion';
import OnOff from './components/on-off/on-off';
import UncontrolledAccordion from './components/uncontrolled-accordion/uncontrolled-acardion';

function App() {
  return (
      <div>
        <Accordion title={'Accordion Title'} collapsed={true}/>
        <Accordion title={'Menu'} collapsed={false} />
        {/*<Rating value={0}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        {/*<OnOff value={true}/>*/}
        {/*<OnOff value={false}/>*/}
        <Accordion title={'Hello'} collapsed={false}/>
        <UncontrolledAccordion  title={'Menu'} collapsed={false}/>
      </div>
  );
}

export default App;
