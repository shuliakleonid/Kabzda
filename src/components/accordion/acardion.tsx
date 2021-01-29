import React from 'react';
import AccordionBody from '../accordion-body/accordion-body';
import AccordionTitle from '../accordion-title/accordion-title';

const Accordion = () => {
  return (
      <React.Fragment>
        <AccordionTitle/>
        <ul>
          <AccordionBody/>
          <AccordionBody/>
          <AccordionBody/>
          <AccordionBody/>
          <AccordionBody/>
        </ul>
      </React.Fragment>
  )
}
export default Accordion
