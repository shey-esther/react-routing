
'use strict'
class Home extends React.Component {
	render() {
		return (
			<div className="main-content home">
				<h2>Home</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.Notice the use of %PUBLIC_URL% in the tags above.
     				It will be replaced with the URL of the `public` folder during the build.
      				Only files inside the `public` folder can be referenced from the HTML.</p>
				<hr />
			</div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div className="main-content about">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.Notice the use of %PUBLIC_URL% in the tags above.
     				It will be replaced with the URL of the `public` folder during the build.
      				Only files inside the `public` folder can be referenced from the HTML.</p>
				<hr />
			</div>
		);
	}
}

class Teachers extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12 ">
					<div className="col-sm-6 ">
						<div className="thumbnail">
							<img src="img/teacher.png" />
							<div className="caption">
								<h3>Teachers</h3>
								<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
								visit the Teachers section to view a list of our talented teachers</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 ">
						<div className="thumbnail">
							<img src="img/tito.png" alt="..." />
							<div className="caption">
								<h3>Teachers</h3>
								<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
								visit the Teachers section to view a list of our talented teachers</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 ">
						<div className="thumbnail">
							<img src="img/lentes.png" alt="..." />
							<div className="caption">
								<h3>Teachers</h3>
								<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
								visit the Teachers section to view a list of our talented teachers</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 ">
						<div className="thumbnail">
							<img src="img/compu.png" alt="..." />
							<div className="caption">
								<h3>Teachers</h3>
								<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
								visit the Teachers section to view a list of our talented teachers</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Course extends React.Component {

	render() {
		const html = [
			{
				url: 'img/web.png',
				titulo: "How to Make a Website",
				parrafo: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
			},
			{
				url: 'img/html.png',
				titulo: "HTML Forms",
				parrafo: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.",
			},
			{
				url: 'img/responsive.png',
				titulo: "SVG Basics",
				parrafo: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density. ",
			},
			{
				url: 'img/video.png',
				titulo: "HTML Video and Audio",
				parrafo: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",
			}

		];
		const css = [
			{
				url: 'img/css1.png',
				titulo: "How to Make a Website",
				parrafo: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
			},
			{
				url: 'img/css2.png',
				titulo: "HTML Forms",
				parrafo: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.",
			},
			{
				url: 'img/css3.png',
				titulo: "SVG Basics",
				parrafo: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density. ",
			},
			{
				url: 'img/css4.png',
				titulo: "HTML Video and Audio",
				parrafo: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",
			}

		];
		const javascript = [
			{
				url: 'img/js1.png',
				titulo: "How to Make a Website",
				parrafo: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
			},
			{
				url: 'img/js2.png',
				titulo: "HTML Forms",
				parrafo: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.",
			},
			{
				url: 'img/js3.png',
				titulo: "SVG Basics",
				parrafo: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density. ",
			},
			{
				url: 'img/js4.png',
				titulo: "HTML Video and Audio",
				parrafo: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",
			}

		]
		const { route } = this.props;
		console.log(route);
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = css.map((item, index) => {
					return <div className="row" key={index}>
						<div className="col-md-12 lenguajes">
							<div className="col-md-2">
								<center><img className="media-object" src={item.url} /></center>
							</div>
							<div className="col-md-10 found">
								<h4 class="media-heading">{item.titulo}</h4>
								<p>{item.parrafo}</p>
							</div>
						</div>
					</div>
				});
				break;
			case 'javascript':
				CurrentList = javascript.map((item, index) => {
					return <div className="row" key={index}>
						<div className="col-md-12 lenguajes">
							<div className="col-md-2">
								<center><img className="media-object" src={item.url} /></center>
							</div>
							<div className="col-md-10 found">
								<h4 class="media-heading">{item.titulo}</h4>
								<p>{item.parrafo}</p>
							</div>
						</div>
					</div>
				});

			default: //'html'
				CurrentList = html.map((item, index) => {
					return <div className="row" key={index}>
						<div className="col-md-12 lenguajes">
							<div className="col-md-2">
								<center><img className="media-object" src={item.url} /></center>
							</div>
							<div className="col-md-10 found">
								<h4 class="media-heading">{item.titulo}</h4>
								<p>{item.parrafo}</p>
							</div>
						</div>
					</div>
				});
				// key={index}>
				break;
		}

		// <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		// 	<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<div className='row'>
						<div className='col-md-12'>
							<div className='col-md-4'><h3>Courses</h3></div>
							<div className='col-md-4'><h2></h2></div>
							<div className='col-md-4'><ul className="course-nav">
								<li className="btn btn-info dropdown-toggle"><a href='#/course/html'>HTML</a></li>
								<li className="btn btn-warning dropdown-toggle"><a href='#/course/css'>CSS</a></li>
								<li className="btn btn-danger dropdown-toggle"><a href='#/course/javascript'>JavaScript</a></li>
							</ul>
							</div>
						</div>
						{CurrentList}
					</div>
				</div>
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
		let propsCourses = null;
		switch (this.state.route) {
			case '/home':
				Child = Home;
				break;
			case '/about':
				Child = About;
				break;
			case '/teacher':
				Child = Teachers;
				break;
			case '/course':
				Child = Course;
				break;
			// case '/repos':
			// 	Child = Repos;
			// 	break;
			case '/course/html':
				Child = Course;
				propsCourses = 'html';
				break;
			case '/course/css':
				Child = Course;
				propsCourses = 'css';
				break;
			case '/course/javascript':
				Child = Course;
				propsCourses = 'javascript';
				break;
			default:
				Child = Home;
		}

		return (
			<div className="bodie">
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#/home">Home</a></li>
							<li><a href="#/about">About</a></li>
							<li><a href="#/teacher">Teachers</a></li>
							<li><a href="#/course">Course</a></li>
						</ul>
					</div>
				</nav>
				{
					propsCourses ?
						<Child route={propsCourses} />
						:
						<Child />
				}
			</div>
		);

	}
}

ReactDOM.render(<App />,
	document.getElementById("root"));






