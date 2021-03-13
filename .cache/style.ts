import { createGlobalStyles } from '/@npm/goober/global';

export default createGlobalStyles`
:root {
	--color: hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${
  Math.random() * 100
}%);
}

html {
	box-sizing: border-box;
	font-size: 1.25em;
}

*,*::after,*::before {
	box-sizing: inherit;
}

html,
body {
	margin: 0;
	min-height: 100%;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
}

a {
	color: black;
	text-decoration-thickness: 0.1em;
}

a:hover, a:focus-visible, a:focus {
	text-decoration-color: var(--color);
	outline: none;
}

a:focus {
	outline: none;
}

main {
	display: block;
}
`;

import { createHotContext as $w_h$ } from '/_wmr.js'; $w_h$(import.meta.url);