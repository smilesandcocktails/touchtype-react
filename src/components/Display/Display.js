import React from 'react';
import Msgbar from '../Msgbar/Msgbar'
import msgs from '../../data/msgs'
// import keycodes from '../../data/keycodes'
class Display extends React.Component {

  constructor(props) {
    super(props)
    this.state =  {
      msgs: msgs.zero,
      // keycodes: keycodes
    }
  }

  afterIntro(e) {
    console.log("Key Press is Entered")
    console.log(Object.keys(msgs))
    if(e.keyCode === 32) {

      let newMsg = msgs.one
      this.setState({
        msgs: newMsg
      })
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => this.afterIntro(e));
  }



  render() {
    return (
      <div id="display" >
        <Msgbar msgs={this.state.msgs}/>
        {/* <h3>{this.state.keycodes}</h3> */}
      </div>
    );
  }

}

export default Display;

// currentPage={this.state.currentPage} msg={this.props.msg[this.state.currentPage]} keycodes={this.state.keycodes}
