import { connect } from 'react-redux';

import Home from './view';

import { Creators as PlayerActions } from 'logic/reducers/player';

export default connect(state => ({}), { getPlayers: PlayerActions.getPlayers })(Home);
