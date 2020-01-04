require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Strata by HTML5 UP',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Strata by HTML5 UP'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // new webpack.EnvironmentPlugin(['REACT_APP_WEATHER_ACCESS_KEY']),
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-twitter', //http://localhost:8000/_graphql
      options: {
        credentials: {
          consumer_key: process.env.GATSBY_TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.GATSBY_TWITTER_CONSUMER_SECRET,
          bearer_token: process.env.GATSBY_TWITTER_BREARER_TOKEN
        },
        queries: {
          HackersQuery: {
            endpoint: 'statuses/user_timeline',
            params: {
              screen_name: 'jennyjudova',
              include_rts: false,
              exclude_replies: true,
              tweet_mode: 'extended',
              count: 5
            }
          }
        }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
}
