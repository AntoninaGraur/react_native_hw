import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const FotoSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Circle cx={30} cy={30} r={30} fill="#fff" />
  </Svg>
);
export default FotoSvg;
