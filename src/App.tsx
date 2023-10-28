import React, { useState } from 'react';
import { useSDK } from '@metamask/sdk-react';

import './App.css';

function App() {
  // const [account, setAccount] = useState<string>();
  const { sdk, connected, account, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      // setAccount(accounts?.[0]);
    } catch(err) {
      console.warn(`failed to connect..`, err);
    }
  };

  const terminate = async () => {
    sdk?.terminate();
  }

  return (
    <div className="App">
      {
        !connected ? (
      <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect
      </button>
        ) : (
          <button style={{ padding: 10, margin: 10 }} onClick={terminate}>
        Disconnect
      </button>
        )
      }
      {connected && (
        <div>
          <>
            {`Connected chain: ${chainId}`}
            <p></p>
            {account && `Connected account: ${account}`}
          </>
        </div>
      )}
    </div>
  );
}

export default App;
