import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import { styled } from '/@npm/goober';

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
    $$html`<${El}>
      <${H1Link} href="/">
        <${H1}>Nick Rutten<//>
      <//>
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
