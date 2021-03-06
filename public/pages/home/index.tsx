import type { FunctionComponent } from 'preact';
import LinkTree from '../../components/linktree';
import { Section } from '../../components/section';
import styles from './index.module.css';

const Home: FunctionComponent = () => {
  return (
    <>
      <Section as="main">
        <p class={styles.leader}>
          Hi, I'm Nick. I'm a front-end developer. This is my personal website.{' '}
          It doesn't contain a whole lot of content just yet, but I'll build it{' '}
          out as I go.
        </p>
        <p>
          Read a bit more <a href="/about">about me</a> if you like.
        </p>
      </Section>

      <LinkTree />
    </>
  );
};

export default Home;
