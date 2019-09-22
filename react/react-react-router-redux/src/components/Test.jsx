import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { updateLogger } from '../reducers/logReducer/logActions';

const Test = ({ log, updateLogger }) => (
  <Fragment>
    {console.log(log.loading)}
    {!log.loading && (
      <button onClick={() => updateLogger()}>Redux action console.log</button>
    )}
    <p>{log.logger.flat()}</p>
  </Fragment>
);

const mapStateToProps = state => ({
  log: state.log,
});

export default connect(
  mapStateToProps,
  { updateLogger }
)(Test);
