import clsx from 'clsx';
import type { FunctionComponent } from 'preact';
import { useLocation } from 'preact-iso/router';
import styles from './header.module.css';
import { Section } from './section';

const Header: FunctionComponent = () => {
  const location = useLocation();

  return (
    <Section className={styles.header} as="header">
      <h1>Nick Rutten</h1>
      <nav role="navigation">
        <a class={clsx({ [styles.active]: location.path === '/' })} href="/">
          Home
        </a>
        <a
          class={clsx({ [styles.active]: location.path === '/about' })}
          href="/about"
        >
          About
        </a>
      </nav>
    </Section>
  );
};

export default Header;
