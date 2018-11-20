import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';


const Questions = () => (<Col lg = '6' xs='12' sm='6'>
  <h1>Questions?</h1>
  <form onSubmit = {this.handleSubmit}>
    <Row>
      <Col lg = 'auto' sm='12' md='12'>
      <div id = 'name'>
      <label className='raleway'>Name: </label>
      <input placeholder= "Your Name" type ="text" name = "name" value = {this.state.name} onChange = {this.handleChange.bind(this)}/>
      </div>
      </Col>

      <Col lg='auto' sm='12' md='12'>
      <label className = 'raleway'>Comment: </label>
      <input placeholder = "Awesome Website!" id = "comment" name = "comment" type = "text" value = {this.state.comment} onChange={this.handleChange.bind(this)}/>
      </Col>

      <Col>
        <input type = 'submit'/>
      </Col>
    </Row>
  </form>
</Col>);

const Social = () => (<Row id ="Social"> <Col>Twitter</Col> <Col>Instagram</Col> <Col>LinkedIn</Col>  <Col>Snapchat</Col> </Row>);

export default class Contact extends React.Component {
  constructor( props )
  {
    super( props );
    this.state = {
      name: "",
      comment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event)
  {

    event.preventDefault();
  }


  handleChange(event)
  {

    const value = event.target.value
    const name = event.target.name



    this.setState({
      [name]: value,

  })
  }


  render() {
    return (
<div>
      <Row>





						<Col lg = '6' xs='12' sm='6'>
							<h1>Contact:</h1>
							<div id = 'ref'>
							           <a href= "mailto:CharlesJenn39@gmail.com" className = "raleway">Email: CharlesJenn39@gmail.com </a>
							           <h3 className = "raleway"> Phone: (205)-914-5430 </h3>
							</div>

						</Col>
					</Row>
    
          </div>
         );
  }
}
