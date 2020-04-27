import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from '../';

export default {
  title: 'Slider',
  component: Slider,
};

export const DefaultSlider = () => <Slider />;

export const RedColorSlider = () => <Slider value={25} color="red" />;

export const NegativeValuedSlider = () => <Slider min={-100} max={-10} color="green" />;

export const SliderWithSteps5 = () => <Slider min={100} step={5} max={150} color="green" />;



