import React, { Component } from 'react'

class Gallery extends Component {
  renderGallery() {
    const projects = require('../../projects.json')
    if (!projects) return

    const gallery = projects.map(obj => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={obj.id}>
          <a href={obj.website} className="image fit thumb">
            <img src={obj.thumbnail} alt="project-homepage" />
          </a>
          <a href={obj.website}>
            <h3>{obj.caption}</h3>
          </a>
          <h5>{obj.duration}</h5>
          <h5>{obj.type}</h5>
          <p>{obj.description}</p>
        </article>
      )
    })
    return <div className="row">{gallery}</div>
  }

  render() {
    const { projects } = this.props
    return (
      <div>
        <h2>PORTFOLIO</h2>
        {this.renderGallery(projects)}
      </div>
    )
  }
}

export default Gallery
