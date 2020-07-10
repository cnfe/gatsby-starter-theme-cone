const _ = require('lodash');
const React = require('react');
const config = require('./config.json');

function replacePathPrefix(list, pathPrefix) {
  const newPathPrefix = `${pathPrefix}/${config.deploy.version}`;
  list.forEach((item) => {
    const { props } = item;
    const { href, src } = props || {};
    if (href && href.indexOf(pathPrefix) > -1) {
      props.href = href.replace(pathPrefix, newPathPrefix);
    }
    if (src && src.indexOf(pathPrefix) > -1) {
      props.src = src.replace(pathPrefix, newPathPrefix);
    }
  });
}

exports.onPreRenderHTML = ({
  getHeadComponents,
  getPostBodyComponents,
  replaceHeadComponents,
  replacePostBodyComponents
}) => {
  const headComponents = getHeadComponents();
  const postBodyComponents = getPostBodyComponents();

  const styles = _.remove(headComponents, (item) => {
    return (
      item.type === 'style' &&
      item.key !== 'gatsby-remark-autolink-headers-style'
    );
  });

  styles.forEach((item) => {
    const { props } = item;
    if (props && props['data-href']) {
      const cssLink = props['data-href'];
      headComponents.unshift(
        <link rel='stylesheet' type='text/css' href={cssLink} />
      );
    }
  });

  replacePathPrefix(headComponents, __PATH_PREFIX__);
  replacePathPrefix(postBodyComponents, __PATH_PREFIX__);

  replaceHeadComponents(headComponents);
  replacePostBodyComponents(postBodyComponents);
};
