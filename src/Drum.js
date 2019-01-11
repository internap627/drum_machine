import React, { Component } from 'react';
import DrumPad from './DrumPad'
import { data } from './data'

class Drum extends Component {
    state = {
        power: false,
        data: [],
        label: ''
    }

    componentDidMount(){
        this.setState({
            data: [...data]
        })
    }

    handlePower = () => {
        this.setState({
            power: !this.state.power
        })
    }

    setLabel = (id) => {
        this.setState({
            label: id
        })
    }

    render(){
    const {data, power, label} = this.state
    
        return (
            <div className='drum-machine'>
                <div className='power'>
                    <div className="switch">
                        <h4>Power</h4>
                        <label>
                            Off
                            <input onClick={() => this.handlePower()}  type="checkbox"/>
                            <span className="lever"></span>
                            On
                        </label>
                    </div>
                </div>
                <p className='label'>{label? label.toUpperCase() : 'PLAY'}</p>
                <div className='display row'>
                    {
                        data.map(pad => <DrumPad key={pad.letter} power={power} pad={pad}
                        setLabel={this.setLabel}
                        />)
                    }

                </div>
            </div>
        )
    }
}

export default Drum