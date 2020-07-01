import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
   
  //   constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES
  //   };
  // }
  //   render() {
  //   return (
  //   <div>
  //     <Navbar dark color="primary">
  //       <div className="container">
  //         <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
  //       </div>
  //     </Navbar>
  //     <Menu dishes={this.state.dishes} />
  //   </div>
  //   );
  // }
}


export default App;
