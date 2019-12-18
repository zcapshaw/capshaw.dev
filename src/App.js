import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import background from './assets/images/background.jpg';

function App() {
  return (
    <div className="App" >
      <div  className="flex bg-cover bg-center bg-fixed h-screen w-screen relative" 
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${background})`}}>
        <div className="top-0 right-0 fixed mt-6 mr-6">
            <FontAwesomeIcon className="center" icon={faBars} color="#BBBBBB" size="lg"/>
        </div>  
        <div className="m-auto">
          <h1 className="md:text-5xl text-white font-bold antialiased">
            Hello, my name is Zach.
          </h1>
          <h2 className="text-white font-test antialiased">
            I design and build software.
          </h2>
          <div className="my-8">
            <button className="btn hover:bg-gray-700 focus:outline-none font-bold antialiased">
              View my work
            </button>   
            <button className="btn hover:bg-gray-700 focus:outline-none ml-6 font-bold antialiased">
              Contact me
            </button>   
          </div>
        </div> 
        <div className="flex w-screen justify-center mb-6 bottom-0 absolute">
            <FontAwesomeIcon className="center" icon={faChevronDown} color="#BBBBBB" size="lg"/>
        </div>
        <div className="sm:mr-8 absolute right-0 bottom-0 ">
          <ul>
            <li className="my-6 mx-4 inline-block">
              <FontAwesomeIcon className="center" icon={faGithub} color="#999999" size="lg"/> 
            </li>
            <li className="my-6 mx-4 inline-block">
              <FontAwesomeIcon className="center" icon={faLinkedin} color="#999999" size="lg"/>
            </li>
            <li className="my-6 mx-4 inline-block">
              <FontAwesomeIcon className="center" icon={faInstagram} color="#999999" size="lg"/>
            </li>
          </ul>
        </div>    
      </div>
      <section>
        <div className="h-screen"> 
          <div className="my-16">
            <h1 className="font-bold text-center uppercase text-gray-700 tracking-wide antialiased">About Me</h1> 
          </div>      
          <div className="mx-8 sm:mx-16">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ipsa repellendus sequi, rem labore consectetur omnis quis perspiciatis facere neque quisquam autem non aspernatur, sit porro quia explicabo amet illum.</p>
            <p>Quidem excepturi beatae sint harum corrupti perferendis aliquid facere enim velit suscipit, tempora blanditiis, rem nam ullam soluta consequuntur ipsa aliquam fuga eius assumenda nemo, facilis sapiente reiciendis quisquam. Vel?</p>
            <p>Tenetur eaque, rerum dolores perferendis accusantium nemo, eius natus minima non adipisci quisquam quos iusto ipsam vel ducimus! Quo suscipit ipsa consequatur facilis veniam, perferendis nulla odit consectetur tenetur nostrum.</p>
            <p>Quidem dolores atque sapiente sequi aut ducimus consequatur voluptatem aperiam! Rerum, amet. Aliquid esse odit id architecto sunt cumque, eius sit necessitatibus? Quis voluptatum harum maxime explicabo, illum voluptatem at!</p>
            <p>Ducimus, amet tempore placeat debitis tempora iure earum, cumque officiis provident laudantium nemo sunt dolorum. Omnis harum rem, aliquam nam dignissimos quo autem repellendus iusto labore quam deserunt laudantium accusamus!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

