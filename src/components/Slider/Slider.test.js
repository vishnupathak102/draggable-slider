                
import React from 'react';
import { shallow } from '../../utils/enzyme';
import { expect } from '../../utils/chai';
import Slider from './index';

describe('Slider', () => {
    let wrapper;
    const min = 10, max =100 , value=20;
    let callBackValue=0;
    beforeEach(()=>{
     wrapper = shallow(
        <Slider min={min} max={max} value={value} step={1} callBack={(value)=>callBackValue=value}/>
      )
    });

    afterEach(()=>callBackValue=0);

    it(`should have minimum value ${min}`, () => {
        expect(wrapper.find('.slider-box-indicator').first().text()).to.equal(min.toString());
    });
      
    it(`should have maximum value ${max}`, () => {
        expect(wrapper.find('.slider-box-indicator').last().text()).to.equal(max.toString());
    });

    it(`should have state value ${value}`,()=>{
        expect(wrapper.state('value')).to.equal(value);        
    })

    it(`should have rendered value ${value} `,()=>{
        expect(wrapper.find('.slider-bar-value').first().text()).to.equal(value.toString());        
    })

    it(`should have right onChange effect `,()=>{
        const input = wrapper.find('input[type="range"]');
        input.simulate('change',{target: {value:max}});
        expect(wrapper.state('value')).to.equal(max);
    })

    it(`should have callBack call `,()=>{
        const input = wrapper.find('input[type="range"]');
        input.simulate('change', { target: { value: max } });
        expect(callBackValue).to.equal(max);
    })


})