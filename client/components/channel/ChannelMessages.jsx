import React from 'react';

import ChannelMessage from './ChannelMessage';

export default class ChannelMessages extends React.Component {
  render () {
    const messages = this.props.messages;
    return(
      <div>
        {messages.map((message, index) =>{
          return <ChannelMessage key={"message-"+index} message={message}/>
        })}
      </div>
    );
  }
}
