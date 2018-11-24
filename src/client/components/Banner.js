import React from 'react';
import '../static/css/Banner.scss';
import anime from 'animejs';
import
{
  Container, Row, Col
}
from 'reactstrap'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


export default class Banner extends React.Component
{


  componentDidMount()
  {
    var name = anime(
    {

      targets: '#nameTag',
      opacity: 1,
      delay: 7000,
      easing: 'easeInOutSine',
    });

    var scroll = anime(
    {
      targets: '#tag',
      translateY: 50,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuart',
      duration: 500,
    });

  }

  render()
  {
    const windowHeight = screen.height + 200
    const windowWidth = screen.width
    return (

<ParallaxProvider>
<Parallax
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure">

        <img className= "Hawaii" src="./images/JPG/DSC_0805.jpg" style = {{height: windowHeight + 'px' }}>
        </img>


    </Parallax>
    
</ParallaxProvider>


    );
  }

}
