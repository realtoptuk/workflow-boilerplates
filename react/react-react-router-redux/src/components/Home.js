import React, { Fragment } from 'react';
import World from '../log';
import Test from './Test';
import { connect } from 'react-redux';
import { goTestPage } from '../reducers/logReducer/logActions';

const world = new World();
world.log(1337);

const Home = ({ goTestPage }) => (
  <Fragment>
    <div className="p">
      Hello <span className="p--h">{world.text}</span>
    </div>
    <Test />
    <hr />
    <button onClick={() => goTestPage()}>
      Programmatically go to test page
    </button>
  </Fragment>
);

export default connect(
  null,
  { goTestPage }
)(Home);
