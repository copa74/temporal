import { Fragment } from "react"
import { useState } from 'react'


function BuyNeonPopup(props) {
    const [selectValue, setSelect] = useState("USDT");
    const [selectOpen, setOpen] = useState(false);
    const [ USDTvalue, setUSDTvalue ] = useState(0);

    const onOpenSelecter = () => {
        setOpen(true);
    }

    const onCloseSelecter = () => {
        setOpen(false);
    }

    const onChangeSelectValue = (e) =>{
        let value = e.currentTarget.attributes.value.value;
        setSelect(value);
        onCloseSelecter();
    }

    const onChangeUsdt = (e) => {
       let value = e.target.value;
       setUSDTvalue(value);
    }

    return  <Fragment>
      <div className="popup_layer" >
        <div className="dim" ></div>
        <div className="neon_buy_popup" >
            <div  className="popUp_close" style={{ textAlign : "right" , color: "white" }}  onClick={props.onToggleBuyNeonPopup} >X</div>
            <div className="buy_text_box" >
                <div className="buy_title" > <div className="token_img neon on"></div>NEON Private sale</div>

                <div className="mainnet_box">
                    <div className="mainnet_img et" ></div><span>Ethereum Mainnet</span> 
                    <div className="tt" > <span className="tta" >{USDTvalue}</span> <span className="ttc" >{selectValue}</span> </div>
                </div>
                <div className="mainnet_box">
                    <div className="mainnet_img po" ></div><span> polygon Mainnet</span>
                    <div className="tt"> <span className="tta"> {  (USDTvalue * 5) == 0 ? ( "") : (USDTvalue * 5) }</span>  <span className="ttc">NEON</span> </div>
                </div>

                <div className="buy_amount_box" >
                    <div className="amount_text" >Investment Amount:</div>
                    <input  value={USDTvalue}  onChange={onChangeUsdt} className="buy_input"  />
                     <div className="neon_selecter" onMouseOver={onOpenSelecter} onMouseOut={onCloseSelecter} >
                        {selectValue} 
                        <div className={"neon_selecter_box" + ( selectOpen ? " on" : ""  ) }  >
                            <div className="neon_selecter_box_text" value={"USDT"} onClick={onChangeSelectValue} >USDT</div>
                            <div className="neon_selecter_box_text" value={"USDC"}  onClick={onChangeSelectValue} >USDC</div>
                        </div>
                    </div>   
                </div>
            
                <div className="buy_button_box" >
                    <div style={{ marginRight : "60px" }}  className="neon_buy_button" >Read me</div> 
                    <div className="neon_buy_button" >Buy</div> 
                </div>

            </div> 
        </div>
    </div>
    </Fragment>
}

export default BuyNeonPopup