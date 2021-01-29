import React from 'react';
import AccordionBody from '../accordion-body/accordion-body';
import AccordionTitle from '../accordion-title/accordion-title';

type AccordionTypeProps = {
  title: string
  isBody: boolean
}


const Accordion = (props: AccordionTypeProps) => {
  if (props.isBody) {
    return (<React.Fragment>
      <AccordionTitle title={props.title}/>
    </React.Fragment>)
  } else {
    return (
        <React.Fragment>
          <AccordionTitle title={props.title}/>
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


}
export default Accordion
