import * as React from 'react';
import anime from 'animejs';
import '../../style/css/splashpage.css';

class Splashscreen extends React.Component {

constructor(props)
{
	super(props)
}



componentDidMount() {


var basicTimeline = anime.timeline();

basicTimeline.add
({
  targets: '#lineDrawing path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2000,
  delay: function(el, i) { return i * 800 },
  direction: "forward",
})

.add({

 	targets: '#lineDrawing svg',
 	top: -65,
 	left: -30 ,
 	scale: .25,
 	delay : 0,
 	duration : 2000,
 	 easing: 'easeInOutQuart'

 })

.add({

	targets : '#background',
	opacity : 0,
	duration: 2000,
	delay: 0,

})
.add({

	targets : '#background',
	top: -3000,
	duration: 1,

})




}

render() {

return ( <div> 


	<div id ="background"/>
	<div id = 'lineDrawing' >
<svg style ={{left: '45%'}} width="155" height="191" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF"  class ="lines" strokeWidth="3" fill="none" fillRule="evenodd" stroke-linecap="square"><path d="M2 44v118.147l65.857 26.167v-30.85l-41.721-16.517V96.173l41.721 14.393V68.265z"/><path d="M68.665 188.073l9.46-4.113 5.648-2.456v-27.925L40 137.829v-36.467M68.302 110.273l15.754-6.977V63.224L23.2 40 2 43.503M27.5 140.5l13-2"/><path d="M67.703 157.84l47.498-13.593V36.842l37.25 3.495V15.962L46.87 2.679v26.54l37.572 4.871v30.894M38.5 37.5l8-8"/><path d="M67.472 55.636V43.808L36.317 38.85 37.7 7.16l7.565-4.265M115.814 48.578l30.647 2.748 6.006-9.852M67.5 44.5l15-9M68.5 68.5l14-5"/></g></svg>	 </div>
	

	</div>);
}
}


export default Splashscreen;
