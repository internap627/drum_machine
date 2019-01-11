import React from 'react'

class DrumPad extends React.Component {

    handleClick = () => {
        if(this.props.power){
        this.audio.play()
        this.audio.currentTime = 0
        this.props.setLabel(this.props.pad.id)
    }
    }

render()  {  
    const {pad} = this.props
        return(
        <div className='col s4 drum-pad'>
            <h3 className='btn white black-text '
            onClick={()=> this.handleClick()}
            >{pad.letter}</h3>
            <audio ref={ref => this.audio = ref}> 
                <source src={pad.src} type="audio/mpeg"/>
            </audio>
        </div>
    )
}
}

export default DrumPad