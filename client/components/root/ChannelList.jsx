import React from 'react';

export default class ChannelList extends React.Component {
  render () {
    const channels = [{ name: 'general' }, { name: 'foobar' }];

    return(
      <div>
        {channels.map((channel, index) => {
          return <div key={"channel-"+index}>{channel.name}</div>;
        })}
      </div>
    );
  }
}
