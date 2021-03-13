import { Section } from './section';

export default function LinkTree() {
  return (
    <Section as="aside">
      <h2>Links</h2>
      <p>A collection of links to my profiles on other websites.</p>
      <ul>
        <li>
          <a
            href="https://github.com/nickrttn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/nickrttn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </Section>
  );
}
