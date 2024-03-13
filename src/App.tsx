import React from 'react';
import './App.css';

import LoginForm from './components/form/LoginForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className={'text-center'}>{'Login Form'}</h3>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
