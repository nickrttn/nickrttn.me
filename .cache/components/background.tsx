import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import { styled } from '/@npm/goober';
import { useEffect, useState } from '/@npm/preact/hooks';

const Fixed = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;
  }
`;








export default function Background() {
  const [size, setSize] = useState(0);
  const [rects, setRects] = useState([]);

  useEffect(() => {
    async function fetchContributions() {
      const p = await fetch('/.netlify/functions/contributions');
      const data = await p.json();
      setSize(data.size);
      setRects(data.rects);
    }

    fetchContributions();
  }, []);

  if (rects.length === 0) return null;

  return (
    $$html`<${Fixed}>
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
        ${rects.map((el) => (
          $$html`<rect
            key=${el.key}
            x=${(el.col - 1) * size}
            y=${(el.row - 1) * size}
            fill=${el.color}
            fill-opacity=${0.05}
            width=${size}
            height=${size}
            shapeRendering="crispEdges"
          />`
        ))}
      </svg>
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
