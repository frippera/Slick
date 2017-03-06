import React from 'react';

import ChannelMessages from './ChannelMessages.jsx';
import ChannelMessageForm from './ChannelMessageForm.jsx';

export default class Channel extends React.Component {
  addMessage(message, e) {
    e.preventDefault();

    alert('addMessage');
  }

  render() {
    const messages = [
      { handle: 'jaapm', message: 'Hello, world!', time: "10:15" },
      { handle: 'friar', message: 'Another Hello!', time: "11:03" },
      { handle: 'fav', message: 'Hola!', time: "12:22" },
      { handle: 'jaapm', message: 'Hello, world!', time: "10:15" },
      { handle: 'friar', message: 'Another Hello!', time: "11:03" },
      { handle: 'fav', message: 'Hola!', time: "12:22" },
      { handle: 'jaapm', message: 'Hello, world!', time: "10:15" },
      { handle: 'friar', message: 'Another Hello!', time: "11:03" },
      { handle: 'fav', message: 'Hola!', time: "12:22" },
      { handle: 'jaapm', message: 'Hello, world!', time: "10:15" },
      { handle: 'friar', message: 'Another Hello!', time: "11:03" },
      { handle: 'fav', message: 'Hola!', time: "12:22" },
      { handle: 'jaapm', message: 'Hello, world!', time: "10:15" },
      { handle: 'friar', message: 'Another Hello!', time: "11:03" },
      { handle: 'fav', message: 'Hola!', time: "12:22" },
      { handle: 'jaapm', message: 'Hello, world!', time: "10:15" },
      { handle: 'friar', message: 'Another Hello!', time: "11:03" },
      { handle: 'fav', message: 'Hola!', time: "12:22" },
    ];

    return(
      <div className="Channel">
        <ChannelMessages messages={messages}/>
        <ChannelMessageForm addMessage={this.addMessage}/>
      </div>
    );
  }
}
