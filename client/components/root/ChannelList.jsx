import React from 'react';

export default class ChannelList extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedChannel: 'general'
    }
  }

  selectChannel(name) {
    this.setState({ selectedChannel: name });
  }

  render () {
    const channels = [{ name: 'general' }, { name: 'foobar' }];

    return(
      <div className="ChannelList">
        <h2 className="ChannelHeader">Channels</h2>
        <ul className="ChannelUl">
          {channels.map((channel, index) => {
            if(this.state.selectedChannel === channel.name) {
              return <li className="ChannelLi-active" key={"channel-"+index} onClick={this.selectChannel.bind(this, channel.name)}><span className="ChannelLiIcon">#</span> {channel.name}</li>;
            } else {
              return <li className="ChannelLi" key={"channel-"+index} onClick={this.selectChannel.bind(this, channel.name)}><span className="ChannelLiIcon">#</span> {channel.name}</li>;
            }
          })}
        </ul>
      </div>
    );
  }
}
