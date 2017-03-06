import React from 'react';

export default class ChannelMessageForm extends React.Component {
  render () {
    return(
      <div>
        <form className="ChannelMessageForm" onSubmit={this.props.addMessage}>
          <input className="input" name="message"/>
          <button className="button" name="btn-send">Send message</button>
        </form>
      </div>
    );
  }
}
