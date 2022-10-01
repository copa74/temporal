import { useState } from 'react'
import  { BrowserRouter , Routes , Route , Link } from "react-router-dom";
import  About from  './About.jsx'

function Header() {
  const [dropMenu, setDropMenu] = useState(false)

  const onScroll = (e) => {
    let value =  e.currentTarget.attributes.value.value;

    if ( value == "game" )
      window.scrollTo({ left: 0, top: 1900, behavior: "smooth" });

    if (value == "roadmap")
      window.scrollTo({ left: 0, top: 8300, behavior: "smooth" });

  }

  const onMouseover = () => {
    setDropMenu(true);
  }

  const onMouseout = () => {
    setDropMenu(false);
  }



  return (
    <div className="header">
      < BrowserRouter >
        <div className='logo' ></div>
        <Link to="/about" target='_blank' >
          <div className='top_text_box' value = {"about"}  >   About</div> 
        </Link>
        <div className='top_text_box' value={"game"} onClick={onScroll}  >Game</div>
        <div className='top_text_box' onMouseOver = {onMouseover} onMouseOut = {onMouseout} >
          Community
          <div className={'drop_menu' + (dropMenu ? " on" : "") }>
            <div className='drop_menu_text' >Telegram</div>
            <div className='drop_menu_text' >Twitter</div>
            <div className='drop_menu_text' >Discord</div>
          </div>
        </div>
        <div className='top_text_box' value={"roadmap"} onClick={onScroll}  >Roadmap</div>
        <Link to="/Docs" target='_blank' >
          <div className='top_text_box' value = {"Docs"}  >   Docs</div> 
        </Link>
        <div className='header_wallet_box' >
          <div className='select_wallet' ></div>
          <div className='connect_wallet'>Connect Wallet</div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Header
