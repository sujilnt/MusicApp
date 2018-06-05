import React, {Component} from "react";
import "./AudioFiles.scss";
import PropTypes from "prop-types";
class AudioFiles extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "AudioFiles";
        this.playmusic=this.playmusic.bind(this);
        this.state = {
            name: "AudioFiles"
        };
        console.log("%c  Component -> Init ", "background:red; color: white");
   }
    playmusic(e){
        console.log("clicked me back side",e,this.props);
    }
   render() {
     console.log("%c  Component -> Render ", "background:black; color: pink");
     const {fileData,fileId,fileName,fileNameArtist,fileNameUrl}=this.props;
     let imageUrl =`http://direct.rhapsody.com/imageserver/v2/albums/${fileId}/images/300x300.jpg`;
     return (
         <div className="AudioFilecontainer" >
             <div className="card-container" onClick={this.playmusic}>
                 <div className="card2">
                     <div className="front face">
                         <img src={imageUrl}/>
                     </div>
                     <div className="back face font">
                         <h1>{fileName}</h1>
                         <p className="artist">{fileNameArtist}</p>
                         <p className="date">2017</p>
                     </div>
                 </div>
             </div>
         </div>
     );
   }
}
AudioFiles.defaultProps = {
    fileData:[],
    fileId:"FileId",
    fileName: "FileName",
    fileNameArtist: "FileNameArtist",
    fileNameUrl: "FileNameurl.mp3"
};
AudioFiles.propTypes = {
    fileData: PropTypes.array.isRequired,
    fileId: PropTypes.string,
    fileName: PropTypes.string,
    fileNameArtist: PropTypes.string,
    fileNameUrl: PropTypes.string,
};
export default AudioFiles;
