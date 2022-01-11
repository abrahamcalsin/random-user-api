import React from 'react'
import { GithubForkBanner } from 'react-github-fork-banner'

import RandomUser from './components/random-user'

function App() {
  return (
    <>
      <GithubForkBanner
        direction="right"
        size={92}
        animation="ears"
        customHref="https://github.com/abrahamcalsin/random-user-api"
        bannerColor="#183153"
        octoColor="#F7F9FE"
      />

      <div className="flex px-3 min-h-screen">
        <RandomUser />
      </div>
    </>
  )
}

export default App
