import { useState , useEffect } from 'react'
import $ from "jquery";


function TokenBox() {

  const makeCircle = () => {
      const chartData = [50, 20, 25, 5]; // 차트 데이터
      const pieR = 65; // R값
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
      console.log(window.screenY);
    });
  });



  return (
      <div className="chart_pie_wrap">
        <svg className="chart_pie" width="180" height="180">
          <circle className="pie_circle pie_circle1" cx="90" cy="90" r="65"></circle>
          <circle className="pie_circle pie_circle2" cx="90" cy="90" r="65"></circle>
          <circle className="pie_circle pie_circle3" cx="90" cy="90" r="65"></circle>
          <circle className="pie_circle pie_circle4" cx="90" cy="90" r="65"></circle>
          <circle className="pie_circle pie_bg" cx="90" cy="90" r="65"></circle>
        </svg>
      </div>
  );
}

export default TokenBox;
