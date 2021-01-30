import React from 'react';
import AccordionBody from '../accordion-body/accordion-body';
import AccordionTitle from '../accordion-title/accordion-title';

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange:()=> void
}


const Accordion = (props: AccordionPropsType) => {



    return (
        <React.Fragment>
          <AccordionTitle change={ props.onChange} title={props.title}  />
          {!props.collapsed &&  <ul>
            <AccordionBody/>
            <AccordionBody/>
            <AccordionBody/>
            <AccordionBody/>
            <AccordionBody/>
          </ul>}
        </React.Fragment>
    )



}
export default Accordion
