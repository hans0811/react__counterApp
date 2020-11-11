import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const shadow = {
  boxShadow: 'rgb(20, 76, 128) 0px 0px 10px 10px',
  padding: 20, // unit is 20
};

// const Counter = (
//   <div className="container" style = {shadow}>
//   <div className="chevron chevron-up" />
//   <div className="number">256</div>
//   <div className="chevron chevron-down" />
//   </div>
// );

const { useState } = React;

const Counter = () => {

  const [ count, setCount]= useState(0);

  return(
    <div className="container">

        <div className="chevron chevron-up"
        style={{
          visibility: count >=10 && 'hidden',
        }}
        onClick={()=> setCount(count + 1)} />
    
    {/* {variable} */}
    <div className="number">{count}</div>

        <div className="chevron chevron-down" 
        style={{
          visibility: count <=0 && 'hidden',
        }}
        onClick={()=> setCount(count - 1) }/>
    

    </div>
);
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <div style = {{ display:'flex', justifyContent:'space-between' }}>
  // <div>
  // <Counter />
  // <Counter />
  // <Counter />
  // </div>,
  <Counter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
