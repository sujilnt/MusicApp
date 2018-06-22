import React, {Component} from "react";

import TrackNameUI from "../TrackNameUI/TrackNameUI.jsx";
import SearchBar ,{searchbar}  from '@opuscapita/react-searchbar';

import "../commonCssStyles/browserReset.scss";
import "../commonCssStyles/commonBootstrap.scss";
import styles from "./MainApp.scss";

let TopTrack = "https://api.napster.com/v2.2/tracks/top";
const authObj={
    headers:{
        apikey:  "YWNlNDU2ZWYtNGI3My00YWEwLTg2ZjAtNTljMDE5NjNmZmI0"
    }
};
class MainApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "MainApp";
        this.handleSearch=this.handleSearch.bind(this);
        this.Exportdata=this.Exportdata.bind(this);
        this.SearchData=this.SearchData.bind(this);
        this.state = {
            name: "MainApp",
            searchValue: "",
            trackNamesObj: {}
        };
        console.log("%c  Component -> Init ", "background:red; color: white");
    }
    handleSearch(input){
        this.SearchData(input);
    }
    async SearchData(keyword){
        let url = `https://api.napster.com/v2.2/search?query=${keyword}`;
        const response= await fetch(url,authObj);
        const responseData = await response.json();
        this.setState({
            trackNamesObj: responseData.search.data.tracks,
            searchValue: keyword
        });
    }
    componentDidMount(){
        this.Exportdata();
    }
    async Exportdata(){
        const response= await fetch(TopTrack,authObj);
        const responseData = await response.json();
        this.setState({
            trackNamesObj: responseData.tracks
        });
    }
    render() {
      const {searchValue,trackNamesObj}=this.state;
     console.log("%c  MainComponent -> Render ", "background:black; color: pink");
     return (
         <div className="mainContainer">
             <div className="seachContainer">
                <SearchBar
                    onSearch={this.handleSearch}
                    value={searchValue}
                    searchPlaceHolder=" Type your favourite artist name here and ⏎ "
                />
             </div>
             <div className="Listing">
                 <div className="listingArtistName" >
                     <TrackNameUI trackNames={trackNamesObj} headerTextprop={searchValue} />
                 </div>
             </div>
         </div>
     );
   }
}
MainApp.defaultProps = {};
MainApp.propTypes = {};
export default MainApp;
