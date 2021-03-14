import hydrate from 'preact-iso/hydrate';
import { ErrorBoundary } from 'preact-iso/lazy';
import { LocationProvider, Router } from 'preact-iso/router';
import Background from './components/background';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/_404';
import { FunctionalComponent } from 'preact';
import type { PrerenderResult } from 'preact-iso/prerender';

const App: FunctionalComponent = () => {
  return (
    <>
      <LocationProvider>
        <div class="app">
          <ErrorBoundary>
            <Header />
            <Router>
              <Home path="/" />
              <About path="/about" />
              <NotFound default />
            </Router>
            <Background />
          </ErrorBoundary>
        </div>
      </LocationProvider>
    </>
  );
};

hydrate(<App />);

export async function prerender(
  data: Record<string, unknown>,
): Promise<PrerenderResult> {
  const { default: prerender } = await import('preact-iso/prerender');
  return await prerender(<App {...data} />);
}
