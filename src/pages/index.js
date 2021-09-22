import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
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
        <img
          src="/banner.png"
          alt="Sites banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  )
}
