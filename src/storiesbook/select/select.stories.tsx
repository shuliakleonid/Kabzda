import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import Select, {SelectPropsType} from '../../components/select/select';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Select stories',
  component: Select,

} as Meta;
const item = [
  {title: 'Pet', value: 1},
  {title: 'Dom', value: 2},
  {title: 'Strong', value: 3}
]

const callback = action('accordion mode change event fired')

const Template: Story<SelectPropsType> = (args) => <Select {...args} />;
export const SelectedName = Template.bind({});

SelectedName.args = {
  value:3,
  onChange: callback,
  items: item
};

