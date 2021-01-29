import React from 'react';

type AccordionTitlePropsType ={
  title:string
}

const AccordionTitle =(props:AccordionTitlePropsType)=>{
  return(
      <h3>{props.title}</h3>
  )
}
export default AccordionTitle;
