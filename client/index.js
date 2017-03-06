import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ChannelList from './components/root/ChannelList.jsx';
import Channel from './components/channel/Channel.jsx';

Meteor.startup(() => {
  render(
    <div className="container">
      <ChannelList/>
      <Channel/>
    </div>,
    document.getElementById('root'),
  );
});
