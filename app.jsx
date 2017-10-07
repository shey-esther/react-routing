
'use strict'
class Home extends React.Component {
	render() {
		return (
			<div className="main-content about">
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
				title: "How to Make a Website",
				parraf: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
			},
			{
				url: 'img/html.png',
				title: "HTML Forms",
				parraf: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.",
			},
			{
				url: 'img/responsive.png',
				title: "SVG Basics",
				parraf: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density. ",
			},
			{
				url: 'img/video.png',
				title: "HTML Video and Audio",
				parraf: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",
			}

		];
		const css = [
			{
				url: 'img/css1.png',
				title: "CSS Basics",
				parraf: "CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites.",
			},
			{
				url: 'img/css2.png',
				title:"CSS Selectors",
				parraf:  "In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements.",
			},
			{
				url: 'img/css3.png',
				title:  "Responsive Layouts",
				parraf: "Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design.",
			},
			{
				url: 'img/css4.png',
				title:  "CSS Flexbox Layout",
				parraf: "Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!",
			}

		];
		const javascript = [
			{
				url: 'img/jota1.png',
				title: "JavaScript Basics",
				parraf: "JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.",
			},
			{
				url: 'img/jota2.png',
				title:  "JavaScript Loops, Arrays and Objects",
				parraf: "Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items.",
			},
			{
				url: 'img/jota3.png',
				title: "jQuery Basics",
				parraf:  "jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on.",
			},
			{
				url: 'img/jota4.png',
				title: "AJAX Basics",
				parraf: "AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server.",
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
								<h4 class="media-heading">{item.title}</h4>
								<p>{item.parraf}</p>
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
								<h4 class="media-heading">{item.title}</h4>
								<p>{item.parraf}</p>
							</div>
						</div>
					</div>
				});
				break;
			default: //'html'
				CurrentList = html.map((item, index) => {
					return <div className="row" key={index}>
						<div className="col-md-12 lenguajes">
							<div className="col-md-2">
								<center><img className="media-object" src={item.url} /></center>
							</div>
							<div className="col-md-10 found">
								<h4 class="media-heading">{item.title}</h4>
								<p>{item.parraf}</p>
							</div>
						</div>
					</div>
				});
				break;
		}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<div className='row'>
						<div className='col-md-12'>
							<center><div className='col-md-5'><h3>Courses</h3></div></center>
							<div className='col-md-2'></div>
							<div className='col-md-5'><ul className="course-nav">
								<li className="btn btn-info dropdown-toggle"><a href='#/course/html'>HTML</a></li>
								<li className="btn btn-warning dropdown-toggle"><a href='#/course/css'>CSS</a></li>
								<li className="btn btn-danger dropdown-toggle"><a href='#/course/javascript'>JavaScript</a></li>
							</ul>
							</div>
							{CurrentList}
						</div>
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
						<div className='col-md-12'>
							<div className='col-md-2 code'>
								<center><span className="glyphicon glyphicon-chevron-left " ></span>
								<span className="glyphicon glyphicon-chevron-right "></span></center>
							</div>
							<div className='col-md-5'></div>
							<div className='col-md-5'>
								<ul className="nav navbar-nav">
									<li className="active"><a href="#/home">Home</a></li>
									<li><a href="#/about">About</a></li>
									<li><a href="#/teacher">Teachers</a></li>
									<li><a href="#/course">Course</a></li>
								</ul>
							</div>
						</div>
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






