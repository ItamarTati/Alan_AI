import React, {useEffect, useState} from 'react';
//@ts-ignore
import * as alanBtn from '@alan-ai/alan-sdk-web'
interface command{
  command: string 
}
const alanKey: string = 'c14ffd86f37efd1f70092413640945c92e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ( { command }: command ) => {
        if(command === 'testCommand'){
          alert('This Code was excuted')
        }
      }
    })
  }, [])
  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
