import { ResponsivePie } from '@nivo/pie'
import { Fragment } from 'react';

function ToTo() {

    const data = [
        {
          "id": "Team",
          "label": "Team",
          "value": 0.2,
          "color": "rgb(0, 43, 91,)",
          "toolt": "20,000,000"
        },
        {
          "id": "Bank Liquidity",
          "label": "Bank Liquidity",
          "value": 0.2,
          "color": "#2B4865",
          "toolt": "20,000,000"
        },
        {
          "id": "Treasury",
          "label": "Treasury",
          "value": 0.2,
          "color": "#256D85",
          "toolt": "20,000,000"
        },
        {
          "id": "Community",
          "label": "Community",
          "value": 0.15,
          "color": "#8FE3CF",
          "toolt": "15,000,000"
        },
        {
          "id": "Marketing",
          "label": "Marketing",
          "value": 0.1,
          "color": "#808a9f",
          "toolt": "10,000,000"
        },
        {
          "id": "Private Sale",
          "label": "Private Sale",
          "value": 0.05,
          "color": "#bad29f",
          "toolt": "5,000,000"
        },
        {
          "id": "Strategic Sale",
          "label": "Strategic Sale",
          "value": 0.05,
          "color": "#ccf5ac",
          "toolt": "5,000,000"
        },
        {
          "id": "Advisors & Partners",
          "label": "Advisors & Partners",
          "value": 0.05,
          "color": "#3d2b56",
          "toolt": "5,000,000"
        }
      ];

      const CenteredMetric = ({ dataWithArc, centerX, centerY , color }) => {
            let total = 0
            dataWithArc.forEach(datum => {
                total += datum.value
            })
            return (
              <Fragment>
                <text
                    x={centerX}
                    y={200}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className='total_supply'
                    style={{ fontSize : "80px !important" }}
                    color= {color}
                >
                  Total supply 
                </text>
                <text
                    x={centerX}
                    y={250}
                    textAnchor="middle"
                     dominantBaseline="central"
                     className='total_supply_num'
                >  100,000,000 </text>
              </Fragment>
            )
        }


      return (
        <ResponsivePie
        data={data}
        margin={{ top: 60, right: 80, bottom: 80, left: -200 }}
        valueFormat=" >-0,~%"
        startAngle={-61}
        innerRadius={0.8}
        padAngle={3}
        cornerRadius={45}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'set2' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabel={d => `${d.id} (${d.formattedValue})`}
        // activeInnerRadiusOffset={13}
        // activeInnerRadiusOffset={commonProperties.activeOuterRadiusOffset}
        layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric ] }
        arcLinkLabelsSkipAngle={9}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        tooltip={({ datum: { id, value,  toolt } }) => (
          <div
              style={{
                  padding: 15,
                  color: '#fff',
                  fontSize: '14px',
                  background: '#3a3a3c',
                  borderRadius: '10px'
              }}
          >
              <div 
                style={{
                  // fontWeight: '600',
                  marginBottom:'3px',
                  fontSize:'15px'
                }} >
                <span style={{ fontWeight : 600 }} > {value * 100  + '%'}  {id} </span>: {value * 100  + "," +  "000,000" }
              </div>
          </div>
      )}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: -105,
                translateY: 20,
                itemsSpacing: 1,
                itemWidth: 99,
                itemHeight: 50,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 25,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
    

}

export default ToTo
