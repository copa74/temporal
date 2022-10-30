import { useState, useEffect , Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import $ from "jquery";
// import  About from  './About.jsx'

function Header(props) {
  const [dropMenu, setDropMenu] = useState(false);
  const [menuBar, setmenubar] = useState(true);
  const [openSubMenu, setopenSubMenu] = useState(false);
  const [openNetworkSelect, setopenNetworkSelect] = useState(false);

  const { connectWallet, isConnected, isSupported, walletAddress } = props;

  const NetworkSelectOpen = () => {
    setopenNetworkSelect(true);
  }

  const NetworkSelectClose = () => {
    setopenNetworkSelect(false);
  }



  const subWalletOpen = () => {
    setopenSubMenu(true);
  }

  const subWalletClose = () => {
    setopenSubMenu(false);
  }

  const onScroll = (e) => {
    let value = e.currentTarget.attributes.value.value;

    if (value == "game")
      window.scrollTo({ left: 0, top: 900, behavior: "smooth" });

    if (value == "roadmap")
      window.scrollTo({ left: 0, top: 8300, behavior: "smooth" });
  };

  const onMouseover = () => {
    setDropMenu(true);
  };

  const onMouseout = () => {
    setDropMenu(false);
  };

  const onMenuBarDown = () => {
    setmenubar(true);
  };

  useEffect(() => {
    $(window).scroll(function () {
      var scrollValue = $(document).scrollTop();
      if (scrollValue >= 1500) {
        setmenubar(false);
      } else {
        setmenubar(true);
      }
    });
  });

  return (
    <div className={"header" + (!menuBar ? " on" : "")}>
      <div className="header_box">
        <BrowserRouter>
          <div className="logo"></div>
          <div className="top_text_box">Home</div>
          <Link to="/Docs" target="_blank">
            <div className="top_text_box" value={"Docs"}>
              Docs
            </div>
          </Link>
          <div
            className="top_text_box"
            onMouseOver={onMouseover}
            onMouseOut={onMouseout}
          >
            Community
            <div className={"drop_menu" + (dropMenu ? " on" : "")}>
              <div className="drop_menu_text">Telegram</div>
              <div className="drop_menu_text">Twitter</div>
              <div className="drop_menu_text">Discord</div>
            </div>
          </div>
          <div className="top_text_box" value={"game"} onClick={onScroll}>
            Game
          </div>
          <div className="header_wallet_box"  >
            <div className="select_wallet" onMouseOver={NetworkSelectOpen}  onMouseLeave={NetworkSelectClose}>
              {openNetworkSelect && (
                <div className="select_wallet_network">
                  <div className="select_wallet_network_one"><div className="select_wallet_network_img bi" ></div></div>
                  <div className="select_wallet_network_one"><div className="select_wallet_network_img po" ></div></div>
                  <div className="select_wallet_network_one"><div className="select_wallet_network_img et" ></div></div>
                </div>
              )}
            </div>
            {isConnected ? (
              <>
                {isSupported ? (
                  <Fragment>

                  {/* /**
                   * 지갑연결 성공 시, 사용자 지갑 주소 보여지는 DIV
                   */ }
                    <div className="connect_wallet"  onMouseOver={subWalletOpen}  onMouseLeave={subWalletClose} >
                      {walletAddress?.substring(0, 7) +
                        "..." +
                        walletAddress?.substring(37)}

                      {openSubMenu && (
                        <div  className="wallet_sub_menu" >
                          <div className="wallet_sub_menu_one"> <div className="white_circle" ></div> <span className="sub_menu_span" >See on explorer</span>   </div>
                          <div className="wallet_sub_menu_one"> <div className="white_circle"></div> <span  className="sub_menu_span">Logout</span>  </div>
                        </div>
                      )}
                    </div>  



                  </Fragment>
                ) : (
                  /* 지원하는 네트워크가 아니면 보이는 div
                   * CSS 수정 요청
                  */
                  <div className="connect_wallet">
                    Wrong MetaMask Network
                </div>
                )}
              </>
            ) : (
              <div className="connect_wallet" onClick={connectWallet}>
                Connect Wallet
              </div>
            )}

            <Fragment>
              { props.networkAlarm == "off" && (
                <div className="network_alarm" >
                  <div className="network_alarm_title">Wallet</div>
                  <div className="network_alarm_text">Wrong network, pleases connet to a compatible one</div>
                </div>
               )}
                      { props.networkAlarm == "on" && (
                        <div className="network_alarm" >
                          <div className="network_alarm_title">Wallet</div>
                          <div className="network_alarm_text">Account connected</div>
                        </div>
                      )}
           </Fragment>
          </div>
        </BrowserRouter>
      </div>
      <div className="header_bottom" onMouseMove={onMenuBarDown}></div>
    </div>
  );
}

export default Header;
