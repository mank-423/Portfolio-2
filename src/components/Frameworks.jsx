import React from 'react'
import Card from './Card'


const fw = [
    {id:1, imageName : 'html', title: 'HTML'},
    {id:2, imageName : 'css', title: 'CSS'},
    {id:3, imageName : 'node', title: 'Node.js'},
    {id:4, imageName : 'express', title: 'Express.js'},
    {id:5, imageName : 'react', title: 'React.js'},
    {id:6, imageName : 'mongo', title: 'MongoDB'},
    {id:7, imageName : 'firebase', title: 'Firebase'},
    {id:8, imageName : 'bootstrap', title: 'Bootstrap'},
    {id:9, imageName : 'tailwind2', title: 'Tailwind CSS'},
    {id:10, imageName : 'truffle', title: 'Truffle'},
    {id:11, imageName : 'w3js', title: 'Web3.js'},
    {id:12, imageName : 'eth', title: 'Ethereum'},
]

const lang = [
    {id:13, imageName : 'cLang', title: 'C'},
    {id:14, imageName : 'cpp', title: 'C++'},
    {id:15, imageName : 'js', title: 'Javascript'},
    {id:16, imageName : 'py', title: 'Python'},
    {id:17, imageName : 'sol', title: 'Solidity'},
    {id:18, imageName : 'motoko', title: 'Motoko'},
]

function Frameworks() {
  return (
    <div className='md:px-36 md:py-5 px-10'>
        <div>
            <h1 className='font-medium'>Technologies/Frameworks I work with</h1>
            <div className='flex flex-wrap gap-4'>
                {fw.map((item)=>(
                    <Card key={item.id} id={item.id} imageName={item.imageName} title={item.title} />
                ))}
            </div>
        </div>

        <div className='pt-10'>
            <h1 className='font-medium'>Languages I work with</h1>
            <div className='flex flex-wrap gap-4 pt-2'>
                {lang.map((item)=>(
                    <Card key={item.id} id={item.id} imageName={item.imageName} title={item.title} />
                ))}
            </div>
        </div>

        <div className='pt-4'>
            <h1 className='font-medium pt-6'>My other experiences</h1>
            <p className='pt-2'>
                Along with working on Web Development projects, I have experience with SQL, 
                and worked with Flask to present the front-end for an ML project. 
                Apart from developing projects I like to do CP on  
                <a href="https://leetcode.com/mk4664348/" className='p-1 text-blue-600 underline'>Leetcode</a>
                , and enjoy learning 🎸 and I love to play ⚽.
            </p>

            <div>
                <p className='pt-6'>Connect with me to discuss web 3.0, web 2.0, and to talk about football(soccer) and much moree.....</p>
                
            </div>

        </div>

    </div>
  )
}

export default Frameworks
