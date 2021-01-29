import React from 'react';
import Start from '../star/star';

type RatingPropsType = {
  value: number
}

const Rating = (props: RatingPropsType) => {

  return (
      <div>
        <Start selected={props.value >= 1}/>
        <Start selected={props.value >= 2}/>
        <Start selected={props.value >= 3}/>
        <Start selected={props.value >= 4}/>
        <Start selected={props.value >= 5}/>
      </div>)

}

export default Rating;
