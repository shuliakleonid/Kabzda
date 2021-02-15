import React from 'react';
import style from './onoff.module.css'

export type OnOffPropsType = {
  /**
   * turn off this div (ctrl + Q)
   */
  on:boolean
  onChange?:()=> void
}


export const OnOff =(props:OnOffPropsType)=>{
  return(
      <div onClick={props.onChange} style={{display:'flex'}}>
        <span className={props.on ?  `${style.on}`: ``}>on</span>
        <span className={props.on ? `` : `${style.off}`}>off</span>
        <span  className={props.on ? `${style.circle_green} `: `${style.circle_red}`}/>
      </div>
  )
}
;
