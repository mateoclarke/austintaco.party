import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import './index.css'

import 'bootstrap/dist/css/bootstrap.css';
import Img from "gatsby-image";

import favicon from '../static/favicon.ico'
import apple57 from '../static/apple-icon-57x57.png'
import apple60 from '../static/apple-icon-60x60.png'
import apple72 from '../static/apple-icon-72x72.png'
import apple76 from '../static/apple-icon-76x76.png'
import apple114 from '../static/apple-icon-114x114.png'
import apple120 from '../static/apple-icon-120x120.png'
import apple144 from '../static/apple-icon-144x144.png'
import apple152 from '../static/apple-icon-152x152.png'
import apple180 from '../static/apple-icon-180x180.png'
import android192 from '../static/android-icon-192x192.png'
import favicon32 from '../static/favicon-32x32.png'
import favicon96 from '../static/favicon-96x96.png'
import favicon16 from '../static/favicon-16x16.png'
import ms144 from '../static/ms-icon-144x144.png'

const Layout = ({ children, data }) => (
  <div style={{ minHeight: '100%', position: 'relative' }} className="body">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    >
      <link rel="apple-touch-icon" sizes="57x57" href={apple57} />
      <link rel="apple-touch-icon" sizes="60x60" href={apple60} />
      <link rel="apple-touch-icon" sizes="72x72" href={apple72} />
      <link rel="apple-touch-icon" sizes="76x76" href={apple76} />
      <link rel="apple-touch-icon" sizes="114x114" href={apple114} />
      <link rel="apple-touch-icon" sizes="120x120" href={apple120} />
      <link rel="apple-touch-icon" sizes="144x144" href={apple144} />
      <link rel="apple-touch-icon" sizes="152x152" href={apple152} />
      <link rel="apple-touch-icon" sizes="180x180" href={apple180} />
      <link rel="icon" type="image/png" sizes="192x192"  href={android192} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={ms144} />
      <meta name="theme-color" content="#ffffff" />
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
