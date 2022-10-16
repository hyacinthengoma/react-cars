import React, {Component} from 'react';
import Cars from "./Cars";
class Mycars extends Component {
    render(){
        return (
            <div>
              <h1>Mon premier composant REACT</h1>
                <Cars />
            </div>
        )
        //une fois le composant créé, il faut l\'exporter
    }
}
//une fois le composant créé, il faut l\'exporter
export default Mycars;