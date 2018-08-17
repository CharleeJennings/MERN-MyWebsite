import * as React from 'react';
import '../static/css/Body.css';
import '../static/css/About.css';
import '../static/css/Education.css';
import About from '../components/About';
import Education from '../components/Education';
import Contact from '../components/Contact';
import '../static/css/Contact.css';
class Foreground extends React.Component
{
  render()
  {
    const windowHeight = screen.height - 10;
    return ( <div>
                   <div style= {{top: windowHeight + 'px'}} className='container-fluid' id="aboutBg">
                        <About/>
                     </div>

                     <div className= 'container-fluid' id='educationBg'>
                        <Education/>
                     </div>

                     <div id ='AL' />

                     <div className= "container-fluid" id ='Contact'>
                        <Contact/>
                     </div>
                </div> );
  }
}
export default Foreground
