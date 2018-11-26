import * as React from 'react';
import '../static/css/Body.css';
import '../static/css/Education.css';
import '../static/css/Contact.css';
import About from '../components/About';
import Education from '../components/Education';
import Contact from '../components/Contact';

class Foreground extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {height : screen.height,
    }
    this.updateHeight = this.updateHeight.bind(this)
  }

  updateHeight()
  {
    if (screen.width < 768)
    {
      this.setState({height : screen.height + 375})
    }
    else {
      this.setState({height : screen.height + 200})
    }

  }

  componentDidMount()
  {
    this.updateHeight()
    window.addEventListener('resize', this.updateHeight)
  }

  render()
  {


    return (
              <div>
                  <About/>
                  <Education/>
                  <div id ='AL' style={{top: this.state.height + 'px'}} />
                  <Contact/>
              </div>
          );
  }
}
export default Foreground
