import React, {Component} from "react";
import styles from "./TrackNameUI.scss";
import PropTypes from "prop-types";
import Player from "../PlayerComponent/PlayerComponent.jsx";
import AudioFile from "../AudioFiles/AudioFiles.jsx";
class TrackNameUI extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "TrackNameUI";
        this.renderfile=this.renderfile.bind(this);
        this.updatefileUrl=this.updatefileUrl.bind(this);
        this.state = {
            name: "TrackNameUI",
            songData: " ",
            loading: true,
            headerText: "",
            fileObj:{},
            key: 0
        };
        console.log("%c  Component -> Init ", "background:red; color: white");
   }
   static getDerivedStateFromProps(nextProps,prevState){
       console.log("next.props",nextProps.trackNames);
        if(nextProps.trackNames=== prevState.songData){
            return null;
        }
        return {
            songData: nextProps.trackNames,
            headerText: nextProps.headerTextprop,
            loading: false,
            key: nextProps.trackNames.fileId
        }
   }
   renderfile(songData){
        let songDataArr=[];
       songData.forEach((song,i)=>{
           let keyId= `song.isrckey${i}`
            songDataArr.push(
                <AudioFile
                    key={keyId}
                    fileData={song}
                    fileId={song.albumId}
                    fileName={song.albumName}
                    fileNameArtist={song.artistName}
                    fileNameUrl={song.previewURL}
                    resendToparent={this.updatefileUrl}
                />
            );
        });
        return songDataArr;
    }
    updatefileUrl(obj){
        this.setState({
            fileObj: obj,
            key: obj.fileId
        });
    }
   render() {
        console.log("The console state", this.state.fileObj);
       console.log("%c  TrackComponent -> Render ", "background:black; color: pink");
      const {songData,loading,headerText,fileObj,key}=this.state;
       let headertextvar=headerText;
       if(headerText){
           headertextvar = headerText +" Album Tracks";
       } else{
           headertextvar= "Top Album Tracks List ";
       }
      console.log("songlength......",songData.length, typeof(songData),songData);
      if(!loading && songData.length > 1 ){
          return (
              <div className="container">
                  <Player fileName={fileObj} key={key}/>
                  <div className="headerHeading">{headertextvar}</div>
                  <div className="FileContainer">
                      {this.renderfile(songData)}
                  </div>
              </div>
          );
      } else {
          return (<div> loading .....</div>);
      }

   }
}
TrackNameUI.defaultProps = {
    trackNames:{},
    headerTextprop: "Top Tracks List "
};
TrackNameUI.propTypes = {
    trackNames: PropTypes.any.isRequired,
    headerTextprop: PropTypes.string.isRequired
};
export default TrackNameUI;
