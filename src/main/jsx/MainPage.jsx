import { useState } from 'react'

function Header() {

  return (
    <div className="main">
        <div className='main_text'> 
            <div>ALL-IN-ONE FAME-Fi</div>
            <div> PIATFORM FOR FAMBLING</div>
            {/* <div style={{marginLeft : "220px"}} > FOR FAMBLING </div> */}
        </div>

        <div className='subtext'>
            <div>Reinventing the</div>
            <div>gambling experience through</div>
            <div>NEOND</div>
        </div>
        <div className='airdrop_box' >
            <div className='airdrop_text'> NFT Airdrop event</div>
            <div className='air_button'>join community</div>
            <div className='air_button'>Docs</div>
        </div>
        <div className='main_img'></div>

        <div className='power'>
          <div className='power_text' >Powered by</div>
          <div className='power_box' >
            <div className='metamask' ></div>
            <div className='polygon' ></div>
            <div className='chainlink' ></div>
          </div> 
        </div>

        <div className='casinogame_text' >Casino Games</div>
        <div className='casino_box' >
          <div className='game_box'  >
            <div className='game_img' > </div>
            <div className='inline_block' >
              <div className='game_text' >Dice</div>
              <div className='soon' >soon</div>
            </div>
          </div>

          <div className='game_box'  >
            <div className='game_img' > </div>
            <div className='inline_block' >
              <div className='game_text' >Roulette</div>
              <div className='soon' >soon</div>
            </div>
          </div>

          <div className='game_box'  >
            <div className='game_img' > </div>
            <div className='inline_block' >
              <div className='game_text' >Lottery</div>
              <div className='soon' >soon</div>
            </div>
          </div>

          <div className='game_box'  >
            <div className='game_img' > </div>
            <div className='inline_block' >
              <div className='game_text' >To The Moon</div>
              <div className='soon' >soon</div>
            </div>
          </div>
        </div>  

        <div className='center_text' >
          Completely on-chain data games providing transparency, security, and
          fairness, NEOND is a fully scalable alternative to centralized gambling.
        </div>

        <div className='buyneon' >
          <div className='buy_text' >BUY $NEON</div>
          <div className='outter_box' >
            <div className='buy_box' >
              <div className='neon_buy_text' >
                Private <span className='buy_neon' >NEON</span> Token  <div className='igo' >IGO</div>
                <div style={{ marginTop: "2px" }} >Sales</div>
              </div>

              <div className='price_box' >

                <div className='neon_price' >
                  Price
                  <div className='neon_price_sub' >$0.0225</div>
                </div>
                
             
              
                  <div className='neon_price' >
                    Date
                    <div className='neon_price_sub'>16 November 2022</div>
                  </div>
                  
             
              </div>
              
            </div>
          </div>

        </div>

        <div className='more_text_box' >
          <div className='more_text' >
             Learn more about NEON
          </div>
          <div className='whitepaper' >
              whitepaper
          </div>
        </div>

        <div className='tokenomics'>
            <div className='enomics' >TOKENOMICS</div>

            <div className='enomic_text' >Native Token</div>
            <div className='enomic_text' >Playing Coins</div>
            <div className='enomic_text' >Supported Assets for NEON SWAP</div>

            <div className='token_h1' >Token Allocation</div>
            <div className='token_box' ></div>
        </div>

        <div className='house' >
          <div className='house_text_top' >"The house always win"</div>
          <div  className='house_text'>Become "the house" by holding NEOND NFT</div>
          <div  className='house_text'>NEON token will be distributed to the NFT holders</div>
          <div className='house_box' >
            <div className='house_img' ></div>
            <div className='house_img big' ></div>
            <div className='house_img' ></div>
          </div>
          <div className='text_center' >
            <div className='house_button' >Get Free NFT</div>
          </div>
        </div>

        <div className='game_result' >
          <div className='result_text' >NEON Token lncentives for users</div>
          <div className='result_box' ></div>
        </div>


        <div className='NFT_gambling' >
          <div className='nft_text' > One-stop liquuduty NFT-Fi for Gambling</div>
          <div className='NFT_box' >
            <div className='NFT_img' ></div>
            <div className='NFT__img_text' >NFT Price feed Searched by DAI and</div>
            <div className='NFT__img_text' >80% of the NFT price will be given as a loan</div>
          </div>
        </div>

      
        <div className='roadmap' >
          <div className='roadmap_top' >
            <div className='roadmap_text' >Roadmap   <span>2022</span>  </div>
          </div>

          <div className='roadmap_img' ></div>
        </div>

        <div className='footer' >
          <div className='footer_img' ></div>

        </div>

     

    </div>
  )
}

export default Header
