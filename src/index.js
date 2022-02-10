import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MapasApp } from './MapasApp';
import dotenv from 'dotenv'

dotenv.config()

ReactDOM.render(
    <MapasApp />,
  document.getElementById('root')
);
