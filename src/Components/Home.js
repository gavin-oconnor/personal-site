import React from 'react'
import Header from './Header'
import LeftImageRow from './LeftImageRow'
import RightImageRow from './RightImageRow'

const Home = () => {
  const Interests = {
    header : "Interested In...",
    subheader : "Computer Science, Finance, Startups",
    content : ["I'm a rising sophomore at Santa Clara University studying Finnace & CS. I have been programming (primarily in Python) and investing in the stock market since 2020. Over the past three years, I've developed these skills, and I'm currently combining these skillsets as I work on my startup Rave. Rave is a food social media app which my co-founder and I are planning to release in August. I am the sole programmer and have been using my business acumen to guide business decisions with my co-founder."],
    image : require("../Assets/interests_logo.png")
  }
  const SantaClara = {
    header : "Finance & Computer Science Student",
    subheader : "Santa Clara University",
    content : [
      "&nbsp;&nbsp;GPA: 4.0",
      "&nbsp;&nbsp;Activities & Societies",
      "&nbsp;&nbsp;&nbsp;&nbsp; - Self Employed Math Tutor",
      "&nbsp;&nbsp;&nbsp;&nbsp; - Finance Assocation",
      "&nbsp;&nbsp;&nbsp;&nbsp; - Assocation for Computing Machinery",
      "&nbsp;&nbsp;&nbsp;&nbsp; - Pi Kappa Alpha",
      "&nbsp;&nbsp;Relevant Coursework",
      "&nbsp;&nbsp;&nbsp;&nbsp; - Object Oriented C++",
      "&nbsp;&nbsp;&nbsp;&nbsp; - Micro/Macro/International Economics",
      "&nbsp;&nbsp;&nbsp;&nbsp; - Introduction to Spreadsheets",
      "&nbsp;&nbsp;&nbsp;&nbsp; -  Contemporary Business Issues",
    ],
    image : require("../Assets/scu_logo.png")
  }
  const Skills = {
    header : "Skills",
    subheader : null,
    content : [
      "Languages (most to least experienced)",
      "&nbsp;&nbsp; - Python",
      "&nbsp;&nbsp; - Javascript",
      "&nbsp;&nbsp; - C++",
      "&nbsp;&nbsp; - Java",

      "Frameworks (no particular order)",
      "&nbsp;&nbsp; - Flask",
      "&nbsp;&nbsp; - Pygame",
      "&nbsp;&nbsp; - React & React Native",

      "Tools (no particular order)",
      "&nbsp;&nbsp; - Excel, Powerpoint, Word",
      "&nbsp;&nbsp; - Photoshop",
      "&nbsp;&nbsp; - Powerpoint",
      "&nbsp;&nbsp; - Final Cut Pro",
    ],
    image : require("../Assets/skills_logo.png")
  }
  return (
    <div>
        <Header/>
        <RightImageRow header={Interests.header} subheader={Interests.subheader} content={Interests.content} image={Interests.image}/>
        <LeftImageRow header={SantaClara.header} subheader={SantaClara.subheader} content={SantaClara.content} image={SantaClara.image}/>
        <RightImageRow header={Skills.header} subheader={Skills.subheader} content={Skills.content} image={Skills.image}/>
        <div style={{height: 100}}/>
    </div>
  )
}

export default Home