import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Slider extends Component {
    state = {
        value: this.props.value || this.props.min
    }

    getValue = (event)=>{
        const {value} = event.target;
        const {callBack} = this.props;
        this.setState((state, props)=>{ return {value: Number(value)}},()=>callBack && callBack(Number(value)));
    }

    render() {
        const {value} = this.state
        const {min, max, step, color} = this.props;
        const sliderRelativeValue = ((value-min)*(100/(max-min))); 
        const backgroundColor = color ;
        return (
            <div className="slider">
            <div className="slider-box">
                <span className="slider-box-indicator">{min}</span>
                <div className="slider-box-container">
                    <div className="slider-bar">
                        <div className="slider-bar-fill" style={{background:backgroundColor, width: `${sliderRelativeValue}%`}}>
                        </div>
                    </div>
                    <div className="slider-bar-value" style={{ width: `${sliderRelativeValue}%`}}>{value}</div>
                  <input id="slider-input" type="range" min={min} max={max} step={step} value={value} onChange={this.getValue} className="slider-input" id="myRange"/>
                </div>
                <span className="slider-box-indicator">{max}</span>
            </div>
            </div> 
        )
    }
}

Slider.defaultProps={
    min:0,
    max:100,
    step:1,
    value:0,
    color: "transparnt"
}

Slider.propTypes={
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    color : PropTypes.string
}