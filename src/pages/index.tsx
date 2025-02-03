import type { PageComponent } from '@nxweb/react';

import { app } from '@config/app.js';
import { Link } from 'react-router-dom';

const Index: PageComponent = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img alt="logo" className="app-logo" src={app.logo} />
        <p>
          Edit <code>@pages/index.tsx</code> and save to reload.
        </p>
        <Link className="app-link" to="/table">Go to table</Link>
      </header>
    </div>
  );
};

Index.displayName = 'Index';

export default Index;
