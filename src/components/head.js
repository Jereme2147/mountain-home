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
      <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
        {/* <meta charset="utf-8" /> */}

        <meta
          name="description"
          content="Roofing Contractor for Avery/Watauga County"
        ></meta>
        <meta description="Roofing Contractor for Avery/Watauga County" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@400;700&family=Montserrat:wght@200;400;700&family=Roboto:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    )
}

export default Head;