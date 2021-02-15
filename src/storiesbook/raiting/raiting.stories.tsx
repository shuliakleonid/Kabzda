import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import Rating, {RatingPropsType} from '../../components/raiting/rating';


export default {
  title: 'Rating stories',
  component: Rating,

} as Meta;

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;
export const EmptyStars = Template.bind({});

EmptyStars.args = {
  value: 0
};

