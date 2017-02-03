import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <header className="well">
          <div className="container">
            <h1>Adopt A Pet</h1>
          </div>
        </header>
        <main className="container">
          <h2>About Us</h2>
          <p>Here is some information about us. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <blockquote>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</blockquote>
          <p>Veniam dolorem cupiditate tenetur placeat nulla repellat dicta maxime architecto blanditiis non facere nesciunt quae animi quam quidem ullam, suscipit nisi ipsam voluptatem accusamus necessitatibus itaque autem in, sunt similique.</p>
          <p>In mollitia cumque sapiente ducimus quo labore magni qui quas aperiam, voluptatibus nesciunt dicta enim dignissimos doloribus tempora iusto commodi alias recusandae tempore beatae atque? Totam cum et, perferendis itaque.</p>
          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        </main>
      </div>
    );
  }
}

class ResourcesPage extends React.Component {
  render() {
    return (
      <div>
        <header className="well">
          <div className="container">
            <h1>Adopt A Pet</h1>
          </div>
        </header>
        <main className="container">
          <h2>Resources</h2>
          <p>Below are a list of Community Support links from the Seattle Human Society.</p>
          <ul>
            <li><a href="http://www.seattlehumane.org/services/disaster-help">Disaster Relief</a></li>
            <li><a href="http://www.seattlehumane.org/services/severely-injured-or-dying-animals">End-of-Life Services</a></li>
            <li><a href="http://www.seattlehumane.org/services/microchip-your-pet">Microshipping and Licensing</a></li>
            <li><a href="http://www.seattlehumane.org/services/community-pet-programs">Pet Food Bank</a></li>
            <li><a href="http://www.seattlehumane.org/services/severely-injured-or-dying-animals">Pet Loss Support</a></li>
            <li><a href="http://www.seattlehumane.org/services/spaying-%26-neutering">Spay &amp; Neuter</a></li>
            <li><a href="http://www.seattlehumane.org/services/community-pet-programs">Visiting Pet Friends - Pet Therapy</a></li>
            <li><a href="http://www.seattlehumane.planmylegacy.org/pet-guardian-program">Pet Guardian Program - Plan for Your Pet's Future</a></li>
          </ul>
        </main>
      </div>
    );
  }
}

export default AboutPage;

export {AboutPage, ResourcesPage };