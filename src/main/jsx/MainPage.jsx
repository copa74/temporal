import { useState } from 'react'
import  ToTo  from './ToTo.jsx';
import  RoadMap  from './RoadMap.jsx';
import  BuyNeonPopup  from './BuyNeonPopup.jsx';
import  { BrowserRouter , Routes , Route , Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import metaMask from '../resources/svg/metaMask.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="left_arrow"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="right_arrow"
      onClick={onClick}
    />
  );
}

function MainPage() {
  const [buyneon, setbuyneon] = useState(false)
  const [gameSelect, setgameSelect] = useState(2);

  const onChangeGameSelect = (e) => {
    const value = e.currentTarget.attributes.value.value;
    setgameSelect(value);
  }

  const onLeftGameSelect = (e) => {
    if (gameSelect != 1 ) {
     let value = gameSelect;
     value--;
     setgameSelect(value);
    } else {
      setgameSelect(4);
    }
  }

  const onRightGameSelect = (e) => {
    if (gameSelect != 4 ) {
     let value = gameSelect;
     value++;
     setgameSelect(value);
    } else {
      setgameSelect(1);
    }
  }

  const onToggleBuyNeonPopup = () =>{
    setbuyneon(!buyneon);
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerPadding: "30px",
    centerMode: true,
    nextArrow: < SamplePrevArrow/>,
    prevArrow: < SampleNextArrow/>
  };

  // width: 403px;
  // height: 402px;

  // const onMouseMoveImg = (e) => {
  //   const frame = document.getElementById("main");
  //   const card = document.getElementById("main_img");
  //   let { x, y, width, height } = card.getBoundingClientRect();

  //   const left = e.clientX - x;
  //   const top = e.clientY - y;
  //   const centerX = left - width / 2;
  //   const centerY = top - height / 2;
  //   const d = Math.sqrt(centerX**2 + centerY**2);
  //   card.style.transform = `
  //   rotate3d(
  //     ${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg
  //   )
  // `
  // }



  // const frame = document.getElementById("main");
  //let { x, y, width, height } = frame.getBoundingClientRect();




  return (
    <div className="main" id="main">
        <div className='main_img' id="main_img" onMouseMove={onMouseMoveImg}  ></div> 
        {/* onMouseLeave={onMouseLeaveImg}  */}

        <div className='main_text'> 
            <div className='main_text_one' >ALL-IN-ONE </div>
            <div className='main_text_two' >GAMBLING PLATFORM</div>
            <div className='main_text_three' >Creating safer gambling experience through NEOND</div>
            {/* <div className='main_text_three' > FOR GAMBLING</div> */}
            {/* <div style={{marginLeft : "220px"}} > FOR FAMBLING </div> */}
        </div>

        {/* <div className='subtext'> */}
            {/* <div>Creating safer gambling experience though</div> */}
            {/* <div className='subtext_neon' >NEOND</div> */}
        {/* </div> */}
        <div className='airdrop_box' >
            <div className='airdrop_text'> NFT Airdrop event</div>
            <div className='air_button on'  style={{ marginRight: "30px" }} >join community</div>
            <div className='air_button'>Docs</div>
        </div>


        <div className='casino' >
          <div className='casinogame_text' >Casino Games</div>
          <div className='casinogame_text_sub' >on-chain data games providing transparency,secuirty,and fairness,</div>
          <div className='casinogame_text_sub' >NEOND is a fully scalable alternative to centralized gambling.</div>


          
          <div className='casino_box' >
            {/* <div className='left_arrow' onClick={onLeftGameSelect} ></div> */}
            <Slider {...settings}>
                <div className={'game_box on' + ( gameSelect == 1 ? " on" : "" )} onClick={onChangeGameSelect} value={1}  >
                  <div className='game_box_img' >
                    {/* <div className='game_img' ></div> */}
                  </div>
                  <div className='cover_box' >
                    <div className='font-size55' >roulette</div>
                    <div>Dice game explanations blah Dice game</div>
                    <div>explanations blah Dice game explanations</div>
                    <div>blah Dice game explanations blah</div>
                  </div>
                </div>

                <div className={'game_box on'  + ( gameSelect == 2 ? " on" : "" )} onClick={onChangeGameSelect} value={2}   >
                  <div className='game_box_img' >
                    <div className='game_img' ></div>
                  </div>
                  <div className='cover_box' >
                    <div className='font-size55' >Dice</div>
                    <div>Dice game explanations blah Dice game</div>
                    <div>explanations blah Dice game explanations</div>
                    <div>blah Dice game explanations blah</div>
                  </div>
                </div>

                <div className={'game_box on' + ( gameSelect == 3 ? " on" : "" )} onClick={onChangeGameSelect} value={3}   >
                  <div className='game_box_img' >
                    {/* <div className='game_img' ></div> */}
                  </div>
                  <div className='cover_box' >
                    <div className='font-size55' >Lotto</div>
                    <div>Dice game explanations blah Dice game</div>
                    <div>explanations blah Dice game explanations</div>
                    <div>blah Dice game explanations blah</div>
                  </div>
                </div>

                <div className={'game_box on' + ( gameSelect == 4 ? " on" : "" )} onClick={onChangeGameSelect} value={4}   >
                  <div className='game_box_img' >
                    {/* <div className='game_img' ></div> */}
                  </div>
                  <div className='cover_box' >
                    <div className='font-size55' >Moon</div>
                    <div>Dice game explanations blah Dice game</div>
                    <div>explanations blah Dice game explanations</div>
                    <div>blah Dice game explanations blah</div>
                  </div>
                </div> 
            {/* </div> */}
            </Slider>
          </div>
        </div>

        <div className='game_result' >
          <div className='result_text' >NEON Token incentives for users</div>
          <div className='result_box' >
            {/* <div className='result_img' ></div> */}
          </div>
        </div>


        <div className='buyneon' >
          <div className='buyneon_box' >
            <div className='buy_text' >BUY $NEON</div>
            <div className='outter_box' >
              <div className='buy_box' >
                <div className='neon_buy_text' >
                  Private  
                  <div> Token Sales</div>
                </div>
                <span className='buy_neon' >NEON</span>

                <div className='price_box' >

                  <div className='neon_price' >
                    Price
                    <div className='neon_price_sub' >$0.2</div>
                  </div>
                
                    <div className='neon_price' >
                      Date
                      <div className='neon_price_sub'>16 November 2022</div>
                    </div>

                    <div className='neon_price' style={{ marginTop: "20px" }}  >
                      volume
                      <div className='neon_price_sub' >$100K ≈ 5,000,000 NEON</div>
                    </div>
                </div>
                <div className='buy_button' onClick={onToggleBuyNeonPopup}  >BUY</div>

              </div>
            </div>

            <div className='more_text_box' >
              <div className='more_text' >
                Learn more about NEON
              </div>
              <div className='whitepaper' >
                  Whitepaper
              </div>
              <div className='neon_border_bottom' ></div>
            </div>
          </div>
        </div>



{/* 




        <div className='center_text_box' >
          <div className='center_text' >
            Completely on-chain data games providing transparency, security, and
            fairness, NEOND is a fully scalable alternative to centralized gambling.
          </div>
        </div> */}



        <div className='tokenomics'>
            <div className='token_h1' >Token Allocation</div>
            <div className='token_box' >
              <ToTo />
            </div>

            <div className='enomics_box'>
              <div className='enomics' >TOKENOMICS</div>
              <div className='enomic_text'  >
                <span className='enomic_text_text'>Native Token</span> <div className='token_img neon'></div>
              </div>
              <div className='enomic_text' >
                <span className='enomic_text_text'>Playing Coins </span>  <div className='token_img usdt'></div> <div className='token_img neon'></div> 
              </div>
              <div className='enomic_text' >
                <span className='enomic_text_text'> Supported Assets for NEON SWAP  </span>
                  <div className='token_img matic' style={{ marginLeft : "52px" }} ></div>
                  <div className='token_img etc'></div>
                  <div className='token_img binance1'></div>
                  <div className='token_img dai'></div>
              </div>
            </div>

        </div>

        <div className='house' >
          <div className='house_text' >
            <div className='house_text_top'>House Always Win?</div>
            <div  className='house_text'>Become "the house" by holding NEOND NFT</div>
            <div  className='house_text'>NEON Edge(USDT) will be distributed to the NFT holders</div>
            <div className='house_button' >Get Free NFT</div>
          </div>

          <div className='house_box' >
            <div style={{ display:"inline-block" }} >
            <div  className='launch_event'>Launching Event: 10.10.2022 ~ 11.10.2022</div>
              {/* <div className='house_img' >  <div className='background_white' ></div>
                <span className='coming_soon' >COMING SOON</span>
              </div> */}
              <div className='house_img big' ></div>
              {/* <div className='house_img' > <div className='background_white' ></div> 
              <span className='coming_soon' >COMING SOON</span>
              </div> */}
              <div>NEOND MEMBER</div>
              <div>price: xx NEON</div>
              <div>APY: 0.5%</div>
            </div>
          
          </div>
        </div>

 


        <div className='NFT_gambling' >
          <div className='NFT_img' ></div>
          <div className='nft_text_box' >
            <div className='nft_text'> One-stop liquuduty NFT-Fi</div>
            <br />
            <li>
              <div className='NFT__img_text' >NEOND NFT Pawnshop</div>
              <br />
              <div className='NFT__img_text' style={{marginLeft: "21px"}} >Collateralize your bluechip NFTs and borrow USDT</div>
            </li>
            <br />
            <li>
              <div className='NFT__img_text' >NFT price feed Searched by DAI and</div>
              <br />
              <div className='NFT__img_text' style={{marginLeft: "21px"}} >80% of the NFT price will be given as a loan</div>
            </li>
          </div>
        </div>


 
      
        <div className='roadmap' >
          <div className='roadmap_top' >
            <div className='roadmap_text' >Roadmap   <span>2022</span>  </div>
          </div>

          <div className='roadmap_img' ></div>
        </div>

        <RoadMap />



        <div className='footer' >
          <div className='footer_img' ></div>

          <div className='power'>
          <div className='power_text' >Powered by</div>
          <div className='power_box' >
            <div className='metamask'> </div>
            {/* <img src={metaMask}></img> */}
            {/* <div className='metamask' ></div> */}
            <div className='polygon' ></div>
            <div className='chainlink' ></div>
          </div> 
        </div>


          <div className='footer_bottom' >
            <div className='copyright'>
              <div>COPYRIGHT ©</div> 
              <div>NEOND. ALL RIGHTS RESERVED</div>
            </div>
            <div className='team' >
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
            </div>
          </div>
        </div>

      { buyneon && (
        <BuyNeonPopup onToggleBuyNeonPopup = {onToggleBuyNeonPopup} />
      )}
    </div>
  )
}

export default MainPage
