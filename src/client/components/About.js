import * as React from 'react';
import '../static/css/About.css';

export default class About extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state= {height: screen.height}
    this.updateHeight = this.updateHeight.bind(this)
  }

  updateHeight()
  {
      this.setState({height : screen.height})
  }

  componentDidMount()
  {
    window.addEventListener("resize", this.updateHeight)
  }

  render()
  {
    const windowHeight = screen.height;
    return(
            <div style= {{top: this.state.height + 'px'}} className='container-fluid' id="aboutBg">

              <h1 className='yellowtail'>
                <u>About</u>
              </h1>

              <p className="raleway">
                My name is Charles Lee Jennings.<br/>
                I was born and raised in Birmingham, Alabama. I attended Shades Valley High School and graduated in 2013 with an Engineering Technical Diploma. After graduation, I attended summer classes at Lawson State Community College then transferrd to Auburn University in Montgomery. I stayed at AUM for one year then transferrd to Auburn. I graduated with a degree Software Engineering in the Fall of 2017. Now I develop website for clients and work for Apple as a Technial Advisor. Feel free to contact me if you have any questions or would like to have a website deployed.
              </p>

            </div>
  );
  }
}
