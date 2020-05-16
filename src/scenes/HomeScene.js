import React from 'react';
import 'aframe';
import skybox from '../img/strs.jpg';
import NavLink from '../components/NavLink';
require('aframe-animation-timeline-component');

class HomeScene extends React.Component {
  render() {
    return (
      <a-scene animation-timeline__1='timeline:#modelTimeline; loop: true'>
        <a-assets>
          <img id='sky' src={skybox} />
          <a-timeline id='modelTimeline'>
            <a-timeline-animation
              select='#model'
              name='up'
            ></a-timeline-animation>
            <a-timeline-animation
              select='#model'
              name='down'
            ></a-timeline-animation>
          </a-timeline>
        </a-assets>
        <a-sky src='#sky'></a-sky>
        <a-entity
          rotation='0 0 0'
          animation='property: rotation; to: 0 360 0; loop: true; dur: 70000; easing: linear;'
        >
          <a-entity id='cameraWrapper' rotation='-15 0 0' position='0 1 5'>
            <a-camera
              look-controls-enabled='false'
              wasd-controls-enabled='true'
            ></a-camera>
          </a-entity>
        </a-entity>
        <a-entity
          id='model'
          animation__up='property: position; from: 0 0 0; to: 0 0.5 0; loop: -1; dur: 2500; easing: easeInOutQuad;'
          animation__down='property: position; from: 0 0.5 0; to: 0 0 0; loop: -1; dur: 2500; easing: easeInOutQuad;'
        >
          <a-box position='0 1 0' color='mediumseagreen'></a-box>
        </a-entity>
      </a-scene>
    );
  }
}

export default HomeScene;
