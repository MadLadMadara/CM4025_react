import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/smoking_character 2.jpg';
import Social from '../components/Social'

class XYZ extends Component {
 render() {
    return (
        <div>
            <img src={profilepic} className="profilepic" alt="Profile"></img>
            <Social />
        </div>
    )
 }
}
export default XYZ;