import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function OpportunitiesList(props){
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

ReactDOM.render(
  <OpportunitiesList 
    title="Opportunities for you"
    body="Become a volunteer"
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
