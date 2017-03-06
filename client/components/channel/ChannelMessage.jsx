import React from 'react';

export default class ChannelMessage extends React.Component {
  render () {
    const message = this.props.message;
    return(
      <div>
        <div>{message.handle}</div>
        <div>{message.message}</div>
      </div>
    );
  }
}
