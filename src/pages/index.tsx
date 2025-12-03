import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          AI Humanoid Future
        </Heading>
        <p className="hero__subtitle">
          An in-depth exploration of the future of AI-powered humanoids, their role in society, and the profound changes they will bring to our world. This book serves as a comprehensive guide to the exciting and challenging road ahead.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/ai-humanoid-future/intro">
            Read the Book - Start Here 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

const chapters = [
  {
    title: 'Chapter 1: Evolution of AI',
    link: '/docs/ai-humanoid-future/evolution-of-ai',
    description: 'Trace the history of AI, from rule-based systems to deep learning and multimodal models.'
  },
  {
    title: 'Chapter 2: Understanding Humanoid AI',
    link: '/docs/ai-humanoid-future/understanding-humanoid-ai',
    description: 'Learn what makes a robot a humanoid, and meet the current generation of advanced humanoid robots.'
  },
  {
    title: 'Chapter 3: Impact on Society',
    link: '/docs/ai-humanoid-future/impact-on-society',
    description: 'Explore how humanoid AI will revolutionize work, education, healthcare, and our daily lives.'
  },
  {
    title: 'Chapter 4: Ethical & Legal Considerations',
    link: '/docs/ai-humanoid-future/ethical-and-legal-considerations',
    description: 'Delve into the complex ethical and legal questions raised by the rise of intelligent humanoids.'
  },
  {
    title: 'Chapter 5: Future Possibilities',
    link: '/docs/ai-humanoid-future/future-possibilities',
    description: 'Imagine the future of humanoids in space exploration, rescue missions, and as household companions.'
  },
  {
    title: 'Chapter 6: Challenges Ahead',
    link: '/docs/ai-humanoid-future/challenges-ahead',
    description: 'Understand the technical, economic, and regulatory hurdles that humanoid AI still needs to overcome.'
  },
  {
    title: 'Chapter 7: Opportunities for Humanity',
    link: '/docs/ai-humanoid-future/opportunities-for-humanity',
    description: 'Discover the benefits that humanoid AI can bring to humanity, from increased productivity to better healthcare.'
  },
  {
    title: 'Chapter 8: Conclusion',
    link: '/docs/ai-humanoid-future/conclusion',
    description: 'A look back at the journey and a glimpse into the future of humans and humanoids working together.'
  }
];

function ChapterOverview() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <Heading as="h2" className="text--center">Chapter Overview</Heading>
          </div>
        </div>
        <div className="row">
          {chapters.map((chapter, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className="card-demo">
                <div className="card">
                  <div className="card__header">
                    <Heading as="h3">{chapter.title}</Heading>
                  </div>
                  <div className="card__body">
                    <p>{chapter.description}</p>
                  </div>
                  <div className="card__footer">
                    <Link to={chapter.link} className="button button--primary button--block">
                      Read Chapter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`AI Humanoid Future - ${siteConfig.title}`}
      description="A textbook on the future of AI and humanoid robotics">
      <HomepageHeader />
      <main>
        <ChapterOverview />
      </main>
    </Layout>
  );
}


