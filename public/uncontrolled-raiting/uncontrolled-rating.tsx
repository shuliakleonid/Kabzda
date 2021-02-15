import React, {useState} from 'react';
import Start from '../../src/components/star/star';

type RatingPropsType = {}

const UncontrolledRating = (props: RatingPropsType) => {
  let [star, setStar] = useState(0)
  const addStar = () => {
    setStar(Math.floor(Math.random()*6))
  }

  return (
      <div>
        <Start selected={star >= 1} setValue={addStar}/>
        <Start selected={star >= 2} setValue={addStar}/>
        <Start selected={star >= 3} setValue={addStar}/>
        <Start selected={star >= 4} setValue={addStar}/>
        <Start selected={star >= 5} setValue={addStar}/>
      </div>)

}

export default UncontrolledRating;
