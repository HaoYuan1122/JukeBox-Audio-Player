import { Component } from "react";
class AudioPlayer extends Component {
    state = {
      isPlaying: false,
    };
  
    componentDidMount() {
        console.log('componentDidMount')
        this.audioElement = new Audio(this.props.audioURL)
        this.audioElement.autoplay = true
      }
    componentDidUpdate(prevProps){

        if (prevProps.audioURL !== this.props.audioURL){
            this.audioElement.src=this.props.audioURL
        }

    }

    componentWillUnmount(){
        this.audioElement.pause()
    }

    handleClick=()=>{
        const buttonName=document.getElementById("buttonName")

        if(this.state.isPlaying){
            this.audioElement.pause()
            this.setState({isPlaying:false})
            buttonName.innerHTML="Play"
        }else if(!this.state.isPlaying){
             this.audioElement.play()
            this.setState({isPlaying:true})
            buttonName.innerHTML="Pause"

        }
    }
    

    render() {
      return (
        <div>
          <p>Playing {this.props.audioURL}</p>
          <button onClick={this.handleClick} id="buttonName">Pause</button>
        </div>
      );
    }
  }
  export default AudioPlayer