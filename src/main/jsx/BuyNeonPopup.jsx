import { Fragment } from "react"
import { useState } from 'react'


function BuyNeonPopup(props) {
    const [selectValue, setSelect] = useState("usdt");
    const [selectOpen, setOpen] = useState(false);


    return  <Fragment>
      <div className="popup_layer" >
        <div className="dim" ></div>
        <div className="neon_buy_popup" >
            <div style={{ textAlign : "right" , color: "white" }}  onClick={props.onToggleBuyNeonPopup} >닫기</div>
            <div className="terms" > text </div>

            <div>
                <input className="but_input" ></input>
                <div className="relative" >
                    <div className="noen_selecter" >{selectValue}</div>    
                    <div className="noen_selecter_box"  >
                        <div>usdt</div>
                        <div>usdc</div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    </Fragment>
}

export default BuyNeonPopup