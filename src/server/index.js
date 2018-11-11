import express from 'express';
import {renderToString} from 'react-dom/server';
import {matchPath , StaticRouter } from 'react-router-dom';
import routes from '../shared/routes'
import App from '../shared/App';
import React from 'react'
import 'babel-polyfill';



const app = express()

app.use(express.static('public'))

app.get('*', (req, res ,next) => {

const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

const markup = renderToString(
	<StaticRouter location= {req.url} context= {{}}>

	</StaticRouter>
	)

	res.send (`
		<!DOCTYPE html>
		<html>
			<head>
			<meta name="viewport" content="width=device-width, initial-scale=1">

			<title> Charles Lee Jennings </title>
			<link rel="stylesheet" type="text/css" href="/main.css" />
			<script src = '/bundle.js' defer> </script>
			</head>

			<body>
				<div id = 'app'></div>

			</body>
		</html>`)
});

app.listen (process.env.PORT || 3000 , () => console.log('Listening to port 3000'))
