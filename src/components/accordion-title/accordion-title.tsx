import React from 'react';

type AccordionTitleTypeProps ={
  title:string
}

const AccordionTitle =(props:AccordionTitleTypeProps)=>{
  return(
      <h3>{props.title}</h3>
  )
}
export default AccordionTitle;
