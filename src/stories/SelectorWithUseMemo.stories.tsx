import React, {ChangeEvent, useMemo, useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions';
import Select, {SelectPropsType} from '../components/select/select';

export default {
  title: 'SelectWithMemo Demo ',
} as Meta;


const item = [
  {title: 'Pet', value: 1},
  {title: 'Dom', value: 2},
  {title: 'Strong', value: 3}
]
const callback = action('accordion mode change event fired')

const Template: Story<SelectPropsType> = (args) => {

  return(<>
  <Select {...args} />
  <hr/>
  <Select {...args} />
  <hr/>
  <Select {...args} />
  </>)
}

export const SelectedName = Template.bind({});

SelectedName.args = {
  value:3,
  onChange: callback,
  items: item
};
