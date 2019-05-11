import React from 'react';
import Base from 'terra-base';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const App = () => (
  <Base className="App" locale="en">
    <Button
      text="Convert Terra to Typescript"
      onClick={() => alert('Not yet!')}
      style={buttonStyle}
    />
  </Base>
);

export default App;