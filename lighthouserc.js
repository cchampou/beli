module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/'],
      isSinglePageApplication: true,
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
