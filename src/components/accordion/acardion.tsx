import React from 'react';
import AccordionBody from '../accordion-body/accordion-body';
import AccordionTitle from '../accordion-title/accordion-title';
export type ItemType={
  title:string
  value:any
}
type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
  items:ItemType[]
  onClick:(i:any)=>void
}


export const Accordion = (props: AccordionPropsType) => {


  return (
      <React.Fragment>
        <AccordionTitle change={props.onChange} title={props.title}/>
        {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
          </React.Fragment>
          )


}

