let a ="successful ";
console.log("adding a change",a );

import React from 'react';
import ReactDom from 'react-dom';
import MainApp from './components/MainApp/MainApp.jsx';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faPlayCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle';
import faPauseCircle from '@fortawesome/fontawesome-free-solid/faPauseCircle';
import faFastForward from '@fortawesome/fontawesome-free-solid/faFastForward';



fontawesome.library.add(brands, faPlayCircle,faFastForward,faPauseCircle);
ReactDom.render(<MainApp />, document.getElementById('react-root'));