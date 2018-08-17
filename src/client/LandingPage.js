import React from 'react';
import Background from './template/Background';
import Foreground from './template/Foreground';
import NavigationBar from './components/NavigationBar';

export default class LandingPage extends React.Component
{
	render()
	{
		return(
      <div>
				<NavigationBar/>
        <Background/>
        <Foreground/>
			</div>
     );
	}
}
