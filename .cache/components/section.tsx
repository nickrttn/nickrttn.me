import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';

import clsx from '/@npm/clsx';
import styles from './section.module.css.js';






export const Section = (props) => {
  const { as: Cmpnt, className, ...rest } = props;
  return $$html`<${Cmpnt} class=${clsx(className, styles.section)} ...${rest} />`;
};


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
