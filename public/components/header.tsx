import { styled } from 'goober';

const El = styled('header')`
  padding: 2vmax;
`;

const H1Link = styled('a')`
  text-decoration-thickness: 0.25rem;
`;

const H1 = styled('h1')`
  margin: 0;
`;

export default function Header() {
  return (
    <El>
      <H1Link href="/">
        <H1>Nick Rutten</H1>
      </H1Link>
    </El>
  );
}
