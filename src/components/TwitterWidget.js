import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const TwitterWidget = ({ data }) => {
  console.log(data.allTwitterStatusesUserTimelineHackersQuery.nodes[0])
  console.log(data.twitterStatusesUserTimelineHackersQuery.user)
  const tweets = data.allTwitterStatusesUserTimelineHackersQuery.nodes
  const user = data.twitterStatusesUserTimelineHackersQuery.user

  return (
    <>
      <div className="widget twitter">
        <div className="twitter-header">
          <img
            src={user.profile_image_url_https}
            className="twitter-avatar"
            alt="twitter-avatar"
          />
          <div>
            <a href="https://twitter.com/JennyJudova" className="twitter-name">
              @{user.screen_name}
            </a>
          </div>
        </div>
        <div className="tweets">
          <p>{tweets[1].created_at}</p>
          <p>{tweets[1].full_text}</p>
          {/* <p>{tweets[1].entities.media[0].media_url_https}</p>
          <img
            src={tweets[1].entities.media[0].media_url_https}
            alt="tweet"
          ></img> */}
          {/* {tweets &&
            tweets.map(({ node }) => (
              <div className="tweet" key={node.id}>
                <p className="tweet-content">{node.full_text}</p>
                <div className="tweet-head">
                  {node.entities.urls.map(({ display_url }) => (
                    <a href={display_url} className="tweet-link" key="1">
                      {display_url}
                    </a>
                  ))}
                  <span className="date">
                    {node.created_at.split(' ', 3).join(' ')}
                  </span>
                </div>
              </div>
            ))} */}
        </div>
      </div>
    </>
  )
}

// TwitterWidget.propTypes = {
//   data: PropTypes.shape({
//     allTwitterStatusesUserTimelineHackersTweets: PropTypes.shape({
//       full_text: PropTypes.string,
//       favorite_count: PropTypes.number,
//       retweet_count: PropTypes.number,
//       created_at: PropTypes.string,
//       id: PropTypes.string,
//       user: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//         profile_image_url: PropTypes.string.isRequired,
//         screen_name: PropTypes.string.isRequired
//       }),
//       entities: PropTypes.shape({
//         urls: PropTypes.arrayOf(
//           PropTypes.shape({
//             url: PropTypes.string
//           })
//         )
//       })
//     }).isRequired,
//     twitterStatusesUserTimelineHackersTweets: PropTypes.shape({
//       user: PropTypes.shape({
//         profile_image_url_https: PropTypes.string,
//         name: PropTypes.string.isRequired,
//         url: PropTypes.string,
//         display_url: PropTypes.string,
//         screen_name: PropTypes.string.isRequired
//       }).isRequired
//     })
//   })
// }

const TwitterQuery = props => (
  <StaticQuery
    query={graphql`
      query TweetQuery {
        allTwitterStatusesUserTimelineHackersQuery {
          nodes {
            created_at
            full_text
            favorite_count
            retweet_count
            user {
              name
              url
              profile_image_url
              screen_name
            }
            entities {
              urls {
                display_url
                url
              }
              media {
                media_url_https
                url
              }
            }
          }
        }
        twitterStatusesUserTimelineHackersQuery {
          user {
            profile_image_url_https
            name
            url
            screen_name
          }
        }
      }
    `}
    render={data => <TwitterWidget data={data} {...props} />}
  />
)

export default TwitterQuery

{
  /* <p className="tweet-content">{node.full_text.split('#')[0].split('http')[0]}</p>
{node.entities.hashtags ? <div className="tweet-hastags">{node.entities.hashtags.map(({ text }) => (
  <a href={`https://twitter.com/hashtag/${text}`} key={text} className="hashtag">#{text}</a>
))}</div> : 0 } */
}

// {node.entities.hashtags.length > 0 ? (
//   <div className="tweet-hastags">
//     {node.entities.hashtags.map(({ text }) => (
//       <a
//         href={`https://twitter.com/hashtag/${text}`}
//         key={text}
//         className="hashtag"
//       >
//         #{text}
//       </a>
//     ))}
//   </div>
// ) : null}
