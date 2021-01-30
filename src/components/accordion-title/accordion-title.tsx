import React from 'react';

type AccordionTitlePropsType ={
  title:string
  change:()=>void
}

const AccordionTitle =(props:AccordionTitlePropsType)=>{
  return(
      <h3 onClick={props.change}>{props.title}</h3>
  )
}
export default AccordionTitle;
