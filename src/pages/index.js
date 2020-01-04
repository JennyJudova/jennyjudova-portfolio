import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Events from '../components/Events'
import TwitterQuery from '../components/TwitterWidget'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Hi, my name is Jenny Judova.</h2>
            </header>
            <p>
              I am a Front End Developer with an interest in startups, Fin-Tech,
              Cyber Security, and compliance. My previous role at TechHub
              exposed me to some of the best tech teams in London which sparked
              my curiosity in software engineering. This led me to teach myself
              Python before I took the plunge and joined GA’s software
              engineering cohort.
            </p>
            <p>
              I write about my experience of being a developer, software
              engineering and startups in London.
            </p>
            <p>I also run a Tech Startups in the Pub meetup.</p>
          </section>

          <section id="two">
            <Gallery />
          </section>

          <section id="three">
            <Events />
          </section>
          <section id="four">
            <TwitterQuery />
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

{
  /* <ul className="actions">
<li>
  <a href="#" className="button">
    Learn More
  </a>
</li>
</ul> */
}
