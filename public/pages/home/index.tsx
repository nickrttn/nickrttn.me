import LinkTree from '../../components/linktree';
import { Section } from '../../components/section';

export default function Home() {
  return (
    <>
      <main>
        <Section>
          <p>
            I'm a front-end developer. This is my personal website. It isn't{' '}
            much yet, but I'll build it out as I go.
          </p>
        </Section>
      </main>

      <LinkTree />
    </>
  );
}
