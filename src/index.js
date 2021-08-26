import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StickyNotes from './StickyNotes';
import reportWebVitals from './reportWebVitals';

const insertionPoint = document.createElement("div");
insertionPoint.id = "insertion-point";
document.body.parentNode.insertBefore(insertionPoint, document.body);


ReactDOM.render(
  <React.StrictMode>
    <StickyNotes />
  </React.StrictMode>,
  insertionPoint
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
