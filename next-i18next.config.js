const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "nl",
    locales: ["nl"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development" ? true : false,
  localePath: path.resolve("./public/locales"),
};
