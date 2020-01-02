import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Events() {
  const [events, setEvents] = useState()

  function getEvents() {
    axios
      .get('https://www.eventbriteapi.com/v3/users/me/events/', {
        headers: { Authorization: 'Bearer SFDAFKL24VDT6JW7CP5C' }
      })
      .then(res => {
        setEvents(res.data.events[0])
        // console.log(res.data.events[0])
      })
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div>
      <h2>T(ech startups) in the pub</h2>
      <p>Monthly Meet Up</p>
      <p>Organised by Jenny Judova and Oliver Krauss</p>
      {events && (
        <div>
          <img src={events.logo.original.url} alt="event image" width="600px" />
          <p>{events.description.text}</p>
          <ul className="actions">
            <li>
              <a href={events.url} className="button">
                See more details
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
