import React, {useEffect, useState} from 'react';
import {clearInterval} from 'timers';


type PropsType = {}
export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const int = setInterval(() => {
      console.log('tick')
      setDate(new Date())
    }, 1000)
    return () => clearInterval(int)
  }, [date])

  const getTwoDigitsString = (number: number) => {
    return number < 10 ? '0' + number : number
  }

  const secondsString = getTwoDigitsString(date.getSeconds())
  const minutesString = getTwoDigitsString(date.getMinutes())
  const hoursString = getTwoDigitsString(date.getHours())

  return (
      <div>
        <span>{hoursString}</span>
        :<span>{minutesString}</span>
        :<span>{secondsString}</span>
      </div>
  );
};

