import { ResponsivePie } from '@nivo/pie'

function ToTo() {

    const data = [
        {
          "id": "Team",
          "label": "Team",
          "value": 0.2,
          "color": "rgb(0, 43, 91)"
        },
        {
          "id": "Bank Liquidity",
          "label": "Bank Liquidity",
          "value": 0.2,
          "color": "#2B4865"
        },
        {
          "id": "Treasury",
          "label": "Treasury",
          "value": 0.2,
          "color": "#256D85"
        },
        {
          "id": "Community",
          "label": "Community",
          "value": 0.15,
          "color": "#8FE3CF"
        },
        {
          "id": "Marketing",
          "label": "Marketing",
          "value": 0.1,
          "color": "#808a9f"
        },
        {
          "id": "Private Sale",
          "label": "Private Sale",
          "value": 0.05,
          "color": "#bad29f"
        },
        {
          "id": "Strategic Sale",
          "label": "Strategic Sale",
          "value": 0.05,
          "color": "#ccf5ac"
        },
        {
          "id": "Advisors & Partners",
          "label": "Advisors & Partners",
          "value": 0.05,
          "color": "#3d2b56"
        }
      ];



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
        colors={{ scheme: 'purple_orange' }}
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
        tooltip={({ datum: { id, value, color } }) => (
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
                  fontWeight: '600',
                  marginBottom:'3px',
                  fontSize:'15px'
                }} >
                {value * 100  + '%'} {id}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#999'
                 }}>
                Look, I'm custom :)
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
