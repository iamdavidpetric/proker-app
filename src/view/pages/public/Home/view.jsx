import { useEffect } from 'react';

const Home = ({ getPlayers, player }) => {
  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className='flex h-screen w-screen flex-col bg-secondary'>
      <div className='mt-2 flex flex-col items-center'>
        {player.players.map(item => (
          <div className='my-1 flex w-1/3 rounded-xl border-4 border-secondary bg-primary py-1 px-2 text-white transition-all duration-300 hover:scale-125'>
            {item.id}
            <div className='px-2'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
