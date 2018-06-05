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
            loading: true
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
      const {songData,loading}=this.state;
      console.log("songlength......",songData.length, typeof(songData),songData);
      if(!loading && songData.length > 1 ){
          return (
              <div className="container">
                  <div className="headerHeading">Top Tracks List </div>
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
    trackNames:{}
};
TrackNameUI.propTypes = {
    trackNames: PropTypes.object.isRequired
};
export default TrackNameUI;
