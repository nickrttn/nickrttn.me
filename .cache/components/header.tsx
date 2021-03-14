import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import { Section } from './section.tsx';
import styles from './header.module.css.js';
import { useLocation, useRoute } from '/@npm/preact-iso/router';
import clsx from '/@npm/clsx';

export default function Header() {
  const route = useRoute();
  const location = useLocation();

  console.log({ location, route });

  return (
    $$html`<${Section} className=${styles.header} as="header">
      <h1>Nick Rutten</h1>
      <nav role="navigation">
        <a class=${clsx({ [styles.active]: location.path === '/' })} href="/">
          Home
        </a>
        <a
          class=${clsx({ [styles.active]: location.path === '/about' })}
          href="/about"
        >
          About
        </a>
      </nav>
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
