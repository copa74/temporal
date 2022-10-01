import React from 'react'

class RoadMap extends React.Component {
    state = {
      slideSpot: "one",
    };
  

    onClickSliderbutton = (e) =>    {
       let value = e.currentTarget.attributes.value.value;
       this.setState({slideSpot : value});
    }

  
    render() {
      const { slideSpot } = this.state;
  
      return (
        <div className="slider_box">
            <div className={'overflow_box '  +  slideSpot  } >
                <div className='roadmap_content'>  
                    <div className='incomplete' >incomplete</div>
                 </div>

                <div className='roadmap_content'>
                    <div className='incomplete on' >finished</div>
                </div>

                <div className='roadmap_content'>
                    <div className='incomplete on' >finished</div>
                </div>

                <div className='roadmap_content'>
                    <div className='incomplete on' >finished</div>
                </div>

                <div className='roadmap_content'>
                    <div className='incomplete on' >finished</div>
                </div>
            </div>

            <div className='slider_button_box' >
                <div  value = {"one"} onClick={this.onClickSliderbutton}  className={'slider_button' + ( slideSpot == "one" ? " on" : "" ) } ></div>
                <div  value = {"two"} onClick={this.onClickSliderbutton} className={'slider_button' + ( slideSpot == "two" ? " on" : "" ) } ></div>
                <div  value = {"three"} onClick={this.onClickSliderbutton} className={'slider_button' + ( slideSpot == "three" ? " on" : "" ) } ></div>
            </div>
        </div> 
        );
    }
  }
  

  export default RoadMap;