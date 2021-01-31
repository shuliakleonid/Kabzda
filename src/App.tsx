import React, {useState} from 'react';
import {Accordion} from './components/accordion/acardion';
import {OnOff} from './components/on-off/on-off';

function App() {
  let [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  let [on,setOn]= useState(false)
  const clickCircle = () => {
    setOn(!on)
  }
  return (
      <div>
        <OnOff on={collapsed} onChange={changeCollapsed}/>
        <Accordion title={'Hello'} collapsed={collapsed} onChange={changeCollapsed}/>
        {/*<UncontrolledRating/>*/}
        {/*<Accordion title={'Accordion Title'} collapsed={true}/>*/}
        {/*/!*<Accordion title={'Menu'} collapsed={false} />*!/*/}
        {/*<Rating value={0}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        {/*<OnOff value={false}/>*/}
        {/*<UncontrolledAccordion title={'Menu'} collapsed={false}/>*/}
      </div>
  );
}

export default App;
