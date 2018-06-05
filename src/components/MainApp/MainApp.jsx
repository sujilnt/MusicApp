import React, {Component} from "react";
import Player from "../PlayerComponent/PlayerComponent.jsx";
import TrackNameUI from "../TrackNameUI/TrackNameUI.jsx";
import SearchBar ,{searchbar}  from '@opuscapita/react-searchbar';
//import datasong from '../../API/getSongsData.js';
import "../commonCssStyles/browserReset.scss";
import "../commonCssStyles/commonBootstrap.scss";
import styles from "./MainApp.scss";

const clientid = "vkTmQJneF9XZfRk8hdy9";
const clientSecretApiKey = "hZybsTVtx0ROPedGGXAOI6bwumH5ORtq8IUGJI1K";

class MainApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "MainApp";
        this.handleSearch=this.handleSearch.bind(this);
        this.Exportdata=this.Exportdata.bind(this);
        this.state = {
            name: "MainApp",
            searchValue: "",
            trackNamesObj: {}
        };
        console.log("%c  Component -> Init ", "background:red; color: white");
    }
    handleSearch(e){
        this.Exportdata(e);
    }
    async Exportdata(albumName){
        if(albumName === undefined){
            albumName="coldplay";
        }
        let url =`http://www.theaudiodb.com/api/v1/json/195003/searchalbum.php?s=${albumName}`;
        const response= await fetch(url);
        const responseData = await response.json();
        console.log("responseData......", responseData)
        this.setState({
            trackNamesObj: responseData,
            searchValue: albumName
        });
    }
    render() {
      const {searchValue,trackNamesObj}=this.state;
     console.log("%c  MainComponent -> Render ", "background:black; color: pink");
     console.log("MainApp",this.state, this.props);
     return (
         <div className="mainContainer">
             <div className="seachContainer">
                <SearchBar
                    onSearch={this.handleSearch}
                    value={searchValue}
                    searchPlaceHolder=" Type your favourite album ⏎ "
                />
             </div>
             <div className="Listing">
                 <div className="listingArtistName" >
                     <TrackNameUI trackNames={trackNamesObj} />
                 </div>
                 <div className="listingTopTen" >
                     1111111
                 </div>
             </div>
             <Player/>
         </div>
     );
   }
}
MainApp.defaultProps = {};
MainApp.propTypes = {};
export default MainApp;
