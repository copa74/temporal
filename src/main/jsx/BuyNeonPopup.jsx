import { Fragment } from "react"
import { useState } from 'react'


function BuyNeonPopup(props) {
    const [selectValue, setSelect] = useState("USDT");
    const [selectOpen, setOpen] = useState(false);

    const onOpenSelecter = () => {
        setOpen(true);
    }

    const onCloseSelecter = () => {
        setOpen(false);
    }

    const onChangeSelectValue = (e) =>{
        let value = e.currentTarget.attributes.value.value;
        setSelect(value);
    }

    return  <Fragment>
      <div className="popup_layer" >
        <div className="dim" ></div>
        <div className="neon_buy_popup" >
            <div style={{ textAlign : "right" , color: "white" }}  onClick={props.onToggleBuyNeonPopup} >닫기</div>
            <div className="terms" > text </div>

            <div className="buy_text_box" >
                
                <div className="relative" >
                    <div className="neon_selecter" onMouseOver={onOpenSelecter} onMouseOut={onCloseSelecter} >
                        {selectValue} 
                        <div className={"neon_selecter_box" + ( selectOpen ? " on" : ""  ) }  >
                            <div className="neon_selecter_box_text" value={"USDT"} onClick={onChangeSelectValue} >USDT</div>
                            <div className="neon_selecter_box_text" value={"USDC"}  onClick={onChangeSelectValue} >USDC</div>
                        </div>
                    </div>    
                </div>
                <input className="but_input" ></input>

            </div> 
        </div>
    </div>
    </Fragment>
}

export default BuyNeonPopup