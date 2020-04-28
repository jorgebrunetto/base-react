import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// import Main from './Main';

function Layout({ component: Component, public: isPublic, ...rest }) {
  function renderComponent({ matchProps }) {
    if (isPublic) return <Redirect to="/" />;

    if (rest.layoutDefault) {
      return (
        // <Main {...rest}>
        <Component {...matchProps} />
        // </Main>
      );
    }

    return <Component {...matchProps} />;
  }

  renderComponent.propTypes = {
    matchProps: PropTypes.any,
  };

  return <Route {...rest} render={renderComponent} />;
}

Layout.defaultProps = {
  public: false,
  layoutDefault: true,
};

Layout.propTypes = {
  component: PropTypes.func.isRequired,
  public: PropTypes.bool,
  layoutDefault: PropTypes.bool,
};

export default Layout;
