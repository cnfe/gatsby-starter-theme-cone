const _ = require('lodash');
const React = require('react');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

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

  replaceHeadComponents(headComponents);
};
