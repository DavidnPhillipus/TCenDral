'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="main">
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="section__label">Something went wrong</p>
          <h2>We hit a snag while loading this page.</h2>
          <p style={{ margin: '1rem 0 1.5rem' }}>
            Refresh the page or try again in a moment. If the problem continues, the issue will be visible here instead of leaving a blank screen.
          </p>
          <button className="button" type="button" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}
