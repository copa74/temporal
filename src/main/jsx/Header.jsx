import { useState } from 'react'

function Header() {

  return (
    <div className="header">
      <div className='logo' ></div>
      <div className='top_text_box' >About</div>
      <div className='top_text_box' >Game</div>
      <div className='top_text_box' >Community</div>
      <div className='top_text_box' >Roadmap</div>
      <div className='top_text_box' >Docs</div>
      <div className='header_wallet_box' >
        <div className='select_wallet' ></div>
        <div className='connect_wallet'>Connect Wallet</div>
      </div>
    </div>
  )
}

export default Header
