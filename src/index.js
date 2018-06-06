'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import MainApp from './components/MainApp/MainApp.jsx';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faPlayCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle';
import faPauseCircle from '@fortawesome/fontawesome-free-solid/faPauseCircle';
import faFastForward from '@fortawesome/fontawesome-free-solid/faFastForward';
import faVolumeDown from '@fortawesome/fontawesome-free-solid/faVolumeDown';

fontawesome.library.add(brands, faPlayCircle,faFastForward,faPauseCircle,faVolumeDown);
ReactDom.render(<MainApp />, document.getElementById('react-root'));