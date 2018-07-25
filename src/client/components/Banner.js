import React from 'react';
import nameTag from '../static/images/SVG/Software_Tag.svg';
import '../static/css/Banner.css';
import scrollTag from '../static/images/SVG/Scroll Tag.svg';
import anime from 'animejs';
import {Container} from 'reactstrap'


export default class Banner extends React.Component
{


	componentDidMount()
	{
		var scroll = anime({
			targets: '#tag',
			translateY: 50,
			loop: true,
			direction: 'alternate'
		});
	}

	render()
	{
		const windowHeight = screen.height + 200
		return (
			<Container id="Hawaii" fluid = {true} style= {{height: windowHeight + 'px'}}>
				<Container fluid = {true} id = "nameTag">
					<object type ="image/svg+xml" data={nameTag}/>
					<Container fluid ={true}>
					<img id ="tag" src = {scrollTag}/>
					</Container>
				</Container>
			</Container>

			
			


			);
	}

}