import { useState , useEffect  } from 'react'
import  { BrowserRouter , Routes , Route , Link } from "react-router-dom";
import $ from "jquery";
// import  About from  './About.jsx'

function Header() {
  const [dropMenu, setDropMenu] = useState(false)
  const [menuBar, setmenubar] = useState(true)

  const onScroll = (e) => {
    let value =  e.currentTarget.attributes.value.value;

    if ( value == "game" )
      window.scrollTo({ left: 0, top: 900, behavior: "smooth" });

    if (value == "roadmap")
      window.scrollTo({ left: 0, top: 8300, behavior: "smooth" });

  }

  const onMouseover = () => {
    setDropMenu(true);
  }

  const onMouseout = () => {
    setDropMenu(false);
  }

  const onMenuBarDown = () =>{
    setmenubar(true);
  }

  useEffect(() => {
    $(window).scroll(function () {
      var scrollValue = $(document).scrollTop();
      if (  scrollValue >= 1500 ) {
        setmenubar(false);
      } else {
        setmenubar(true);
      }
    });
  });

  return (
    <div className={"header" + ( !menuBar ? " on" : "" ) }>
      <div className="header_box">
        < BrowserRouter >
          <div className='logo' ></div>
          <div className='top_text_box' >Home</div>
          <Link to="/Docs" target='_blank' >
            <div className='top_text_box' value = {"Docs"}  >Docs</div> 
          </Link>
          <div className='top_text_box' onMouseOver = {onMouseover} onMouseOut = {onMouseout} >
            Community
            <div className={'drop_menu' + (dropMenu ? " on" : "") }>
              <div className='drop_menu_text' >Telegram</div>
              <div className='drop_menu_text' >Twitter</div>
              <div className='drop_menu_text' >Discord</div>
            </div>
          </div>
          <div className='top_text_box' value={"game"} onClick={onScroll}  >Game</div>
          <div className='header_wallet_box' >
            <div className='select_wallet' ></div>
            <div className='connect_wallet'>Connect Wallet</div>
          </div>
        </BrowserRouter>
      </div>
      <div className='header_bottom'  onMouseMove={onMenuBarDown} ></div>
    </div>
  )
}

export default Header
