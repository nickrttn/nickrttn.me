import { styled } from 'goober';
import { Section } from './section';

const Li = styled('li')`
  margin-bottom: 0.5rem;
`;

export default function LinkTree() {
  return (
    <Section as="aside">
      <h2>Links</h2>
      <p>A collection of links to my profiles on other websites.</p>
      <ul>
        <Li>
          <a
            href="https://github.com/nickrttn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Li>
        <Li>
          <a
            href="https://twitter.com/nickrttn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </Li>
      </ul>
    </Section>
  );
}
