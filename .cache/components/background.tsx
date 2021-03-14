import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import styles from './background.module.css.js';
import { useEffect, useState } from '/@npm/preact/hooks';














const Background = () => {
  const [size, setSize] = useState(0);
  const [rects, setRects] = useState([]);

  useEffect(() => {
    async function fetchContributions() {
      const p = await fetch('/.netlify/functions/contributions');
      const data = (await p.json()) ;
      setSize(data.size);
      setRects(data.rects);
    }

    void fetchContributions();
  }, []);

  if (rects.length === 0) return null;

  return (
    $$html`<div class=${styles.background}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <title>
            This is my GitHub commit graph. I used it as a background because I
            wanted something semi-random. I think the data has no significant
            value beyond that.
          </title>
        </defs>
        ${rects.map((el, idx) => (
          $$html`<rect
            key=${el.key}
            x=${idx * size}
            y=${0}
            fill=${el.color}
            fill-opacity=${0.25}
            width=${size}
            height=${100}
            shapeRendering="crispEdges"
          />`
        ))}
      </svg>
    </div>`
  );
};

export default Background;


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
