import React, { Component } from 'react';
import headshot from '../assets/images/headshot.jpg';

class AboutMe extends Component {

  render() {
    return (
        <section className="about">
          <div className="bg-gray-400" style={{ height: "80vh" }}> 
            <div className="pt-32 pb-8">
                <h1 id="AboutMe" className="font-bold text-center uppercase text-blue-900 tracking-wide antialiased">About Me</h1> 
            </div>
            <div className="flex max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
                <div className="flex m-auto justify-center">
                    <img src={headshot} alt="Zach" className="rounded-full w-7/12"/>
                </div>
                <div className="m-auto pr-12 pb-12 pt-8 max-w-3xl">
                    <p className="text-xl text-gray-800">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                </div>
            </div>
          </div>
          <div className="flex max-w-6xl mx-auto bg-white -mt-64 mb-16 shadow-lg rounded-lg overflow-hidden">
                <div className="m-auto p-12 pb-12 pt-8 max-w-3xl">
                    <h1 className="text-blue-800 font-bold text-center">Designer</h1>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                </div>
                <div className="m-auto p-12 pb-12 pt-8 max-w-3xl">
                    <h1 className="text-blue-800 font-bold text-center">Developer</h1>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>                </div>
                <div className="m-auto p-12 pb-12 pt-8 max-w-3xl">
                    <h1 className="text-blue-800 font-bold text-center">Product Manager</h1>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>                </div>
            </div>
        </section>
    );
  }

}

export default AboutMe;

