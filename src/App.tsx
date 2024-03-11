import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className={'text-center'}>{'Login Form'}</h3>
        <form action="" noValidate>
          <div className="input-container">
            <label htmlFor="email">{'Email'}</label>
            <input type="email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">{'Password'}</label>
            <input type="password" />
          </div>
          <div className="action">
            <button className="submit">{'Login'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
