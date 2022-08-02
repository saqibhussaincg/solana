import React, { ReactNode, useEffect, useState } from 'react';
import './App.css';
import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react';

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import {
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import { FC, useMemo } from 'react';
import Header from './components/Header/Header';

require('@solana/wallet-adapter-react-ui/styles.css');




function App() {
  

  return (
    <div className="App">
      <Context>
        <Content />
      </Context>

      <Header />
      {/* <WalletMultiButton /> */}

      
    </div>
  );
}

export default App;

// <<======>> CONNECTING ENDPOINT(SERVER) & WALLETS <<======>>

const Context: FC <{children : ReactNode}> = ({children}) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  // const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const endpoint = 'localhost:8899'; // local cluster

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
      () => [
          // new SolanaMobileWalletAdapter({
          //     appIdentity: { name: 'Solana Wallet Adapter App' },
          //     authorizationResultCache: createDefaultAuthorizationResultCache(),
          // }),
          new CoinbaseWalletAdapter(),
          new PhantomWalletAdapter(),
          new GlowWalletAdapter(),
          new SlopeWalletAdapter(),
          // new SolflareWalletAdapter({ network }),
          new TorusWalletAdapter(),
      ],
      // [network]
      []
  );

// INTEGRATING CONNECTION AND WALLER PROVIDER 

  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider > 
                  {children}

                  {/* <WalletMultiButton /> */}
                  {/* <WalletDisconnectButton /> */}
                  { /* Your app's components go here, nested within the context providers. */ }
              
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
};

const Content: FC = () => {

    const wallet = useWallet()    

    useEffect(() => {
      console.log(wallet.publicKey?.toString()) // ? mark is like if else agar publickey nahi hai tou khaali chorh do.
    }, [wallet])

        return(
          <div className='App'>
            {/* <WalletMultiButton /> */}
            
          </div>
        )
  
}
