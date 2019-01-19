import React, { Component } from 'react';

class Background extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=500')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.results.map(pic => {
          return (
            <div key={pic.results}>
              <img src={pic.picture.medium} alt="Some pictures" />
            </div>
          );
        });

        this.setState({ pictures });
        console.log('state is..: ', this.state.pictures);
      });
  }

  render() {
    return (
      <div className="container2">
        <div className="container1">{this.state.pictures}</div>
      </div>
    );
  }
}

export default Background;
