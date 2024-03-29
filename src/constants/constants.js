export const projects = [
  {
    title: 'Vulkan 3D Renderer',
    description: 'A renderer build with Vulkan capable of displaying and transforming 2D and 3D objects. Started to learn about Vulkan, and very helpful in improving my C++ skills. I enjoyed using a picture of my dog Maya as a texture while building this out.',
    image: '/images/DeepMayaSquare.png',
    tags: ['C++', 'Graphics', 'Vulkan'],
    source: 'https://github.com/DerekMarshall855/VulkanHelloWorld',
    id: 0
  },
  {
    title: 'Path Finding Visualized',
    description: "A classic resume project, visualized path finding algorithms on the web. I had already learned these algorithms from school, but it was a nice refresher. The main thing I learned here was animations with css.",
    image: '/images/PathFindingVisualized.png',
    tags: ['TypeScript', 'React', 'Algorithms', 'Data Structures'],
    visit: 'https://derekmarshall855.github.io/path-finding-visualized/',
    source: 'https://github.com/DerekMarshall855/path-finding-visualized',
    id: 1
  },
  {
    title: 'Basic Ray Tracing with C++',
    description: 'A from scratch ray tracer I built using scratchpixel.com as my main resource for information. Super simple, does all of the math and exports the final image to a ppm file to be opened with Gimp or Photoshop.',
    image: '/images/BallsWoo.png',
    tags: ['C++', 'Graphics'],
    source: 'https://github.com/DerekMarshall855/basic-rendering',
    id: 2
  },
  {
    title: 'Go Ecommerce API',
    description: 'A REST API built with Go and the Gin framework. Has everything needed to create an ecommerce frontend, from user auth and jwt tokens, to carts and checkout logic. Uses MongoDB encoded with bson to be understood by go.',
    image: '/images/GoEcommerce.png',
    tags: ['Go', 'Golang', 'Ecommerce', 'REST', 'Backend'],
    source: 'https://github.com/DerekMarshall855/GoEcommerce',
    id: 3
  },
  {
    title: 'Amazon Webstore Clone',
    description: "This app was my attempt at creating a responsive e-commerce website from scratch. It contains a backend with product data, a paypal api to allow users to 'purchase' items (sandbox). It also uses secure JWT tokens, password hashing and salting, and redux statefulness for a secure experience.",
    image: '/images/amazon_clone.png',
    tags: ['Mongo', 'Express', 'React', 'Node', 'TypeScript'],
    visit: 'https://webstore-clone.netlify.app/',
    source: 'https://github.com/DerekMarshall855/AmazonClone',
    id: 4
  },
  {
    title: 'Original Portfolio',
    description: "This was my original attempt at a portfolio website. It was generated in Hugo and customized by me. I learned a lot about Go and TailwindCSS during this project. This site even used to have a cool url (Now assigned to the current portfolio).",
    image: '/images/OriginalPortfolio.png',
    tags: ['Golang', 'Hugo', 'TailwindCSS'],
    visit: 'https://derekmarshall855.github.io/portfolioV2',
    source: 'https://github.com/DerekMarshall855/portfolioV2',
    id: 5
  },
  {
    title: 'My First Blog',
    description: "This was my first attempt at using Typescript to make a full stack MERN application. It was fully functional, but did not look great. This taught me the basics of full stack development and I inspired me to improve my CSS greatly.",
    image: '/images/media_clone.png',
    tags: ['Mongo', 'Express', 'React', 'Node', 'TypeScript'],
    source: 'https://github.com/DerekMarshall855/social-media-clone',
    id: 6
  },
  {
    title: 'My Dynamic Scheduler',
    description: "This was a big milestone in my web development career, as it was the first site I worked on until completion. I worked in a team of three, doing the entire backend with Node and Express, and a small portion of the frontend in React.",
    image: '/images/calendar.png',
    tags: ['Mongo', 'Express', 'Asperite'],
    source: 'https://github.com/DerekMarshall855/MyDynamicScheduler',
    id: 7
  },
  {
    title: 'Robot Slime Fun Time',
    description: "My first time working with a game engine. I chose Godot to begin learning 2D development. I worked with my friend to compete in the GDU-5 Game Jam. We split the code work fairly evenly and I developed every asset myself except for sounds.",
    image: '/images/game_title.png',
    tags: ['Godot', 'GDScript', 'React', 'Node'],
    visit: 'https://sirsalisburysteak.itch.io/robot-slime-fun-time',
    source: 'https://github.com/DerekMarshall855/GDU-Jam-5',
    id: 8
  },
  {
    title: 'Captain Code',
    description: "This project taught me how to collaborate with others even when it was difficult. The most impressive part of this project isn't the code, but my ability to lead our group through conflict and still manage to get a great grade on a final project.",
    image: '/images/CC_Game.png',
    tags: ['Android Studio', 'Java'],
    source: 'https://github.com/DerekMarshall855/CP470_Final_Project',
    id: 9
  },
  {
    title: 'Computer Graphics Showroom',
    description: "After learning how to write custom vertex and fragment shaders, I wanted to develop a showroom for my current skills. I took my final project in my course and expanded on it by adding fps controlls, extra light effects, and extra items to play with.",
    image: '/images/live_showroom.png',
    tags: ['JavaScript', 'ThreeJS', 'WebGL'],
    source: 'https://github.com/DerekMarshall855/Computer-Graphics-Showroom',
    id: 10
  },
  {
    title: 'Keyboard and Mouse Practice (KAMP)',
    description: "My first game. Written entirely in Java, this game was a mix between a type racer and an aim trainer. I learned all about object oriented programming practices and design principles throughout its creation.",
    image: '/images/KAMP.png',
    tags: ['Java'],
    source: 'https://github.com/DerekMarshall855/KAMP',
    id: 11
  },
  {
    title: 'N-Puzzle Solver',
    description: "This was my latest attempt in creating an N-puzzle solver, but this time it was much faster and could solve up to n=24.",
    image: '/images/python_puzzle.png',
    tags: ['Python'],
    source: 'https://github.com/DerekMarshall855/Assignment-1',
    id: 12
  },
  {
    title: 'Sudoku Puzzle Solver',
    description: "My AC3 Sudoku algorithm. This project was for my AI course and involved large amounts of research and multiple iterations to get right.",
    image: '/images/sudoku.png',
    tags: ['Python'],
    source: 'https://github.com/DerekMarshall855/CP468-Assignment-2',
    id: 13
  },
];

export const TimeLineData = [
  { year: 2016, text: 'Started to learn programming for highschool robotics and problem solving', },
  { year: 2017, text: 'Entered first year University at Wilfrid Laurier Waterloo as a Computer Science and Psychology Double Major', },
  { year: 2018, text: 'Began learning data structures and C programming', },
  { year: 2019, text: 'Entered my first hackathon pursuing a backend api project, began learning databases and python flask', },
  { year: 2020, text: 'Started learning R programming for data science, WebGL for graphics, React and NodeJS for full stack development', },
  { year: 2021, text: 'Pursued many solo projects, began my first internship as a full stack web developer, became certified in Unreal, Unity, and SocketIO. Promoted to backend lead at current position.', },
  { year: 2022, text: 'Started a new position as a full stack developer at the Government of Canada IRCC. Learned Go and C++ on my own time. Focused on Angular, NestJS, and AWS Cloud at work.' },
  { year: 2023, text: 'Continued work at IRCC, leaning heavily into cloud and data development, some backend with Java Springboot and MySQL. Vastly improved at AWS-CDK, architecture, and data manipulation. Created my first mid-sized C++ project with Vulkan.' }
];