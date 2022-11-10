import { useState , useEffect  } from 'react'
import $ from "jquery";

function Qmenu() {
    const [scrollChanger, setScrollChanger] = useState(true)

    useEffect(() => {
        $(window).scroll(function () {
          var scrollValue = $(document).scrollTop();
          if (  scrollValue >= 4500 ) {
            setScrollChanger(true);
          } else {
            setScrollChanger(false);
          }
        });
      });

    const  onScrollTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      }

    const onScrollDown = () => {
        window.scrollTo({ left: 0, top: 9000, behavior: "smooth" });
      }


    return (
        <div className="qmenu" >
            {scrollChanger && (
                 <div onClick={onScrollTop} >  
                  <span  style={{ fontSize : "27px", cursor: "pointer" }} className="material-symbols-rounded">
                    arrow_upward
                  </span>
                 </div>
            )}
            <div className="qmenu_img telegram"></div>
            <div className="qmenu_img discord"></div>
            <div className="qmenu_img twitter"></div>
            <div className="qmenu_img instagram"></div>
            {!scrollChanger && (
                 <div onClick={onScrollDown} >
                  <span style={{ fontSize : "27px" , marginTop: "27px" , cursor: "pointer" }} className="material-symbols-rounded">
                    arrow_downward
                  </span>
                 </div>
            )}
        </div>
    )
  }
  
  export default Qmenu