import React ,{Component} from 'react' ;
import Player from "../PlayerComponent/PlayerComponent.js"
import './MainApp.scss';

class MainApp extends Component {
    render (){
        return(
            <div className="mainContainer">
                <Player/>
                <h1 className="h1style">Hello React :) </h1>
            </div>
        );
    }
}

export default MainApp;