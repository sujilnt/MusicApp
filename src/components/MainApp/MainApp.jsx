import React ,{Component} from 'react' ;
import Player from "../PlayerComponent/PlayerComponent.js";
import "../commonCssStyles/browserReset.scss";
import './MainApp.scss';

class MainApp extends Component {
    render (){
        return(
            <div className="mainContainer">
                <Player/>
            </div>
        );
    }
}

export default MainApp;