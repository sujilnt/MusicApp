import React, {Component} from "react";
import Player from "../PlayerComponent/PlayerComponent.jsx";
import SearchBar ,{searchbar}  from '@opuscapita/react-searchbar';
import datasong from '../../API/getSongsData.js';
import "../commonCssStyles/browserReset.scss";
import "../commonCssStyles/commonBootstrap.scss";
import styles from "./MainApp.scss";
class MainApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "MainApp";
        this.handleSearch=this.handleSearch.bind(this);
        this.state = {
            name: "MainApp",
            searchValue: "",

        };
        console.log("%c  Component -> Init ", "background:red; color: white");
    }
    handleSearch(e){
       this.setState({
           searchValue: e
       });
        datasong(e);
    }

   render() {
      const {searchValue}=this.state;
     console.log("%c  Component -> Render ", "background:black; color: pink");
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
                     1111111
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
