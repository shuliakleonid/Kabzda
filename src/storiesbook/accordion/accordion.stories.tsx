import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {Accordion} from '../../components/accordion/acardion';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const callback = action('accordion mode change event fired')
const onClickCallback = action('accordion mode change event fired')
export const CollapseMode = () => <Accordion title={'Menu'}
                                             onChange={callback}
                                             collapsed={true}
                                             items={[]}
                                             onClick={onClickCallback}/>
export const UncollapsedMode = () => <Accordion title={'Item'}
                                                onChange={callback}
                                                collapsed={false}
                                                items={[
                                                  {title: 'Pet', value: 1},
                                                  {title: 'Dom', value: 2},
                                                  {title: 'Strong', value: 3}
                                                  ]}
                                                onClick={onClickCallback}/>
export const TurnMode = () => {
  let [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return <Accordion title={'Turn'}
                    onChange={changeCollapsed}
                    collapsed={collapsed}
                    items={[
                      {title: 'Pet', value: 1},
                      {title: 'Dom', value: 2},
                      {title: 'Strong', value: 3}
                    ]}
                    onClick={(id) => {
                      alert(`${id} this id form`)
                    }}/>
}
