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
    },
    upload: {
      // upload options here
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
