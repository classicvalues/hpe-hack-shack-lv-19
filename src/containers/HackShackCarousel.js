/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React , { Component }from 'react';
import { Grommet, Carousel, Box } from 'grommet';
import theme from './theme';
import Leaderboard from './Leaderboard.js';
import { StyledCard } from '../components/Shared/style';

export default class HackShackCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoaded: true })
  }
  render() {
    const { isLoaded } = this.state; 
    return (
      <Box align="center">
        { isLoaded && (
          <Grommet full theme={theme} style={{ maxHeight: '100vh', overflow: 'hidden' }}>
            <Carousel play={10000}>
              <Leaderboard />
              <Box align="center" background="dark-1">
                <StyledCard src="../img/hpedevcard.png" />
              </Box>
              <Box align="center" background="accent-6">
                <StyledCard src="./img/gremlincard.png" />
              </Box>
            </Carousel>
          </Grommet>
        )}
      </Box>
    );
  }
}
