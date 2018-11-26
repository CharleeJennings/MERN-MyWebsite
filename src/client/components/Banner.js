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
  constructor(props)
  {
    super(props)
    this.state = {height : screen.height}
    this.updateHeight = this.updateHeight.bind(this)
  }
  updateHeight()
  {
    this.setState({height: screen.height})
  }




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

    window.addEventListener("resize", this.updateHeight)


  }

  render()
  {
    const windowHeight = this.state.height + 200
    const nameTagHeight = this.state.height / 2.5
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
          <Container fluid ={true} id ='nameTag' style = {{top: nameTagHeight + 'px' }}>

          <Container fluid = {true}>
          <object type ="image/svg+xml" data={'./images/SVG/Software_Tag.svg'}/>
          </Container>

          <Container fluid ={true}>
          <object type='image/svg+xml' id ="tag" data = {'./images/SVG/Scroll Tag.svg'}/>
          </Container>

          </Container>

</ParallaxProvider>




    );
  }

}
