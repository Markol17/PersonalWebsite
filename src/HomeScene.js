import 'aframe';
import skybox from './img/strs.jpg';
import React from 'react';

class HomeScene extends React.Component {
  render() {
    return (
      <a-scene>
        <a-assets>
          <img id='sky' src={skybox} />
        </a-assets>
        <a-sky src='#sky'></a-sky>
        <a-box color='tomato' depth='1' height='1' width='1'></a-box>
      </a-scene>
    );
  }
}

export default HomeScene;
