import { Amplify, Auth } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsExports);

import React from 'react';
import Canvas from './Canvas';

function App({ signOut, user }) {
  return (
    <Canvas />
  );
}

export default withAuthenticator(App);