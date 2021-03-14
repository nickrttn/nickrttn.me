import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import { Section } from './section.tsx';
import styles from './linktree.module.css.js';

export default function LinkTree() {
  return (
    $$html`<${Section} className=${styles.links} as="aside">
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
    <//>`
  );
}


import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
