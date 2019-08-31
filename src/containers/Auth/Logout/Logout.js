import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

/* eslint-disable react-hooks/rules-of-hooks */
const logout = (props) => {
  const { onLogout } = props;

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (disptach) => {
  return {
    onLogout: () => disptach(actions.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(logout);
