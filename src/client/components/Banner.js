import React from 'react';
import '../static/css/Banner.scss';
import anime from 'animejs';
import
{
  Container
}
from 'reactstrap'



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
    return (

      <Container id="Hawaii" fluid = {true} style= {{height: windowHeight + 'px'}}>
				<Container fluid = {true} id = "nameTag" >
					<object type ="image/svg+xml" data={'./images/SVG/Software_Tag.svg'}/>
					<Container fluid ={true}>
					<img id ="tag" src = {'./images/SVG/Scroll Tag.svg'}/>
					</Container>
				</Container>
			</Container>





    );
  }

}
