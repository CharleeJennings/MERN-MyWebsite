
import React from 'react';
import {Row, Col} from 'reactstrap';

export default class Contact extends React.Component {


	constructor(props){
		super(props);
		this.state = {name: "", comment: ""};
	}

	
	render() {
		return (
		
					<Row>
						

						<Col lg = '6' xs='12' sm='6'>
							<h1>Questions?</h1>
							<form>
								<Row>
									<Col lg = 'auto' sm='12' md='12'>
									<div id = 'name'>
									<label className='raleway'>Name:</label>
									<input type ="text" value = {this.state.name}/>
									</div>
									</Col>

									<Col lg='auto' sm='12' md='12'>
									<label className = 'raleway'>Comment: </label>
									<input id = "comment" type = "text" value = {this.state.comment}/>
									</Col>
								</Row>
							</form>
						</Col>



						<Col lg = '6' xs='12' sm='6'>
							<h1>Contact:</h1>
							<div id = 'ref'>
							<a href= "mailto:CharlesJenn39@gmail.com" className = "raleway">Email - <u>CharlesJenn39@gmail.com</u></a>
							<h3 className = "raleway"> Phone - (205)-914-5430 </h3>
							</div>
						</Col>
					</Row>
			
		);
	}
}
