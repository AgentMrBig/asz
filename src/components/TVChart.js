import React from "react";
import { useEffect } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import styled from "styled-components";

function TVChart(props) {
  return (
    <Container>
      <TradingViewWidget
        height="368"
        width="1350"
        symbol={props.symbol}
        theme={Themes.DARK}
      />
    </Container>
  );
}

export default TVChart;

const Container = styled.div``;
