import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import AboutMe from './screens/AboutMe';
import IconLink from './components/IconLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons';
import lexity from './assets/images/Lexity.png';
import tcw from './assets/images/tcw_screenshot.jpeg';
import ir from './assets/images/image_rec.png';

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

              <div className="lg:w-1/3">
                <img src={tcw} alt="" className="rounded-lg w-64 m-auto"></img>
                <h2 className="text-center pt-4 subheader">The Creative Way</h2>
                <p className="p-2 mb-12">The Creative Way is a mobile app I designed and built for a client's business. The app has a 4.9 star rating in the iOS <a href="https://apps.apple.com/us/app/the-creative-way-by-ted-dekker/id1458247764" target="_blank" rel="noopener noreferrer">App Store</a> </p>
              </div>
              <div className="lg:w-1/3">
                <img src={lexity} alt="" className="rounded-lg w-64 m-auto"></img>
                <h2 className="text-center pt-4 subheader">Lexity</h2>
                <p className="p-2 mb-12">Lexity is a social reading list app that I designed and built with my business partner. You can check it out at <a href="https://www.notion.so/Welcome-to-Lexity-425a954329f34f36894624def97e9cc4" target="_blank" rel="noopener noreferrer">Lexity.co</a> or download the app on the <a href="https://apps.apple.com/us/app/lexity/id1528067040" target="_blank">App Store</a></p>
              </div>
              <div className="lg:w-1/3">
                <img src={ir} alt="" className="rounded-lg w-64 m-auto"></img>
                <h2 className="text-center pt-4 subheader">MarketX Image Recognition</h2>
                <p className="p-2 mb-12">I led the product strategy and roadmap for a B2B SaaS app using machine learning and computer vision to recognize products on shelves in the retail industry. You can read more about the product <a href="https://www.form.com/capabilities/image-recognition-app/" target="_blank" rel="noopener noreferrer">here</a>. </p>
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
              <p className="text-gray-100">Interested in working together? Let's do this.</p>
              <p className="text-gray-100 pb-4">You can reach me by <a href="mailto:zcapshaw@gmail.com">email</a> or on <a href="https://twitter.com/zachcapshaw" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
              <div className="m-auto w-full">

                <div className="pt-8">
                    <ul>
                        <IconLink url="https://github.com/zcapshaw" icon="Github"/>
                        <IconLink url="https://www.linkedin.com/in/zcapshaw/" icon="LinkedIn"/>
                        <IconLink url="https://twitter.com/zachcapshaw" icon="Twitter"/>
                    </ul>
                </div>   
                <p className="text-center text-gray-500 m-auto pt-8 text-sm">
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

