import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';

export default {
  title: 'Example/Input',
  // component: Page,
} as Meta;

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const onChangeInput = (event: any) => {
    setValue(event.currentTarget.value)
  }
  return <><input type="text" onChange={onChangeInput}/>-{value}</>
}
export const ControlledInputWithFixedValue = () => <input value={'Leonid'}/>
export const GetValueOfUnControlledInputWithFixedValue = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onButtonClick = () => {
    const elID = inputRef.current as HTMLInputElement;
    setValue(elID.value);
    // const el = document.getElementById('inputID') as HTMLInputElement
    // setValue(el.value)}

  }
  return <><input ref={inputRef} id={'inputID'}/>
    <button onClick={onButtonClick}>save</button>
    --- actual {value}
  </>
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const onChangeInput = (e:ChangeEvent<HTMLInputElement>) =>{
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChangeInput}/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false)
  const onChangeInput = () => {
    setParentValue(!parentValue)

  }
  return <input type='checkbox' checked={parentValue} onClick={onChangeInput}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('3')
  const onChangeInput = (e:ChangeEvent<HTMLSelectElement>) =>{
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChangeInput}>
    <option value={'1'}>none</option>
    <option value={'2'}>Minsk</option>
    <option value={'3'}>Gomel</option>
    <option value={'4'}>Kiev</option>
  </select>
}
