#!/bin/bash

args="$@"
component_Name=$1
component_Type=$2

components_Directory="../components/$component_Name"

if [ ! -d $components_Directory ];
then
  # if directory not exsisting .
  mkdir -p "$components_Directory"
  if [ $component_Type == "stateless" ];
  then
   echo "creating stateless React component !!"
  cat > $components_Directory/$component_Name.js <<__EOF
import React, { Component } from 'react';
import styles from "./$component_Name.css";
const FUNCTION_NAME = (props) => <div>{props.children}</div>;
export default FUNCTION_NAME;
__EOF
  echo "stateless react code created !!"
  else
  echo "creating stateful React component !!"
  cat > $components_Directory/$component_Name.js <<__EOF
import React, {Component} from "react";
import styles from "./$component_Name.css";
class $component_Name extends Component {
    constructor(props, context) {
        super(props, context);
        this.pageTitle = "$component_Name";
        this.state = {
            name: "$component_Name"
        };
        console.log("%c $ComponentName Component -> Init ", "background:red; color: white");
        }
   render() {
     console.log("%c $ComponentName Component -> Render ", "background:black; color: pink");
     return (
         <div className="relative">
           This is {this.state.name} Component
         </div>
     );
   }
}
$component_Name.defaultProps = {};
$component_Name.propTypes = {};
export default $component_Name;
__EOF
  echo "stateful React component created !!"
  fi
  cat > $components_Directory/$component_Name.css<< __EOF
.relative{
   position:relative;
}
__EOF
  echo "=> React Component is created successfully !!";
else
 echo " => Component already exists, rename and re-run the scripts"
fi

git add $components_Directory/