import React from 'react'

import Footer from './Footer'
import Icons from './Icons'
import avatar from '../assets/images/jj-sm-sq.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <img className="image avatar" src={avatar} alt="" />
          <h1>JENNY JUDOVA</h1>
          <h3>Front End Engineer.</h3>
          <Icons />
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
