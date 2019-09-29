import React from 'react';
import { Contact } from './app/views/Contact';
import { Home } from './app/views/Home';
import { Video } from './app/views/Video';

import { StackNavigator } from 'react-navigation';
import { VideoDetail } from './app/views/VideoDetail';
import { Register } from './app/views/Register';
import { Login } from './app/views/Login';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegistrationRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  }
});

export default function App() {
  return <MyRoutes />;
}

<script src="http://localhost:8097"></script>;
