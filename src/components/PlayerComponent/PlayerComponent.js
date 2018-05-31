import React, {Component} from "react";
import styles from "./PlayerComponent.scss";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
class PlayerComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "PlayerComponent";
        this.play=this.play.bind(this);
        this.state = {
            name: "PlayerComponent",
            playMode: "play-circle"
        };

        console.log("%c  Component -> Init ", "background:red; color: white");
        }
    play(e){
        e.preventDefault();
        if(this.state.playMode==="play-circle"){
            this.setState({
                playMode:"pause-circle"
            });
            this.refs.audioPlayer.play();
        } else {
            this.setState({
                playMode:"play-circle"
            });
            this.refs.audioPlayer.pause();
        }
    }
   render() {
     console.log("%c  Component -> Render ", "background:black; color: pink");
     return (
         <div className="AudioContainer">
             <div className="controls">
                 <div className="background-Icon" >
                     <FontAwesomeIcon icon="fast-forward" size="2x" rotation={180} className="marginFont" />
                 </div>
                 <div className="background-Icon"  refs="plays" onClick={this.play} refs="plays">
                    <FontAwesomeIcon icon={this.state.playMode}  size="2x" className="marginFont" />
                 </div>
                 <div className="background-Icon">
                    <FontAwesomeIcon icon="fast-forward" size="2x" className="marginFont" />
                 </div>
                 <div className="progress">
                     <div className="bar"></div>
                 </div>
                 <audio ref="audioPlayer">
                     <source src="../../src/audioFiles/Inception 2010.mp3"/>
                 </audio>
             </div>
         </div>
     );
   }
}

PlayerComponent.defaultProps = {};
PlayerComponent.propTypes = {};
export default PlayerComponent;
