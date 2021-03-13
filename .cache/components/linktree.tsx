import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import { styled } from '/@npm/goober';
import { Section } from './section.tsx';

const Li = styled('li')`
  margin-bottom: 0.5rem;
`;

export default function LinkTree() {
  return (
    $$html`<${Section} as="aside">
      <h2>Links</h2>
      <p>A collection of links to my profiles on other websites.</p>
      <ul>
        <${Li}>
          <a
            href="https://github.com/nickrttn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        <//>
        <${Li}>
          <a
            href="https://twitter.com/nickrttn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        <//>
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
