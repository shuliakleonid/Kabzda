import React from 'react';

type StarPropsType = {
  selected:boolean
}

const Start = (props:StarPropsType) => {
  if(props.selected ) {
    return (<span><b>star</b> </span>)
  }else{
    return (<span>star </span>)
  }
}

export default Start;
