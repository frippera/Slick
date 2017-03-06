import React from 'react';

export default class ChannelMessageForm extends React.Component {
  render () {
    return(
      <div>
        <form>
          <input name="message"/>
          <button name="btn-send">Send message</button>
        </form>
      </div>
    );
  }
}
