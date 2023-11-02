import React from 'react'
import Projcard from '../components/Projcard'

const projects = [
  {
    id: 1,
    imageName: 'editor',
    title: 'Web Code Editor',
    info: ['React.js', 'Node.js' ,'codemirror', 'CSS 3'],
    color: ['bg-blue-300', 'bg-green-300', 'bg-red-400', 'bg-cyan-500'],
    text: 'A web code editor, which can compile a basic HTML, CSS and Javascript project. It works in integration with the code mirror library.',
    gitlink: 'https://github.com/mank-423/WebCodeEditor',
    weblink: 'https://webcode-ukhi.onrender.com/',
  },

  {
    id: 2,
    imageName: 'summary',
    title: 'SummaryAI',
    info: ['React.js', 'Node.js', 'redux-tooklit', 'RapidAPI'],
    color: ['bg-blue-300', 'bg-green-300', 'bg-yellow-100', 'bg-green-200'],
    text: 'SummaryAI is a project where user can share the blog links that they want to read, and a public API will give the summary of that blog, to make it simple to read for user.',
    gitlink: 'https://github.com/mank-423/SummaryAI',
    weblink:'https://sprightly-begonia-6bb480.netlify.app/'
  },
  {
    id: 3,
    imageName: 'spacex',
    title: 'Space-X Clone',
    info: ['HTML', 'Bootsrap CSS', 'Javascript', 'JQuery'],
    color: ['bg-orange-300', 'bg-blue-300', 'bg-yellow-100', 'bg-green-200'],
    text: 'A Space-X clone made with HTML 5 and Bootstrap for designing, and for animations Jquery is used. A thoughful layout design for cloning.',
    gitlink: 'https://github.com/mank-423/SpaceX-Clone',
    weblink:'https://mank-423.github.io/SpaceX-Clone/'
  },
  {
    id: 4,
    imageName: 'gofood',
    title: 'Food Booking App',
    info: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    color: ['bg-blue-300', 'bg-green-300', 'bg-yellow-100', 'bg-green-200'],
    text: 'GoFood,a web application for oredering food, which has features login, signup, choosing food from the menu and checking out with the food selected.',
    gitlink: 'https://github.com/mank-423/MERN-FoodDelivery',
    weblink: 'https://gofood-7ghp.onrender.com/',
  },
  {
    id: 5,
    imageName: 'moneyTracker',
    title: 'Pocket Money Tracker',
    info: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    color: ['bg-blue-300', 'bg-green-300', 'bg-yellow-100', 'bg-green-200'],
    text: 'Money Tracker, a simple way for students to keep track of money. Keeping up all your records to make the HISAAB easy, spend and save with an idea.',
    gitlink: 'https://github.com/mank-423/Pocket-money',
    weblink:''
  
  },
  {
    id: 6,
    imageName: 'deVerse',
    title: 'De-Verse',
    info: ['React.js', 'Node.js', 'Solidity', 'Gnosis', 'Truffle'],
    color:['bg-blue-300', 'bg-green-300', 'bg-gray-200', 'bg-[#77dd77]', 'bg-[#D2B48C]'],
    text: 'A web3 dApp world where user can publish any variety of content, he wishes to sell and also buy from marketplace. A unique dapp culture!',
    gitlink:'https://github.com/mank-423/DeVerse',
    weblink:''
  
  },
  {
    id: 7,
    imageName: 'translator',
    title: 'Translator App',
    info: ['Python', 'Tkinter', 'googletrans','googlespeech'],
    color: ['bg-yellow-300', 'bg-pink-300','bg-red-100', 'bg-red-100'],
    text: 'A translator GUI app built on Tkinter and libraries of python for voice recoginiton, converting to text , convert to desired language given in the application.',
    gitlink: 'https://github.com/mank-423/Translator',
    weblink:''
  },
  {
    id: 8,
    imageName: 'lipnet',
    title: 'LipNet',
    info: ['Python', 'Flask'],
    color: ['bg-yellow-300', 'bg-pink-400'],
    text: 'A ML project of Lipnet and integrated using Flask ,reads lips of videos and converts it to the text. Implmentable idea for deaf users to watch any video.Used to provide transcribing.',
    gitlink: 'https://github.com/mank-423/Hackathon_Lipnet',
    weblink: 'https://lipsinc-demo.streamlit.app/',
  },

]


function Projects() {
  return (
    <div className='md:px-20 text-white'>
      <h1 className='flex justify-center items-center font-medium p-7'>
        {/* Projects */}
      </h1>

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
