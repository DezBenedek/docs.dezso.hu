import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Dezso Studios
        </Heading>
        <p className={styles.heroSubtitle}>
          Modern megoldások, profi fotósoknak és fejlesztőknek.
          Fedezd fel dokumentációinkat és eszközeinket.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/image-sorter-studio/overview">
            Image Sorter Studio
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Dokumentáció
          </Link>
        </div>
      </div>
    </header>
  );
}

function Highlights() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.featureCard}>
              <Heading as="h3">Fókuszban a sebesség</Heading>
              <p>Eszközeinket úgy terveztük, hogy a legnehezebb munkafolyamatokat is pillanatok alatt elvégezhesd.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.featureCard}>
              <Heading as="h3">Mindig kéznél</Heading>
              <p>Részletes útmutatók és technikai leírások minden termékünkhöz egy helyen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Dezso Studios - Dokumentáció és Segédletek">
      <HomepageHeader />
      <main>
        <Highlights />
      </main>
    </Layout>
  );
}

