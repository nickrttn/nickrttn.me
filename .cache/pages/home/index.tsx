import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import LinkTree from '../../components/linktree.tsx';
import { Section } from '../../components/section.tsx';
import styles from './index.module.css.js';

export default function Home() {
  return (
    $$html`
      <${Section} as="main">
        <p class=${styles.leader}>
          Hi, I'm Nick. I'm a front-end developer. This is my personal website.
          It doesn't contain a whole lot of content just yet, but I'll build it
          out as I go.
        </p>
        <p>
          You can read a bit more about me <a href="/about">here</a>.
        </p>
      <//>

      <${LinkTree} />
    `
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
