import React, {Component} from "react";
import styles from "./PlayerComponent.scss";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
class PlayerComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "PlayerComponent";
        this.play=this.play.bind(this);
        this.state = {
            name: "PlayerComponent"
        };

        console.log("%c  Component -> Init ", "background:red; color: white");
        }
    play(e){
        e.preventDefault();
        console.log('The link was clicked.');
    }
   render() {
     console.log("%c  Component -> Render ", "background:black; color: pink");
     return (
         <div className="AudioContainer">
             <FontAwesomeIcon icon="check-square" spin />
             <button className="background-Icon" onClick={this.play} refs="plays">testclick</button>
             <div className="controls">
                 <div className="background-Icon"  refs="plays">
                    <FontAwesomeIcon icon="play-circle"  size="2x" className="marginFont" />
                 </div>
                 <div className="background-Icon">
                    <FontAwesomeIcon icon="fast-forward" size="2x" className="marginFont" />
                 </div>
                 <div className="background-Icon">
                    <FontAwesomeIcon icon="fast-forward" size="2x" rotation={180} className="marginFont" />
                 </div>
             </div>
         </div>
     );
   }
}

PlayerComponent.defaultProps = {};
PlayerComponent.propTypes = {};
export default PlayerComponent;
