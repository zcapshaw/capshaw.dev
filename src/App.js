import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import AboutMe from './screens/AboutMe';
import IconLink from './components/IconLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons';
import backround from './assets/images/background.jpg';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <HomeScreen />
        <AboutMe />
        <section className="Projects">
          <div className="container m-auto"> 
            <div>
              <h1 id="Projects" className="p-4 pt-16 font-bold text-center uppercase text-blue-900 tracking-wide antialiased">Projects</h1> 
            </div>      
            <div className="flex flex-col lg:flex-row m-auto px-8 sm:px-16 py-12 max-w-6xl text-xl">
              <div>
                <img src={backround} alt="" className="rounded-lg w-64 m-auto"></img>
                <p className="p-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ipsa repellendus sequi, rem labore consectetur omnis quis perspiciatis facere neque quisquam autem non aspernatur, sit porro quia explicabo amet illum.</p>
              </div>
              <div>
                <img src={backround} alt="" className="rounded-lg w-64 m-auto"></img>
                <p className="p-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ipsa repellendus sequi, rem labore consectetur omnis quis perspiciatis facere neque quisquam autem non aspernatur, sit porro quia explicabo amet illum.</p>
              </div>
              <div>
                <img src={backround} alt="" className="rounded-lg w-64 m-auto"></img>
                <p className="p-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ipsa repellendus sequi, rem labore consectetur omnis quis perspiciatis facere neque quisquam autem non aspernatur, sit porro quia explicabo amet illum.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="Contact">
          <div className="bg-gray-900 h-full"> 
            <div>
              <h1 id="Contact" className=" p-4 pt-16 font-bold text-center uppercase text-white tracking-wide antialiased">Contact Me</h1> 
            </div>      
            <div className="m-auto px-8 sm:px-16 pb-12 max-w-3xl text-white text-xl text-center">
              <p className="text-gray-100 pb-4">Interested in working together? Let's do this.</p>
              <div className="m-auto w-full">
                <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
                  </div>
                  <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email address" />
                  </div>
                  <div className="mb-4">
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Your message" />
                  </div>
                  <div>
                    <button className="btn hover:bg-gray-700 focus:outline-none font-bold antialiased text-lg" type="button">
                      Submit
                    </button>
                  </div>
                </form>
                <div className="pt-8">
                    <ul>
                        <IconLink url="https://github.com/zcapshaw" icon="Github"/>
                        <IconLink url="https://www.linkedin.com/in/zcapshaw/" icon="LinkedIn"/>
                        <IconLink url="https://www.instagram.com/zacapshaw/" icon="Instagram"/>
                    </ul>
                </div>   
                <p className="text-center text-gray-500 m-auto pt-8 text-sm">
                  Made with <span role="img" aria-label="heart emoji">💙</span> in Denver, CO &copy; 2019.
                </p>
                <div>
                  <p className="text-center text-gray-500 text-xs m-auto pt-4">
                    Icons by <a className="text-gray-500" href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className="text-gray-500"target="_blank" rel="noopener noreferrer">Flaticon</a> | Photo by <a href="https://unsplash.com/@katiemoum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" title="Katie Moum" className="text-gray-500">Katie Moum</a> on <a href="https://www.unsplash.com/" title="Unsplash" target="_blank" rel="noopener noreferrer" className="text-gray-500">Unsplash</a>
                  </p>
                </div>
                <div className="flex">
                  <p className="text-center text-gray-500 text-xs m-auto pt-4">
                    Built in <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="center text-white" size="lg" icon={faReact}/> </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default App;

