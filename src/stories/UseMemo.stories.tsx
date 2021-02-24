import React, {ChangeEvent, useMemo, useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';

export default {
  title: 'Use.memo Demo ',
} as Meta;


export const DifficultCountingExample = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const onChangeInputA = (e: ChangeEvent<HTMLInputElement>) => {
    setA(+e.currentTarget.value)
  }
  const onChangeInputB = (e: ChangeEvent<HTMLInputElement>) => {
    setB(+e.currentTarget.value)
  }

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let tempResult = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 1000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResult = tempResult * i
    }
    return tempResult
  }, [a])


  for (let g = 1; g <= b; g++) {
    resultB = resultB * g
  }

  return <>
    <input type="text" value={a} onChange={onChangeInputA}/>
    <input type="text" value={b} onChange={onChangeInputB}/>
    <hr/>
    <div>Result for A:{resultA}</div>
    <div>Result for B:{resultB}</div>
  </>
}


const NewMessageCounter = (props: { count: number }) => {
  console.log('count')
  return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
  console.log('users')
  return <div>{
    props.users.map((u, i) => <div key={i}>{u}</div>)
  }</div>
}
const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Olia', 'Anna'])

  const newArray:Array<string> = useMemo(() => {
    return users.filter(user => user.toLowerCase().indexOf('a') > -1)
  }, [users])


  return <>
    <button onClick={() => setCounter(counter + 1)}>Incement</button>
    <NewMessageCounter count={counter}/>
    <Users users={newArray}/>
  </>
}
