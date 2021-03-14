import { FunctionalComponent } from 'preact';
import { Section } from '../../components/section';

const About: FunctionalComponent = () => {
  return (
    <Section as="main">
      <h2>About me</h2>
      <p>
        I've been writing code, mainly HTML, CSS and JavaScript since 2012 when{' '}
        I taught myself to code to have some income while traveling around the{' '}
        world with my partner.{' '}
      </p>
      <p>
        After a year of traveling, when we returned to the Netherlands, I{' '}
        studied{' '}
        <a
          href="https://www.cmd-amsterdam.nl/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Communication and Multimedia Design
        </a>{' '}
        at the Amsterdam University of Applied Sciences, starting in 2014. The{' '}
        study trains user experience designers and has high quality electives{' '}
        for front-end development, among others. I graduated cum laude four{' '}
        years later, in 2018.
      </p>
      <p>
        In 2016 during university, I interned at CLEVER°FRANKE, which is where I{' '}
        still work today, now as a front-end developer in a senior role. My{' '}
        daily work consists mostly of client work as a member of a sprint team.{' '}
        In the sprint team, I'm responsible for the health of our codebase and{' '}
        processes around it.
      </p>
      <p>
        With codebase health, I'm talking about things like maintainability and{' '}
        an application architecture that allows fellow engineers to be{' '}
        productive, but also client-side performance and optimizations. As for{' '}
        processes around it, I think it's important to foster an open{' '}
        environment where every sprint team member feels secure to provide{' '}
        feedback. Our pull request review process is tailored towards that.
      </p>
      <p>
        I'm personally interested in optimizing websites for performances. I'm{' '}
        well versed in HTML and CSS as their own programming languages and if I{' '}
        use a JavaScript framework (we often use React or Preact) I view it as a{' '}
        delivery method for these things. Semantics and accessibility are{' '}
        important to me. You'll find no <code>div</code> with click handlers in{' '}
        my applications.
      </p>
    </Section>
  );
};

export default About;
