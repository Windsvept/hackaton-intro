import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>Here are some samples of what I've worked on</p>'
    <a href="https://github.com/Windsvept">Github</a>
    <a href="https://www.linkedin.com/in/junsubchoi/">LinkedIn</a>
    <a href="https://github.com/yelpreactor/header-map">FEC (Front End Capstone) github Repo</a>
    <a href="https://github.com/Hackazon-System-Design-Captstone/review-filter">SDC (System Design Capstone) github Repo</a>
    <a href="https://somni-vindicta.herokuapp.com/">Full Stack 2D game</a>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
