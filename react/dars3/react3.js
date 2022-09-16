import React, { Component } from 'react' ;
import { Home, Parents } from "./react3";
import Home from "./react3"
import {Student} from "./react3"

import concat from "./react3"
class Parent extends Component {
    rebder() {
        return(
            <Parents>
                <div>parent</div>
                <Home student="Sobirjon">Student</Home>
            </Parents>
        );
    }
}


export default Parent;

