import { Section } from './section';
import styles from './header.module.css';
import { useLocation, useRoute } from 'preact-iso/router';
import clsx from 'clsx';

export default function Header() {
  const route = useRoute();
  const location = useLocation();

  console.log({ location, route });

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
}
