import React, {ChangeEvent, useCallback, useMemo, useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
/*

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
*/



export default {
  title: 'CallBack.memo Demo ',
} as Meta;

//
// export const DifficultCountingExample = () => {
//   const [a, setA] = useState(0)
//   const [b, setB] = useState(0)
//   const onChangeInputA = (e: ChangeEvent<HTMLInputElement>) => {
//     setA(+e.currentTarget.value)
//   }
//   const onChangeInputB = (e: ChangeEvent<HTMLInputElement>) => {
//     setB(+e.currentTarget.value)
//   }
//
//   let resultA = 1
//   let resultB = 1
//
//   resultA = useMemo(() => {
//     let tempResult = 1;
//     for (let i = 1; i <= a; i++) {
//       let fake = 0
//       while (fake < 1000000) {
//         fake++
//         const fakeValue = Math.random()
//       }
//       tempResult = tempResult * i
//     }
//     return tempResult
//   }, [a])
//
//
//   for (let g = 1; g <= b; g++) {
//     resultB = resultB * g
//   }
//
//   return <>
//     <input type="text" value={a} onChange={onChangeInputA}/>
//     <input type="text" value={b} onChange={onChangeInputB}/>
//     <hr/>
//     <div>Result for A:{resultA}</div>
//     <div>Result for B:{resultB}</div>
//   </>
// }
//
//
const NewMessageCounter = (props: { count: number }) => {
  // console.log('count')
  return <div>{props.count}</div>
}
// const UsersSecret = (props: { users: Array<string> }) => {
//   console.log('users')
//   return <div>{
//     props.users.map((u, i) => <div key={i}>{u}</div>)
//   }</div>
// }
// const Users = React.memo(UsersSecret)




export const LikesUseCallBack = () => {
  console.log('LikesUseCallBack')
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(['React', 'TS','JS'])

  const newArray:Array<string> = useMemo(() => {
    return books.filter(books => books.toLowerCase().indexOf('a') > -1)
  }, [books])

const addBook =()=>{
    const newBook = [...books, 'Angular' + new Date().getTime()]
  setBooks(newBook)
}
const memoizedAddBook = useMemo(()=>addBook,[books])
const memoizedAddBook2 = useCallback(addBook,[books])
  return <>
    <button onClick={() => setCounter(counter + 1)}>Increment</button>
    <NewMessageCounter count={counter}/>
    <Book books={newArray}  addBook={memoizedAddBook2}/>
  </>
}

const BooksSecret = (props: { books: Array<string>;addBook:()=>void }) => {
  console.log('BooksSecret')
  return <div>
    <button onClick={()=>props.addBook()}>add book</button>
    {
    props.books.map((book, i) => <div key={i}>{book}</div>)
  }</div>
}
const Book = React.memo(BooksSecret)
