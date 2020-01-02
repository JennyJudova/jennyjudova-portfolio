import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <h2>STAY IN TOUCH</h2>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/jennyjudova?lang=en"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JennyJudova/"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jenny-judova/"
                className="icon fa-linkedin-square"
              >
                <span className="label">linkedin</span>
              </a>
            </li>
            <li>
              <a href="mailto:jjudova@gmail.com" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
