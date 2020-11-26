import React from 'react';
import { connect } from 'react-redux';
import { updateLogger } from '../Store/reducers/logReducer/logActions';

const Test = ({ log, updateLogger }) => (
  <>
    {<button onClick={() => updateLogger()}>Do Redux action</button>}
    <p>{log.logger.flat()}</p>
  </>
);

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { updateLogger })(Test);
