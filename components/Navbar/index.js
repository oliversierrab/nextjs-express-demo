import React, { Component } from 'react'
import Link from 'next/link';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render () {
    return (
      <nav>
        <div>
          <Link href='/about'>
            <a title='About NextJS'>About Next</a>
          </Link>
          <Link href='/'>
            <a title='API'>API</a>
          </Link>
        </div>
        <style jsx>{`
          a {
            padding: 10px;
            text-decoration: none;
            color: green;
          }
        `}
        </style>
      </nav>
    )
  }
}

export default Navbar;
