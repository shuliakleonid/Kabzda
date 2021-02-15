import React, {useState} from 'react';
import {ItemType} from '../accordion/acardion';
import styles from './select.module.css'

export type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
}
const Select = (props: SelectPropsType) => {
  const [collapse, setCollapse] = useState(false)
  const [title, setTitle] = useState('Title')
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
  const collapseSelect = () => {
    setCollapse(!collapse)
  }
  const chooseItem = (event: any) => {
    let newTitle = props.items.find(i => i.value === +event.currentTarget.dataset.opton)
    if (newTitle) {
      setTitle(newTitle.title)
      setCollapse(false)
    }
  }
  const collapseMenuOnClick = (e: any) => {
    if (e.relatedTarget === null) {
      setCollapse(false)
    }
  }
  const hoveredItem = props.items.find(i => i.value === props.value)
  const onKeyUp = (e: any) => {
    debugger
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        const pretendedElement = e.key === 'ArrowDown' ? props.items[i + 1].value : props.items[i - 1].value
        if (pretendedElement) {
          setHoveredElementValue(pretendedElement)
          return
        }
      }
    }
  }
  return (
      <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
        <h3 className={styles.title} onClick={collapseSelect}>
          {title}
          {/*{selectItem && selectItem.title}*/}
        </h3>
        <div>
          {collapse && props.items.map(i => <div
              className={styles.items + ' ' + (hoveredElementValue === i.value ? styles.selected : '')}
              onBlur={collapseMenuOnClick}
              tabIndex={i.value}
              data-opton={i.value}
              onClick={chooseItem}
              onMouseEnter={() => {
                setHoveredElementValue(i.value)
              }}
          >{i.title}</div>)}
        </div>
      </div>)


};

export default Select;
