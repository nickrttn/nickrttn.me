import Header from './components/header';
import Home from './pages/home';
import NotFound from './pages/_404';
import hydrate from 'preact-iso/hydrate';
import { ErrorBoundary } from 'preact-iso/lazy';
import { LocationProvider, Router } from 'preact-iso/router';
import { setup } from 'goober';
import { prefix } from 'goober/prefixer';
import { h } from 'preact';
import GlobalStyles from './style';
import Background from './components/background';

// init goober
setup(h, prefix);

export function App() {
  return (
    <>
      <GlobalStyles />
      <LocationProvider>
        <div class="app">
          <ErrorBoundary>
            <Header />
            <Router>
              <Home path="/" />
              <NotFound default />
            </Router>
            <Background />
          </ErrorBoundary>
        </div>
      </LocationProvider>
    </>
  );
}

hydrate(<App />);

export async function prerender(data: Record<string, unknown>) {
  const { default: prerender } = await import('preact-iso/prerender');
  return await prerender(<App {...data} />);
}
