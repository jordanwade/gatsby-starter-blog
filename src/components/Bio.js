import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.svg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Jordan Wade`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          I'm a Software Developer at DataCamp. I grew up in a small town in
          Indiana and started as a carpenter on an Amish construction crew. I
          traded in my tool belt for all things development and design. Now, I
          call the state of Tennessee my home.
        </p>
      </div>
    )
  }
}

export default Bio
