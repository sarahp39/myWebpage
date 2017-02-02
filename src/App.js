import React from 'react';


//a "root" component
class App extends React.Component {
  //how to display this component
  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div id = 'banner'> 
        <div>
          <h1>Sarah Ann Phillips</h1>
        </div>
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return(
      <div>
      --> I NEED TO MAKE A NAV BAR WHEN I GET THE LINKS
      </div>
    );
  }
}

//more Components can go here!


export default App; //make this class available to other files (e.g., index.js)