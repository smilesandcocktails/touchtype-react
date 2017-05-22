import React from 'react';
import Header from '../Header/Header'
import Msgbar from '../Msgbar/Msgbar'

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Msgbar msg={this.props.msg}/>
      </div>
    );
  }

}

export default Home;
