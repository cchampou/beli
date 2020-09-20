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
        'content-width': ['warn', { minScore: 0.9 }],
        'uses-optimized-images': ['warn', { maxLength: 0 }],
        'uses-responsive-images': ['warn', { maxLength: 0 }],
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
