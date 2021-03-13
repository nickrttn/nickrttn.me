import { styled } from 'goober';
import { Section } from './section';

const H1Link = styled('a')`
  text-decoration-thickness: 0.25rem;
`;

const H1 = styled('h1')`
  display: inline-block;
  margin: 0;
`;

export default function Header() {
  return (
    <Section as="header">
      <H1Link href="/">
        <H1>Nick Rutten</H1>
      </H1Link>
    </Section>
  );
}
