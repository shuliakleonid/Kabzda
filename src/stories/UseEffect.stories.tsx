import React, {useEffect, useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';


export default {
  title: 'UseEffect Demo',
} as Meta;


export const SimpleExample = () => {
  console.log('Example1')
  const [counter, setCounter] = useState(0)//в   начальное сотояние стэйтa при передачи функцией происходит-- так же как юзеМемо
  useEffect(() =>{
    console.log('useEffect')
  })

  return <>
    <button onClick={() => setCounter(counter + 1)}>INC</button>
    //модно передавать колбэк для отрисовки актульного значения стэйта
    {counter}
  </>
}
export const SimpleUseEffectExample = () => {
  console.log('Example1')
  const [counter, setCounter] = useState(0)//в   начальное сотояние стэйтa при передачи функцией происходит-- так же как юзеМемо
  useEffect(() =>{
    console.log('useEffect')
  })

  return <>
    <button onClick={() => setCounter(counter + 1)}>INC</button>
    //модно передавать колбэк для отрисовки актульного значения стэйта
    {counter}
  </>
}
