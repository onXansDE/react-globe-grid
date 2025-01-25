import './App.css'
import { Grid } from './grid';
import { HeaderBar } from './header';
import { useState } from 'react';

function App() {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <HeaderBar toggleIsActive={() => {setIsActive(!isActive)}}></HeaderBar>
      <Grid isActive={isActive} ></Grid>
    </>
  );
}

export default App
