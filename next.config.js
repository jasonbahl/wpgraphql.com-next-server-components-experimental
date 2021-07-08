const withWordPress = require("./plugins/WordPress");

module.exports = withWordPress({
  reactStictMode: true,
  i18n: {
    locales: ['en-US', 'fr', 'es-mx'],
    defaultLocale: 'en-US'
  }
})
