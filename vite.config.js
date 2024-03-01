
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    jsxInject: `import React from 'react'`,
    include: ['**/*.js', '**/*.jsx'] // Treat both .js and .jsx files as containing JSX
  })]
});