import React from 'react';
import {Row, Col} from 'reactstrap';
import Lawson from "../static/images/PNG/Lawson emblem.png";
import Aum from "../static/images/PNG/AUM emblem.png";
import AuburnM from "../static/images/PNG/Auburn mascot.png";

export default class Education extends React.Component {



	render() {
		return (
			<div>
			<h1 className =" yellowtail container-fluid"><u>Education </u></h1>
			 <Row className = "justify-content-center" id = "schools">
			 <Col lg="auto" sm ="auto" md = "auto" xs = "auto"><img id ='schoolImg' src = {Lawson}/> <h5 class = 'raleway'> Lawson State</h5> </Col>
			 <Col lg="auto" sm ="auto" md = "auto" xs = "auto"><img id ='schoolImg' src = {AuburnM}/> <h5 class = 'raleway'>Auburn University</h5> </Col>
			 <Col lg="auto" sm = "auto" md = "auto" xs = "auto"><img id ='schoolImgAum' src= {Aum}/> <h5 class = 'raleway'>Auburn in Montgomery </h5> </Col>
			 </Row>
            </div>
		);
	}
}

