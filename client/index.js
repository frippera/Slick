import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ChannelList from './components/root/ChannelList';
import Channel from './components/channel/Channel';

Meteor.startup(() => {
  render(
    <div>
      <ChannelList/>
      <Channel/>
    </div>,
    document.getElementById('root'),
  );
});
