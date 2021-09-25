import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

//import Components
import SongList from './components/SongList'


Amplify.configure(awsconfig);

function App() {
    return (
        <div className="App">
            <SongList/>

        </div>
    );
}

export default withAuthenticator(App);
