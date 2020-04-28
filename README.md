# Draggable Slider

> Reusable React Component.

- [Demo](https://vishnupathak102.github.io/draggable-slider/)
- [Storybook](https://gracious-lalande-a5db8f.netlify.app)

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

This component is similar to HTML 5 input range but rich in UI desing and reusablity. It's very easy to use than traditional range input slider, it supports all the attributes of HTML 5 range input tag. 

#### Technologies

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org)
- [Jest](https://jestjs.io/)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Chai](https://www.chaijs.com/)
- [Storybook](https://storybook.js.org/)

[Back To The Top](#draggable-slider)

---

## How To Use

#### Installation

Required at least Node virsion v8.0.0, you can access draggable slider component from 'src/components/Slider'. to see it's usage, you can run this repository with following commands.

    yarn start or npm run start


#### API Reference

##### Props

- min (number) : 

    Minimum limit value user can select.

- max (number) : 

    Maximum limit value usre can select.

- step (number) : 

    Interval value between min and max values.

- color (string) :

    Color to occupied region of slider. 
    
- callBack (value:number, percentageValue:number) => void : 

    It's a callback function gets called when user changes slider values.
    This function takes two attributes.
    - value : Contains actual value that user selects.
    - percentageValue : Percentage that user covers by moving slider.

        
[Back To The Top](#draggable-slider)

---

## References

- https://www.w3schools.com/tags/att_input_type_range.asp
- https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/


[Back To The Top](#draggable-slider)
---

## License

MIT License

Copyright (c) [2017] [Vishnu Pathak]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#draggable-slider)

---

## Author Info

- [Vishnu Pathak](https://github.com/vishnupathak102)
  vishnupathak1997@gmail.com  

[Back To The Top](#draggable-slider)
