import React from 'react'
import Projcard from '../components/Projcard'

const projects = [
  {
    id: 1,
    imageName: 'editor',
    title: 'Web Code Editor',
    info: ['React.js', 'Node.js' ,'codemirror(npm)', 'CSS 3'],
    color: ['bg-blue-100', 'bg-green-100', 'bg-grey-100', 'bg-green-100'],
    text: 'A web code editor, which can compile a basic HTML, CSS and Javascript project. It works in integration with the code mirror library.',
    gitlink: 'https://github.com/mank-423/WebCodeEditor',
    weblink: 'https://webcode-ukhi.onrender.com/',
  },

  {
    id: 2,
    imageName: 'gofood',
    title: 'Food Booking App',
    info: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    color: ['bg-blue-100', 'bg-green-100', 'bg-grey-100', 'bg-green-100', 'bg-red-100'],
    text: 'GoFood,a web application for oredering food, which has features login, signup, choosing food from the menu and checking out with the food selected.',
    gitlink: 'https://github.com/mank-423/MERN-FoodDelivery',
    weblink: 'https://gofood-7ghp.onrender.com/',
  },
  {
    id: 3,
    imageName: 'deVerse',
    title: 'De-Verse',
    info: ['React.js', 'Node.js', 'Solidity', 'Gnosis-Chain', 'Truffle'],
    color:['bg-blue-100', 'bg-green-100', 'bg-grey-100', 'bg-green-100', 'bg-red-100'],
    text: 'A web3 dApp world where user can publish any variety of content, he wishes to sell and also buy from marketplace. A unique dapp culture!',
    gitlink:'https://github.com/mank-423/DeVerse'
  
  },
  {
    id: 4,
    imageName: 'moneyTracker',
    title: 'Pocket Money Tracker',
    info: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    color: ['bg-blue-100', 'bg-green-100', 'bg-grey-100', 'bg-green-100'],
    text: 'Money Tracker,a simple way for students to keep track of money. Keeping up all your records to make the HISAAB easy and spend and save easily.',
    gitlink: 'https://github.com/mank-423/Pocket-money'
  
  },
  {
    id: 5,
    imageName: 'translator',
    title: 'Translator App',
    info: ['Python', 'Tkinter', 'googletrans','google-speech'],
    color: ['bg-orange-100', 'bg-green-400','bg-blue-100', 'bg-blue-100'],
    text: 'A translator GUI app built on Tkinter and libraries of python for voice recoginiton, converting to text , convert to desired language given in the application.',
    gitlink: 'https://github.com/mank-423/Translator'
  },
  {
    id: 6,
    imageName: 'lipnet',
    title: 'LipNet',
    info: ['Python', 'Flask'],
    color: ['bg-orange-100', 'bg-green-400'],
    text: 'A ML project of Lipnet and integrated using Flask ,reads lips of videos and converts it to the text. Implmentable idea for deaf users to watch any video.',
    gitlink: 'https://github.com/mank-423/Hackathon_Lipnet',
    weblink: 'https://lipsinc-demo.streamlit.app/',
  },

]


function Projects() {
  return (
    <div className='md:px-20'>
      <h1 className='flex justify-center items-center font-medium p-4'>Projects</h1>

      {/* webcodeEditor, goFood, DeVerse, web3 components */}
      <div className='flex flex-wrap gap-4 justify-center pb-8'>
        {projects.map((item) => (
          <Projcard key={item.id} id={item.id} info={item.info} imageName={item.imageName} title={item.title} text={item.text} gitlink ={item.gitlink} weblink={item.weblink} colors={item.color}/>
        ))}
      </div>

    </div>
  )
}

export default Projects
