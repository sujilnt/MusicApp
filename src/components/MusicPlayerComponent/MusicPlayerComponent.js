import React, {Component} from "react";
import styles from "./MusicPlayerComponent.css";

class MusicPlayerComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "MusicPlayerComponent";
        this.state = {
            name: "MusicPlayerComponent"
        };
        console.log("%c  Component -> Init ", "background:red; color: white");
        }
   render() {
     console.log("%c  Component -> Render ", "background:black; color: pink");
     return (
         <div className="container">
           This is {this.state.name} Component
         </div>
     );
   }
}
MusicPlayerComponent.defaultProps = {};
MusicPlayerComponent.propTypes = {};
export default MusicPlayerComponent;
