import React, {Component} from "react";
import "./InputRangeSlider.scss";

class InputRangeSlider extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "InputRangeSlider";

        this.state = {
            name: "InputRangeSlider",
            value: 25,
            reverseValue: 8
        };
        console.log("%c  Component -> Init ", "background:red; color: white");
        }

   render() {
        const {value,reverseValue}=this.state;
     console.log("%c  Component -> Render ", "background:black; color: pink");
     return (
         <div className="container">

         </div>
     );
   }
}
InputRangeSlider.defaultProps = {};
InputRangeSlider.propTypes = {};
export default InputRangeSlider;
