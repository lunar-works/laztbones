import React, { Component } from 'react'
import styled from 'styled-components'

import Skeleton from 'lazybones'

const Segment = styled.section`
	display: block;
	width: 100%;
	max-width: 600px;
	margin: 0 auto 2em;
`
const Profile = styled.div`
	display: flex;
	position: relative;

	.thumb {
		width: calc(30% - 1em);
		height: 6.5em;
		margin-right: 1em;
	}

	.details {
		flex: 1;
	}
`

export default class App extends Component {
  render () {
    return (
      <div style={ {'font-size': '1.4em'} }>
      	<header style={ {'font-size': '1.4em', 'max-width': '600px', 'margin': '0 auto 2em'} }>
      		<h1>Lazybones examples</h1>
      		<p>Examples of a few uses of lazybones. Single lines to images. More examples added as more features are added.</p>
      	</header>
      	<Segment>
      		<h2>Sentance</h2>
        	<Skeleton />
        </Segment>
      	<Segment>
      		<h2>Paragraph: 2 lines</h2>
        	<Skeleton type='paragraph' size={2} />
        </Segment>
      	<Segment>
      		<h2>Paragraph: 5 lines</h2>
        	<Skeleton type='paragraph' />
        </Segment>
      	<Segment>
      		<h2>Image</h2>
        	<Skeleton type='image' width={'100%'} height={'20em'}  />
        </Segment>
      	<Segment>
      		<h2>Gallery Image</h2>
        	<Skeleton type='image' caption={true} width={'20em'} height={'16em'}  />
        </Segment>
      	<Segment>
      		<h2>Custom</h2>
      		<Profile>
      			<div className="thumb">
		        	<Skeleton type='image' width={'100%'} height={'100%'} />
	        	</div>
      			<div className="details">
      				<Skeleton />
      				<br />
        			<Skeleton type='paragraph' size={2} />
      			</div>
        	</Profile>
        </Segment>
      </div>
    )
  }
}
