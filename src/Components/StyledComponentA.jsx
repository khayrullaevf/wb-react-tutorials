

import  { Component } from 'react'

import { Container,Box} from './StyledComponentAstyle';

export class StyledComponentA extends Component {
  render() {

    return (
      <Container>
        <Box type='large'>Large</Box>
        <Box type='medium'>Medium</Box>
        <Box type='small'>Small</Box>
        <Box>Default</Box>
      </Container>
    );
  }
}

export default StyledComponentA