import { Section } from './section';
import styles from './linktree.module.css';

export default function LinkTree() {
  return (
    <Section className={styles.links} as="aside">
      <h2>Links</h2>
      <p>
        A collection of links to some of my profiles on other websites and other
        things.
      </p>
      <ul>
        <li>
          <a
            href="https://www.github.com/nickrttn"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub profile
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/nickrttn"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter profile
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nickrutten/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn profile
          </a>
        </li>
        <li>
          <a
            href="https://trello.com/b/9tkkvRNf/eten"
            rel="noopener noreferrer"
            target="_blank"
          >
            My collection of recipes
          </a>
        </li>
      </ul>
    </Section>
  );
}
