import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import './index.css'

import 'bootstrap/dist/css/bootstrap.css';
import Img from "gatsby-image";

import appletouch from '../static/apple-touch-icon.png'
import favico32 from '../static/favicon-32x32.png'
import favico16 from '../static/favicon-16x16.png'
import favico from '../static/favicon.ico'
import safaritab from '../static/safari-pinned-tab.svg'

const Layout = ({ children, data }) => (
  <div style={{ minHeight: '100%', position: 'relative' }} className="body">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    >
      <link rel="apple-touch-icon" sizes="180x180" href={appletouch}/>
      <link rel="icon" type="image/png" sizes="32x32" href={favico32}/>
      <link rel="icon" type="image/png" sizes="16x16" href={favico16}/>
      <link rel="manifest" href="/static/site.webmanifest"/>
      <link rel="mask-icon" href={safaritab} color="#5bbad5"/>
      <link rel="shortcut icon" href={favico}/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="msapplication-config" content="/static/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
    <Header />

    <div className="content">
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query FrontPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
