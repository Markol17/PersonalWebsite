import React from 'react';
import Head from 'next/head'
import {Entity, Scene} from 'aframe-react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appRendered: false,
      color: 'red'
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      require('aframe')
      require('aframe-particle-system-component')
      this.setState({ appRendered: true })
    }
  }

  changeColor() {
    const colors = ['black', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Mark-Olivier Poulin</title>
        </Head>

        {this.state.appRendered &&
          <Scene>
            <a-assets>
              <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
              <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
            </a-assets>

            <Entity primitive="a-light" type="point" intensity="2" position="0 0 20"/>

            <Entity text={{value: "Hi I'm Mark-Olivier", align: 'center'}} position={{x: 0, y: 2, z: -1}}/>

            <Entity id="box"
              geometry={{primitive: 'box'}}
              material={{color: this.state.color, opacity: 0.6}}
              animation__scale={{property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1'}}
              position={{x: 0, y: 1, z: -3}}
              events={{click: this.changeColor.bind(this)}}>
              <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '2 2 2'}}
                      geometry={{primitive: 'box', depth: 0.5, height: 0.5, width: 0.5}}
                      material={{color: '#24CAFF'}}/>
            </Entity>

            <Entity primitive="a-camera">
              <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
            </Entity>
          </Scene>
        }
      </div>
    )
  }
}
