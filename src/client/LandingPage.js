import React from 'react'
import Background from './template/Background'
import Foreground from './template/Foreground'


export default class LandingPage extends React.Component
{
	render()
	{
		return (<div>
				<Background/>
				<Foreground/>
				</div>
			)
	}
}