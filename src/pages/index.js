import React from 'react'
import Layout from 'components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from 'sections/hero/Hero.js'
import AboutTwo from 'sections/about/AboutTwo.js'
import ServicesTwo from 'sections/services/ServicesTwo.js'
import PortfolioThree from 'sections/portfolio/PortfolioThree.js'
import TestimonialsThree from 'sections/testimonials/TestimonialsThree.js'

class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout
          isHome={true}
          sections={['SHOP', 'About', 'FAQ']}
        >
          <Hero />
          <TestimonialsThree />
          <PortfolioThree />
          <AboutTwo />
          <ServicesTwo />
          </Layout>
      </div>
    )
  }
}

export default Index

export const creativeOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`