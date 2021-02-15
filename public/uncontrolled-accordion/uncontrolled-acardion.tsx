import React, {useState} from 'react';
import AccordionBody from '../../src/components/accordion-body/accordion-body';
import AccordionTitle from '../../src/components/accordion-title/accordion-title';

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange:()=>void
}


const UncontrolledAccordion = (props: AccordionPropsType) => {
  let [toggle,setToggle] = useState(false)
  const  toggleMenu =() => {
    setToggle(!toggle)
  }
    return (
        <React.Fragment>
          <AccordionTitle change={ props.onChange} title={props.title}/>
          <button onClick={toggleMenu}>Toggle</button>
          {toggle &&  <ul>
            <AccordionBody/>
            <AccordionBody/>
            <AccordionBody/>
            <AccordionBody/>
            <AccordionBody/>
          </ul>}
        </React.Fragment>
    )



}
export default UncontrolledAccordion
