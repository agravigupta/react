import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
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
