import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {OnOff, OnOffPropsType} from '../../components/on-off/on-off';
import Rating, {RatingPropsType} from '../../components/raiting/rating';


export default {
  title: 'On-Off stories',
  component: OnOff,
} as Meta;


const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;
export const OnMode = Template.bind({});

OnMode.args = {
 on:true,
};


// export const OnMode = () => <OnOff on={true} />
// export const OffMode = () => <OnOff on={false} />
export const TurnMode = () => {
      let [on, setOn] = useState(false)
  const clickCircle = () => {
    setOn(!on)
  }
  return <OnOff on={on} onChange={clickCircle}/>
}
