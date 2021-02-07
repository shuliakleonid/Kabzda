import React from 'react';
import {ItemType} from '../accordion/acardion';

type AccordionBodyPropsTYpe = {
  items: ItemType[]
  onClick:(i:any)=>void
}
const AccordionBody = (props: AccordionBodyPropsTYpe) => {

  return (
      <ul>
        {props.items.map((item, index) => <li onClick={()=>props.onClick(item.value)} key={index}>{item.title}</li>)}
      </ul>
  )
}
export default AccordionBody;
