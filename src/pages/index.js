import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Designer</h1>
          <h2>Develop & Deploy</h2>
          <p>UX Designer & web-developer based in Stockholm</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Page
          </Link>
        </div>
        <Img fluid={data.file.childrenImageSharp[0].fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetBannerImage {
    file(relativePath: { eq: "banner.png" }) {
      childrenImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
