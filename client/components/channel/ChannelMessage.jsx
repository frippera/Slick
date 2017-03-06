import React from 'react';

export default class ChannelMessage extends React.Component {
  render () {
    const message = this.props.message;
    return(
      <div className="ChannelMessage">
        <div className="Handle">{message.handle} <span className="Time">{message.time}</span></div>
        <div className="Message">{message.message}</div>
      </div>
    );
  }
}
