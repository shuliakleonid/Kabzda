import React from 'react';


const Start = (props:any) => {
  if(props.selected ) {
    return (<span><b>star</b> </span>)
  }else{
    return (<span>star </span>)
  }
}

export default Start;
