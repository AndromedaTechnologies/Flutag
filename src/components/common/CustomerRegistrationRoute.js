import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CustomerRegistrationRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      ( auth.isAuthenticated && auth.isCustomer === false ) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

CustomerRegistrationRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CustomerRegistrationRoute);
