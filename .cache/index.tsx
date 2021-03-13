import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import hydrate from '/@npm/preact-iso/hydrate';
import { LocationProvider, Router } from '/@npm/preact-iso/router';
import lazy, { ErrorBoundary } from '/@npm/preact-iso/lazy';
import Home from './pages/home/index.tsx';
import NotFound from './pages/_404.tsx';
import Header from './header.tsx';

const About = lazy(() => import('./pages/about/index.tsx'));

export function App() {
	return (
		$$html`<${LocationProvider}>
			<div class="app">
				<${Header} />
				<${ErrorBoundary}>
					<${Router}>
						<${Home} path="/" />
						
						<${NotFound} default />
					<//>
				<//>
			</div>
		<//>`
	);
}

hydrate($$html`<${App} />`);

export async function prerender(data) {
	console.log("PRERENDERING")
	const { default: prerender } = await import('/@npm/preact-iso/prerender');
	return await prerender($$html`<${App} ...${data} />`);
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
