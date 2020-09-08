import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ( { title } ) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
      <Helmet title={`${title} | ${ data.site.siteMetadata.title}`} >
          {/* <meta charset="utf-8" /> */}
          <meta name="description" content="Roofing Contractor for Avery/Watauga County"></meta>
          <meta description="Roofing Contractor for Avery/Watauga County" />
    </Helmet>
    )
}

export default Head;