'use strict';
import React, {PureComponent} from "react";
import styles from "./PlayerComponent.scss";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "../commonCssStyles/index.scss";
import Slider from "react-rangeslider";
class PlayerComponent extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.pageTitle="PlayerComponent";
        this.playPauseToggele=this.playPauseToggele.bind(this);
        this.handleProgress=this.handleProgress.bind(this);
        this.handleChangeSlider=this.handleChangeSlider.bind(this);
        this.state = {
            name: "PlayerComponent",
            playModeIcon: "play-circle",
            progressBar: "0.0",
            progressManualUpdate: "true",
            Slidervalue: 5,
            trackUrl: "http://listen.vo.llnwd.net/g3/1/1/7/1/1/1406911711.mp3",
            autoplaying:false
        };
        console.log("%c  PlayerComponent -> Init ", "background:red; color: white");
    }
    componentDidMount() {
        let refaudioPlayer=this.refs.audioPlayer;
        refaudioPlayer.addEventListener('timeupdate', (event) => {
            if(this.state.progressManualUpdate){
                this.setState({
                    progressBar: (event.target.currentTime) / event.target.duration,
                });
            }
        });
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.fileName.fileNameUrl === prevState.trackUrl || nextProps.fileName.fileNameUrl === undefined){
            return null;
        }
        let newstate= {
            autoplaying: true,
            progressBar: "0.0",
            trackUrl: nextProps.fileName.fileNameUrl
        }
        return newstate;
    }

    handleChangeSlider (value){
        this.setState({
            Slidervalue: value
        });
        console.log(value,this.state.Slidervalue/10, this.state.Slidervalue, typeof(value) );
        this.refs.audioPlayer.volume= this.state.Slidervalue/10;

    }

    playPauseToggele(e){
        e.preventDefault();
        if(this.state.playModeIcon === "play-circle"){
            this.setState({
                playModeIcon:"pause-circle"
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
        let currentTime= audipPlayer.currentTime = audipPlayer.duration * progress;
        this.setState({
            progressBar:currentTime,
            progressManualUpdate: "false"
        });
    }
   render() {
     const {Slidervalue,trackUrl,autoplaying}= this.state ;
     console.log("%c  PlayerComponent -> Render ", "background:black; color: pink");
     console.log("the state... player Component",this.state.trackUrl,this.refs.audioPlayer);
     return (
         <div className="AudioContainer">
             <div className="controls" aria-hidden="true" >
                 <div className="background-Icon" aria-hidden="true">
                     <FontAwesomeIcon icon="fast-forward" size="2x" rotation={180} className="marginFont" />
                 </div>
                 <div className="background-Icon"  refs="plays" onClick={this.playPauseToggele} ref="plays" aria-hidden="true">
                    <FontAwesomeIcon icon={this.state.playModeIcon}  size="2x" className="marginFont" />
                 </div>
                 <div className="background-Icon" aria-hidden="true">
                    <FontAwesomeIcon icon="fast-forward" size="2x" className="marginFont" aria-hidden="true" />
                 </div>
                 <div className="progress" onClick={this.handleProgress} ref={(ref) => { this.progressBar = ref}} aria-hidden="true">
                     <div className="bar"  style={{width: (this.state.progressBar*100)+"%"}} aria-hidden="true"></div>
                 </div>
                 <div className="volume">
                     <FontAwesomeIcon icon="volume-down" size="2x"  className="marginFont" />
                     <div className='slider-vertical'>
                         <Slider
                             min={0}
                             max={10}
                             value={Slidervalue}
                             orientation={'vertical'}
                             onChange={this.handleChangeSlider}
                         />
                     </div>
                 </div>
                 <div autoplay={autoplaying ? true: false }>
                 <audio ref="audioPlayer" key="1" controls="true" autoplay={autoplaying ? true: false } >
                     <source  src={trackUrl} type="audio/mpeg" />
                 </audio>
                 </div>
             </div>
         </div>
     );
   }
}
function offsetLeft(ele){
    var leftpos=0;
    while(ele && ele !== document){
        leftpos+= ele.offsetLeft;
        ele=ele.offsetparent;
    }
    return leftpos;
}

PlayerComponent.defaultProps = {
    fileName:{}
};
PlayerComponent.propTypes = {};
export default PlayerComponent;
