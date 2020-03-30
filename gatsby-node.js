exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/Dashboard/)) {
    page.matchPath = "/Dashboard/*";
    actions.createPage(page);
  }
};
