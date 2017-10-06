// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Home extends React.Component {
	render() {
		return (
			<div className="main-content home">
				{/* <h2>Front End Course Directory</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/> */}

			</div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}

class Repos extends React.Component {
	render() {
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Courses</h2>
					<ul className="course-nav">
						<li><a href='/courses/html'>HTML</a></li>
						<li><a href='/courses/css'>CSS</a></li>
						<li><a href='/courses/javascript'>JavaScript</a></li>
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: window.location.hash.substr(1)
		};
	}
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		switch (this.state.route) {
			case '/about':
				Child = About;
				break;
			case '/repos':
				Child = Repos;
				break;
			default:
				Child = Home;
		}

		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#/about">About</a></li>
							<li><a href="#/repos">Repos</a></li>
							<li className="active"><a href="#">Page 1</a></li>
							<li><a href="#">Page 2</a></li>
							<li className="active"><a href="#">Page 3</a></li>
						</ul>
					</div>
				</nav>
				<Child />{' '}
			</div>
		);
	}
}

ReactDOM.render(<App />,
	document.getElementById("root"));





