import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1)
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3)
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1)
  }
`;

const Skeleton = styled.div`
  padding: 0;
  margin: 0;
  width: ${ props => props.width || 'auto' };
  height: ${ props => props.height || 'auto' };
`
const SkeletonLine = styled.section`
  display: block;
  width: ${ props => props.width || '100%' };
  height: 1.3em;
  margin: 0.2em 0;
  border-radius: 3px;
  animation: ${pulse} 1s infinite ease-in-out;
`
const SkeletonImage = styled.section`
  display: block;
  width: ${ props => props.width || '12em' };
  height: ${ props => props.height || '18em' };
  margin: 0.2em auto;
  background: #f00;
  border-radius: 3px;
  animation: ${pulse} 1s infinite ease-in-out;
`
const SkeletonCaption = styled.section`
  display: block;
  background: #f00;
  margin: 0.2em auto;
  width: 6em;
  height: 0.8em;
  border-radius: 3px;
  animation: ${pulse} 1s infinite ease-in-out;
`

export default class SkeletonComponent extends Component {

  renderCaption(enabled) {
    if(enabled) {
      return (<SkeletonCaption />);
    } else {
      return null;
    }
  }

  render() {
    const {
      text,
      type,
      caption,
      width,
      height,
      size
    } = this.props

    const count = size || 5;

    switch(type) {
      case 'image':
        return (
          <Skeleton width={ width } height={ height }>
            <SkeletonImage width={ width } height={ height } />
            { this.renderCaption(caption) }
          </Skeleton>
        )
        break;

      case 'paragraph':
        return (
          <Skeleton>
            { Array(count - 1).fill().map(function() {
              return <SkeletonLine />;
            }) }
            <SkeletonLine width={ '80%' } />
          </Skeleton>
        )
        break;

      case 'sentance':
      default: 
        return (
          <Skeleton>
            <SkeletonLine />
          </Skeleton>
        )
    }
  }
}
