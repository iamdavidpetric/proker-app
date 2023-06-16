import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { mockFunction } from 'logic/helpers';

const handleGetPlayers = getPlayers => {
  getPlayers();
};

const Home = ({ getPlayers = mockFunction, player = {}, getPlayersLoading = false }) => {
  useEffect(() => {
    handleGetPlayers(getPlayers);
  }, []);

  return (
    <div className='flex h-screen w-screen flex-col bg-secondary'>
      <div className='mt-2 flex flex-col items-center'>
        {player.players.map(item => (
          <div
            key={item.id}
            className='my-1 flex w-1/3 rounded-xl border-4 border-secondary bg-primary py-1 px-2 text-white transition-all duration-300 hover:scale-125'>
            {item.id}
            <div className='px-2'>
              {getPlayersLoading ? <div className='bg-red-500'>LOADING</div> : item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  getPlayers: PropTypes.func,
  getPlayersLoading: PropTypes.bool,
  player: PropTypes.object,
};

export default Home;
