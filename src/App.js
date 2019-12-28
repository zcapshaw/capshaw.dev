import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <HomeScreen />
        <section className="about">
          <div> 
            <div className="my-16">
              <h1 className="font-bold text-center uppercase text-gray-700 tracking-wide antialiased">About Me</h1> 
            </div>      
            <div className="mx-8 sm:mx-16 pb-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ipsa repellendus sequi, rem labore consectetur omnis quis perspiciatis facere neque quisquam autem non aspernatur, sit porro quia explicabo amet illum.</p>
              <p>Quidem excepturi beatae sint harum corrupti perferendis aliquid facere enim velit suscipit, tempora blanditiis, rem nam ullam soluta consequuntur ipsa aliquam fuga eius assumenda nemo, facilis sapiente reiciendis quisquam. Vel?</p>
              <p>Tenetur eaque, rerum dolores perferendis accusantium nemo, eius natus minima non adipisci quisquam quos iusto ipsam vel ducimus! Quo suscipit ipsa consequatur facilis veniam, perferendis nulla odit consectetur tenetur nostrum.</p>
              <p>Quidem dolores atque sapiente sequi aut ducimus consequatur voluptatem aperiam! Rerum, amet. Aliquid esse odit id architecto sunt cumque, eius sit necessitatibus? Quis voluptatum harum maxime explicabo, illum voluptatem at!</p>
              <p>Ducimus, amet tempore placeat debitis tempora iure earum, cumque officiis provident laudantium nemo sunt dolorum. Omnis harum rem, aliquam nam dignissimos quo autem repellendus iusto labore quam deserunt laudantium accusamus!</p>
            </div>
          </div>
        </section>
        <section className="Projects">
          <div className="bg-gray-300 h-full"> 
            <div>
              <h1 className="p-4 pt-16 font-bold text-center uppercase text-gray-700 tracking-wide antialiased">Projects</h1> 
            </div>      
            <div className="mx-8 sm:mx-16 pb-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ipsa repellendus sequi, rem labore consectetur omnis quis perspiciatis facere neque quisquam autem non aspernatur, sit porro quia explicabo amet illum.</p>
              <p>Quidem excepturi beatae sint harum corrupti perferendis aliquid facere enim velit suscipit, tempora blanditiis, rem nam ullam soluta consequuntur ipsa aliquam fuga eius assumenda nemo, facilis sapiente reiciendis quisquam. Vel?</p>
              <p>Tenetur eaque, rerum dolores perferendis accusantium nemo, eius natus minima non adipisci quisquam quos iusto ipsam vel ducimus! Quo suscipit ipsa consequatur facilis veniam, perferendis nulla odit consectetur tenetur nostrum.</p>
              <p>Quidem dolores atque sapiente sequi aut ducimus consequatur voluptatem aperiam! Rerum, amet. Aliquid esse odit id architecto sunt cumque, eius sit necessitatibus? Quis voluptatum harum maxime explicabo, illum voluptatem at!</p>
              <p>Ducimus, amet tempore placeat debitis tempora iure earum, cumque officiis provident laudantium nemo sunt dolorum. Omnis harum rem, aliquam nam dignissimos quo autem repellendus iusto labore quam deserunt laudantium accusamus!</p>
            </div>
          </div>
        </section>
        <section className="Contact">
          <div className="bg-gray-900 h-full"> 
            <div>
              <h1 className=" p-4 pt-16 font-bold text-center uppercase text-white tracking-wide antialiased">Contact Me</h1> 
            </div>      
            <div className="mx-8 sm:mx-16 text-gray-500 pb-12">
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

}

export default App;

