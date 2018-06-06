import React, {Component} from "react";
import styles from "./TrackNameUI.scss";
import PropTypes from "prop-types";
import AudioFile from "../AudioFiles/AudioFiles.jsx";
class TrackNameUI extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "TrackNameUI";
        this.renderfile=this.renderfile.bind(this);
        this.state = {
            name: "TrackNameUI",
            songData: " ",
            loading: true,
            headerText: ""
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
            headerText:nextProps.headerTextprop,
            loading:false
        }
   }
   renderfile(songData){
        let songDataArr=[];
       songData.forEach((song,i)=>{
           let keyId= `song.isrc${i}`
            songDataArr.push(
                <AudioFile
                    key={keyId}
                    fileData={song}
                    fileId={song.albumId}
                    fileName={song.albumName}
                    fileNameArtist={song.artistName}
                    fileNameUrl={song.previewURL}
                />
            );
        });
        return songDataArr;
    }
   render() {
       console.log("%c  TrackComponent -> Render ", "background:black; color: pink");
      const {songData,loading,headerText}=this.state;
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
