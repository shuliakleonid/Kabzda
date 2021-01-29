import React from 'react';
import Start from '../star/star';


const Rating = (props: any) => {
  if (props.value === 0) {
    return (
        <div><Start selected={false}/>
          <Start selected={false}/>
          <Start selected={false}/>
          <Start selected={false}/>
          <Start selected={false}/>
        </div>)
  }
  if (props.value === 1) {
    return (
        <div><Start selected={true}/>
          <Start selected={false}/>
          <Start selected={false}/>
          <Start selected={false}/>
          <Start selected={false}/>
        </div>)
  }
  if (props.value === 2) {
    return (
        <div><Start selected={true}/>
          <Start selected={true}/>
          <Start selected={false}/>
          <Start selected={false}/>
          <Start selected={false}/>
        </div>)
  }
  if (props.value === 3) {
    return (
        <div><Start selected={true}/>
          <Start selected={true}/>
          <Start selected={true}/>
          <Start selected={false}/>
          <Start selected={false}/>
        </div>)
  }
  if (props.value === 4) {
    return (
        <div><Start selected={true}/>
          <Start selected={true}/>
          <Start selected={true}/>
          <Start selected={true}/>
          <Start selected={false}/>
        </div>)
  }
  if (props.value === 5) {
    return (
        <div><Start selected={true}/>
          <Start selected={true}/>
          <Start selected={true}/>
          <Start selected={true}/>
          <Start selected={true}/>
        </div>)
  }
  return (
      <div>
        <Start selected={true}/>
        <Start selected={true}/>
        <Start selected={false}/>
        <Start selected={false}/>
        <Start selected={false}/>
      </div>
  )
}

export default Rating;
