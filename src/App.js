import style from './App.module.css';
import UserForm from './components/inputs/UserForm';
import OutPutContainer from './components/outputs/OutPutContainer';
import React, { useState } from 'react';

function App() {
  const userData = [];
  const [onUserData, setOnUserData] = useState(userData);

  const userInfo = (props) => {
    setOnUserData((prevData) => [props, ...prevData]);
  }
  return (
    <div className={style.app} >
      <UserForm data={userInfo} onSaveError={Error} />
      {onUserData.length > 0 ? <OutPutContainer data={onUserData} /> : null}
    </div>
  );
}

export default App;
