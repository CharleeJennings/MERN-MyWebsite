import * as React from 'react';
import '../static/css/Body.css';
import '../static/css/Education.css';
import '../static/css/Contact.css';
import About from '../components/About';
import Education from '../components/Education';
import Contact from '../components/Contact';

class Foreground extends React.Component
{
  render()
  {
    const windowHeight = window.height + 200
    return (
              <div>
                  <About/>
                  <Education/>
                  <div id ='AL'  />
                  <Contact/>
              </div>
          );
  }
}
export default Foreground
