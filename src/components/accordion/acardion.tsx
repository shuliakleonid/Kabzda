import React from 'react';
import AccordionBody from '../accordion-body/accordion-body';
import AccordionTitle from '../accordion-title/accordion-title';

const Accordion = () => {
  return (
      <>
        <AccordionTitle/>
        <ul>
          <AccordionBody/>
          <AccordionBody/>
          <AccordionBody/>
          <AccordionBody/>
          <AccordionBody/>
        </ul>
      </>
  )
}
export default Accordion
