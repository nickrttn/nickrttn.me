import LinkTree from '../../components/linktree';
import { Section } from '../../components/section';

export default function Home() {
  return (
    <>
      <main>
        <Section>
          <p>I'm a front-end developer. This is my personal website.</p>
        </Section>
      </main>

      <LinkTree />
    </>
  );
}
