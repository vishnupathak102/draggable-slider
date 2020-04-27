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

export const SliderWithStep5 = () => <Slider min={10} step={5} max={50} color="green" />;


storiesOf('Slider', module)
  .add('Default Slider', DefaultSlider)
  .add('Red Color Slider', RedColorSlider)
  .add('Negative Value Slider', NegativeValuedSlider)
  .add('Step 5 Slider', SliderWithStep5);


