import React from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Projects from './Components/Projects';
import Project from './Components/Project';

const App = () => {
  const projs = [
    [{
        name : "Rave (Mobile Social Media Application)",
        stack : "Python (Flask), Javascript (React Native), Firestore (switching soon)",
        lines : "4200 (so far)",
        github : null,
        extended : "Rave is a startup and application I have been working on since May 2023. Rave is going to initially release as a mobile application, and I have been using my skills in Javascript and React Native to create the app. On the front-end this project has taught me a lot about making attractive, mobile-friendly user-interfaces and implementing these interfaces in code. For our server, I designed a REST API using Python and Flask. Creating the API has taught me about authentication/authorization (using JSON Web Tokens), storing data/images efficiently (using Google Cloud), designing algorithms (such as our search/explore ranking algorithm), and many other lessons about system design.",
        images: []
    },
    {
        name : "Poker Payout Calculator",
        stack : "Javascript (React)",
        lines : "220",
        github : "https://github.com/gavin-oconnor/GavsPokerCalc3/tree/main",
        extended : "This is a poker calculator I designed to calculate payouts between my friends. During the summer, my friends and I play a lot of poker, but often we'd end up with unaccounted for chips or people not receiving all the money the chips showed them winning. This is a third iteration of the poker calculator. The original two used a client and server to do calculations, but I eventually realized that all the calculation could be done on the front-end. I think this tool is a good example of identifying a problem and hacking together a piece of software to solve it.",
        images : [require("./Assets/poker_calc_0.png"),require("./Assets/poker_calc_1.png")]
    },
    {
        name : "Djikstra's Algorithm Maze Solver",
        stack : "Python (Pygame)",
        github : "",
        lines : "150",
        extended : "This project is based on <a href='https://www.youtube.com/watch?v=rop0W4QDOUI&t=1s' target=_blank>this Computerphile video</a> about algorithmically solving a maze where the input is a picture. My code takes in an MxN maze where black pixels are walls and white pixels are paths. The program then converts this image into a graph where there are only nodes at the junctions, while nodes that are solely path without the ability to turn become edges. Once, I have created the graph, I implement Djiksra's Algorithm using a priority queue and solve the maze. The path used to solve the maze is then drawn onto the image and the image is output again as a new file.",
        images: [require("./Assets/maze_0.png"),require("./Assets/maze_1.png")]
    },],
    [{
        name : "Fourier Series Drawing Visualization",
        stack : "Python (Pygame)",
        github : "",
        lines : "175",
        extended : "",
        images: [] 
    },
    {
        name : "Mandelbrot Set Visualizer",
        stack : "Python (Pygame)",
        github : "",
        lines : "150",
        extended : "",
        images: []  
    },
    {
        name : "Super Mario Level Clone",
        stack : "Java (Processing)",
        github : "",
        lines : "?",
        extended : "",
        images: []
    },]

]
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects projs={projs}/>}/>
        <Route path="/project/:index" element={<Project projs={projs}/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App