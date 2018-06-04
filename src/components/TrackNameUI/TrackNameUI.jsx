import React, {Component} from "react";
import styles from "./TrackNameUI.scss";
import PropTypes from "prop-types";
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
   renderfile(songData=['error']){
        let songDataArr=[];
       console.log(songData);
       songData.forEach((song)=>{
            songDataArr.push(song.strRateYourMusicID);
        });
        return songDataArr;
    }
   render() {
       console.log("%c  TrackComponent -> Render ", "background:black; color: pink");
      const {songData,loading}=this.state;
      console.log("songlength......",songData.length, typeof(songData),songData);
      if(!loading){
          return (
              <div className="container">
                  <div>Album Name</div>
                  <div>{this.renderfile(songData.album)}</div>
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
