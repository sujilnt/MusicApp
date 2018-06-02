import React ,{Component} from 'react' ;
import Player from "../PlayerComponent/PlayerComponent.js";
import InputRangeSlider from "../inputRangeSlider/inputRangeSlider.js";
import "../commonCssStyles/browserReset.scss";
import './MainApp.scss';

class MainApp extends Component {
    render (){
        return(
            <div className="mainContainer">
                <Player/>
                <InputRangeSlider/>
            </div>
        );
    }
}

export default MainApp;