import React, { useState } from 'react';
import './App.css'
import Button from './UIComponents/Headless/components/buttonMolecule/ButtonMolecule'
import { GiClick } from 'react-icons/gi'

let buttonStyle = {
  backgroundColor: '#ffdd00', padding: 5, borderRadius: 10, width: 100, display: 'inline-flex', justifyContent: 'space-around'
}

function App(props) {

  const [loading, setLoading] = useState(false)


  return (
    <div style={{ height: '100%', width: '100%' }}>

      <div style={{ margin: 20, }}>
        <button
          style={{ ...buttonStyle, backgroundColor: 'grey', width: 'auto', marginTop: 50 }}
          onClick={() => setLoading(prev => !prev)}>Click to toggle</button>
      </div>

      <Button
        style={{ ...buttonStyle }}
        onClick={() => { console.log('click yellow') }}
        isLoading={loading}
      >
        <Button.Label style={{}}>Click</Button.Label>

        <Button.Icon style={{ alignSelf: 'center', backgroundColor: 'transparent' }}><GiClick /></Button.Icon>

      </Button>

    </div>
  );
}




export default App;
