import { connect } from 'react-redux';
import { Creators as PlayerActions } from 'logic/reducers/player';

import Home from './view';

export default connect(state => ({}), { getPlayers: PlayerActions.getPlayers })(Home);
