import { useState , useEffect } from 'react'
import $ from "jquery";


function TokenBox() {

  const makeCircle = () => {
      const chartData = [20, 20, 20, 15 , 15 , 5 , 5]; // 차트 데이터
      const pieR = 162.5; // R값
      const formula = (2 * 3.1415926536 * pieR);
      let rotateFormula = 0;

      for ( let  i = 0; i < chartData.length; i ++ ) {
        let idx = i + 1;
        document.querySelector(`.pie_circle.pie_circle${idx}`).setAttribute('stroke-dashoffset', formula - (formula * (chartData[i]/100))); // stroke-dashoffset svg가 나타낼 지점 정하기
        document.querySelector(`.pie_circle.pie_circle${idx}`).setAttribute('stroke-dasharray', formula); // stroke-dasharray는 선을 대쉬 형태로 만든다. (값을 부여한 만큼 대쉬길이가 늘어남)
        document.querySelector(`.pie_circle.pie_circle${idx}`).setAttribute('stroke-linecap', 'round'); 
        
        if (i !== 0) rotateFormula += chartData[i - 1];
        document.querySelector(`.pie_circle.pie_circle${idx}`).style.transform = `rotate(${3.6 * rotateFormula}deg)`;
      }

  }


  useEffect(() => {
    $(window).scroll(function () {
      var scrollValue = $(document).scrollTop();
      if (scrollValue >= 3400) {
        makeCircle();
      } 
    });
  });



  return (
      <div className="chart_pie_wrap">
        <svg className="chart_pie" width="450" height="450">
          <circle className="pie_circle pie_circle1" cx="225" cy="225" r="162.5"></circle>
          <circle className="pie_circle pie_circle2" cx="225" cy="225" r="162.5"></circle>
          <circle className="pie_circle pie_circle3" cx="225" cy="225" r="162.5"></circle>
          <circle className="pie_circle pie_circle4" cx="225" cy="225" r="162.5"></circle>
          <circle className="pie_circle pie_circle5" cx="225" cy="225" r="162.5"></circle>
          <circle className="pie_circle pie_circle6" cx="225" cy="225" r="162.5"></circle>
          <circle className="pie_circle pie_circle7" cx="225" cy="225" r="162.5"></circle>
          <circle className="pie_circle pie_bg" cx="225" cy="225" r="162.5"></circle>
        </svg>
      </div>
  );
}

export default TokenBox;
