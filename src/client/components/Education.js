import React from 'react';
import
{
  Row,
  Col
}
from 'reactstrap';




export default class Education extends React.Component
{

  render()
  {
    return (<div className= 'container-fluid' id='educationBg'>
      <h1 className=" yellowtail container-fluid">
        <u>Education
        </u>
      </h1>
      <div className ='container-fluid '>
      <Row  id="schools" className= 'justify-content-center'>
        <Col lg="auto" sm="auto" md="auto" xs="auto"><img id='schoolImg' src={"./images/PNG/Lawson emblem.png"}/>
          <h5 className='raleway'>
            Lawson State</h5>
        </Col>
        <Col lg="auto" sm="auto" md="auto" xs="auto"><img id='schoolImg' src={"./images/PNG/Auburn mascot.png"}/>
          <h5 className='raleway'>Auburn University</h5>
        </Col>
        <Col lg="auto" sm="auto" md="auto" xs="auto"><img id='schoolImgAum' src={"./images/PNG/AUM emblem.png"}/>
          <h5 className='raleway'>Auburn in Montgomery
          </h5>
        </Col>
      </Row>
      </div>
    </div>);
  }
}
