import React from 'react'
import Projcard from '../components/Projcard'

const projects = [
  {
    id: 1,
    imageName: 'editor',
    title: 'Web Code Editor',
    info: ['React.js', 'codemirror(npm), '],
    text: 'A web code editor, which can compile a basic HTML, CSS and Javascript project. It works in integration with the codemirror library and can works with storing the code so that user can access his code later on.',
    link: 'https://github.com/mank-423/WebCodeEditor'
  },

  {
    id: 2,
    imageName: 'gofood',
    title: 'Food Booking App',
    text: 'A web application for oredering food from the app, which has features of login, signup, selecting food from the menu and checking out with the food selected. Based on MERN stack and using JWT & bcryptjs for enchanced security.',
    link: 'https://github.com/mank-423/MERN-FoodDelivery'
  },
  {
    id: 3,
    imageName: 'deVerse',
    title: 'De-Verse',
    text: 'A web3 dApp which serves as a marketplace, where the user can publish any type of content on the website, and earn profit from selling his own IP. It runs on the backend, and uses IPFS Pinata SDK and the code is written from scratch.',
    link:'https://github.com/mank-423/DeVerse'
  
  },
  {
    id: 4,
    imageName: 'moneyTracker',
    title: 'Pocket Money Tracker',
    text: 'The project is a simple way for people to take account of their money and spend accordingly. Some features are yet to be added as login feature for every distinct user and also making the UI much more interactive than what it is right now.',
    link: 'https://github.com/mank-423/Pocket-money'
  
  },
  {
    id: 5,
    imageName: 'translator',
    title: 'Translator App',
    text: 'A translator application built using Tkinter for front-end of the project and using libraries from python for voice recoginiton and convertion to text along with the googletrans library to convert to desired langugae given in the application.',
    link: 'https://github.com/mank-423/Translator'
  
  },
  {
    id: 6,
    imageName: 'lipnet',
    title: 'LipNet',
    text: 'A machine learning project of Lipnet and integrated using Flask and streamlit which reads lips of videos and converts it to the text. And this could be used for live speeches and broadcasting to get the speech text.',
    link: 'https://github.com/mank-423/Hackathon_Lipnet'
  
  },
  


]


function Projects() {
  return (
    <div className='md:px-32 pl-12'>
      <h1 className='flex justify-center items-center font-medium p-4'>Projects</h1>

      {/* webcodeEditor, goFood, DeVerse, web3 components */}
      <div className='flex flex-wrap gap-4'>
        {projects.map((item) => (
          <Projcard key={item.id} id={item.id} imageName={item.imageName} title={item.title} text={item.text}/>
        ))}
      </div>

    </div>
  )
}

export default Projects
