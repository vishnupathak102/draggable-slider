import React, { Component } from 'react'
import Slider from '../components/Slider';
import classNames from 'classnames';


export default class HomePage extends Component {
    state={
        percetageValue:0
    }

    setPercentageValue = (value, percetageValue)=>{
        this.setState({percetageValue});
    }

    render() {
        const {percetageValue} = this.state;
        const containerClass = classNames("container",{ "container-text--white": percetageValue >= 20})
        return (
            <div class={containerClass}>
                <div className="homepage">
                    <div style={{position:'absolute', zIndex:-1, width:"100%",top:0,left:0, height:"100vh", background:"red",opacity : percetageValue/100}}></div>
                    <div className="homepage-header"><span className="homepage-header-heading">Draggable Slider</span></div> 
                    <Slider color="red" callBack={this.setPercentageValue} />
                </div>
            </div>        
        )
    }
}

