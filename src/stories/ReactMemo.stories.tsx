import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';

export default {
  title: 'React.memo Demo ',
}as Meta;

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
export const Example1 = () => {
  const [counter,setCounter]=useState(0)
  const [users,setUsers]=useState(['Olia', 'Anna'])
  return <>
    <button onClick={()=>setCounter(counter+1)}>Incement</button>
    <NewMessageCounter count={counter}/>
    <Users users={users}/>
  </>
}
