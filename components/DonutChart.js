import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Circle, G, Text as SvgText, Path } from 'react-native-svg';

const DonutChart = ({ data, centerLabel }) => {
  const containerSize = 300; // Fixed container size
  const radius = containerSize * 0.25; // Adjust this to change the size of the outer circle
  const strokeWidth = containerSize * 0.1; // Adjust this to change the thickness of the donut
  const innerRadius = radius - strokeWidth * 0.7; // Adjust this to change the size of the inner circle
  const totalAmount = data.reduce((acc, curr) => acc + curr.number, 0); // Total amount of nutrients

  let cumulativePercent = 0;

  return (
    <Svg width={containerSize} height={containerSize}>
      <G transform={{ translate: `${containerSize / 2}, ${containerSize / 2}` }}>
        {data.map((item, index) => {
          const percent = (item.number / totalAmount) * 100; // Calculate percentage based on actual nutrient value
          const startAngle = 2 * Math.PI * cumulativePercent / 100;
          const endAngle = 2 * Math.PI * (cumulativePercent + percent) / 100;
          const largeArcFlag = percent > 50 ? 1 : 0;

          const x1 = radius * Math.cos(startAngle);
          const y1 = radius * Math.sin(startAngle);
          const x2 = radius * Math.cos(endAngle);
          const y2 = radius * Math.sin(endAngle);

          cumulativePercent += percent;

          return (
            <G key={index}>
              <Path
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`}
                stroke={item.color}
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <SvgText
                x={radius * 0.85 * Math.cos((startAngle + endAngle) / 2)}
                y={radius * 0.85 * Math.sin((startAngle + endAngle) / 2)}
                textAnchor="middle"
                fontSize="12" // Adjust font size if needed
              >
                {item.name}
              </SvgText>
            </G>
          );
        })}
        <Circle cx="0" cy="0" r={innerRadius} fill="white" />
        {/* Display center label */}
        <SvgText
          x="0"
          y="8"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
        >
          {centerLabel}
        </SvgText>
      </G>
    </Svg>
  );
};

export default DonutChart;
