import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { Hero } from "../components/home/home";
import { Contact } from "../components/home/contact";
import { FeaturedCourses } from "../components/home/featured-courses";
import { LatestPosts } from "../components/home/latest-post";
import { Stats } from "../components/home/stats";
import { Team } from "../components/home/team";
import { Features } from "../components/home/features";
import { About } from "../components/home/about";

import "../css/tailwind.css";

// todo change the heading sizes

import "./globals.css";
import styles from "./index.module.css";
import "./single-post.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <main>
        <Hero />
        <Stats />
        <FeaturedCourses />
        <Features />
        <LatestPosts />
        <About />
        <Team />
        <Contact />
      </main>
    </Layout>
  );
}
