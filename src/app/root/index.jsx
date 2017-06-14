import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import Page from '../../components/page';
import Body from '../../components/page/body';
import Button from '../../components/button';
import light from '../theme/light';
import dark from '../theme/dark';

const themes = {
  light,
  dark,
};

class Root extends React.Component {

  renderContent = () => (
    <Page>
      <Body>
        <Button btnStyle={'green'}>Theme Button</Button>
        <Button>Another Theme Button</Button>
      </Body>
    </Page>
  )

  render() {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    const theme = query.theme || 'light';

    return (
      <div className={`theme-${theme}`}>
        {this.renderContent()}
      </div>
    );
  }
}

if (__DEV__) {
  Root.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };
}

export default Root;
