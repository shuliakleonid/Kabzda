import React from 'react';

type StarTypeProps = {
  selected:boolean
}

const Start = (props:StarTypeProps) => {
  if(props.selected ) {
    return (<span><b>star</b> </span>)
  }else{
    return (<span>star </span>)
  }
}

export default Start;
