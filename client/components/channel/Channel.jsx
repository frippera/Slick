import React from 'react';

import ChannelMessages from './ChannelMessages';
import ChannelMessageForm from './ChannelMessageForm';

export default class Channel extends React.Component {
  render () {
    const messages = [{ handle: 'jaapm', message: 'Hello, world!' }];

    return(
      <div>
        <ChannelMessages messages={messages}/>
        <ChannelMessageForm/>
      </div>
    );
  }
}
