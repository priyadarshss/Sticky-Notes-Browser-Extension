import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StickyNotes from './StickyNotes';

const insertionPoint = document.createElement("div");
insertionPoint.id = "insertion-point";
document.body.parentNode.insertBefore(insertionPoint, document.body);


ReactDOM.render(
  <React.StrictMode>
    <StickyNotes />
  </React.StrictMode>,
  insertionPoint
);
