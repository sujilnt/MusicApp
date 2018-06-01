'use strict';
import React, {PureComponent} from "react";
import styles from "./PlayerComponent.scss";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class PlayerComponent extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "PlayerComponent";
        this.playPauseToggele=this.playPauseToggele.bind(this);
        this.handleProgress=this.handleProgress.bind(this);
        this.state = {
            name: "PlayerComponent",
            playModeIcon: "play-circle",
            progressBar: "0.1"
        };
        console.log("%c  Component -> Init ", "background:red; color: white");
    }

    playPauseToggele(e){
        e.preventDefault();
        const refaudioPlayer=this.refs.audioPlayer;
        if(this.state.playModeIcon==="play-circle"){
            refaudioPlayer.addEventListener('timeupdate', (event,e)=>{
                this.setState({
                    progressBar: (event.target.currentTime)/100,
                    playModeIcon:"pause-circle"
                });
            });
            this.refs.audioPlayer.play();
        } else {
            this.setState({
                playModeIcon:"play-circle"
            });
            this.refs.audioPlayer.pause();

        }
    }

    handleProgress(e){
        const progressBarRef=this.progressBar;
        const audipPlayer = this.refs.audioPlayer;
        let progress=(e.clientX - offsetLeft(progressBarRef)) / progressBarRef.clientWidth;
        this.setState({
            progressBar:progress
        });

        audipPlayer.currentTime = audipPlayer.duration * this.state.progressBar;
    }
   render() {
     console.log("%c  Component -> Render ", "background:black; color: pink");
     return (
         <div className="AudioContainer">
             <div className="controls">
                 <div className="background-Icon" >
                     <FontAwesomeIcon icon="fast-forward" size="2x" rotation={180} className="marginFont" />
                 </div>
                 <div className="background-Icon"  refs="plays" onClick={this.playPauseToggele} ref="plays">
                    <FontAwesomeIcon icon={this.state.playModeIcon}  size="2x" className="marginFont" />
                 </div>
                 <div className="background-Icon">
                    <FontAwesomeIcon icon="fast-forward" size="2x" className="marginFont" />
                 </div>
                 <div className="progress" onClick={this.handleProgress} ref={(ref) => { this.progressBar = ref}}>
                     <div className="bar"  style={{width: (this.state.progressBar*100)+"%"}} ></div>
                 </div>
                 <audio ref="audioPlayer">
                     <source src="../../src/audioFiles/Linkin Park - In The End.mp3"/>
                 </audio>
             </div>
         </div>
     );
   }
}
function offsetLeft(ele){
    var leftpos=0;
    while(ele && ele!== document){
        leftpos+= ele.offsetLeft;
        ele=ele.offsetparent;
    }
    return leftpos;
}

PlayerComponent.defaultProps = {};
PlayerComponent.propTypes = {};
export default PlayerComponent;
