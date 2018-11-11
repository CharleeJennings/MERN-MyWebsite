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
    return (<div>
      <h1 className=" yellowtail container-fluid">
        <u>Education
        </u>
      </h1>
      <Row className="justify-content-center" id="schools">
        <Col lg="auto" sm="auto" md="auto" xs="auto"><img id='schoolImg' src={"./images/PNG/Lawson emblem.png"}/>
          <h5 class='raleway'>
            Lawson State</h5>
        </Col>
        <Col lg="auto" sm="auto" md="auto" xs="auto"><img id='schoolImg' src={"./images/PNG/Auburn mascot.png"}/>
          <h5 class='raleway'>Auburn University</h5>
        </Col>
        <Col lg="auto" sm="auto" md="auto" xs="auto"><img id='schoolImgAum' src={"./images/PNG/AUM emblem.png"}/>
          <h5 class='raleway'>Auburn in Montgomery
          </h5>
        </Col>
      </Row>
    </div>);
  }
}
