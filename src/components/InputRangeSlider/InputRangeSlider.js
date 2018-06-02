import React, {Component} from "react";
import styles from "./InputRangeSlider.scss";
class InputRangeSlider extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "InputRangeSlider";
        this.state = {
            name: "InputRangeSlider"
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
InputRangeSlider.defaultProps = {};
InputRangeSlider.propTypes = {};
export default InputRangeSlider;
