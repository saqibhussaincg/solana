import React from 'react';
import '../Header/header.css';

import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
        <header>
          <div className='container header__container'>
          <h1>Welcome To Solana Wallet</h1>
          <WalletMultiButton/>
          </div>
        </header>
  )
}

export default Header
