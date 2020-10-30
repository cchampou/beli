module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/'],
      isSinglePageApplication: true,
      settings: {
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'content-width': 'warn',
        'uses-optimized-images': 'warn',
        'uses-responsive-images': 'warn',
        'unused-javascript': 'warn',
        'color-contrast': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
