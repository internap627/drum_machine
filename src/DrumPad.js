import React from 'react'

class DrumPad extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', (e) => this.handleKeyUp(e))
    }

    handleKeyUp = (e) => {
        if(e.keyCode === this.props.pad.letter.charCodeAt() && this.props.power){
            this.audio.play()
            this.audio.currentTime = 0
            this.props.setLabel(this.props.pad.id)
        }
    }

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
            <h3 className='btn-large white black-text '
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