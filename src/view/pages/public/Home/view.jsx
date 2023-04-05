import { useEffect, useState } from 'react';
import Cog from '@heroicons/react/24/outline/CogIcon';

import Api from 'logic/api';

const errors = (setError, err) => setError(err);
const response = (setPost, res) => setPost(res?.data);

const Home = ({ getPlayers }) => {
  const [post, setPost] = useState({});
  const [error, setError] = useState({});
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Api.get(`https://jsonplaceholder.typicode.com/posts/${counter}`)
      .then(response.bind(null, setPost))
      .catch(errors.bind(null, setError))
      .finally(setIsLoading.bind(null));
  }, [counter]);

  return (
    <div className='flex h-full flex-col'>
      <div>
        {JSON.stringify(post)}
        {JSON.stringify(error)}
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='rounded-lg bg-primary p-6 text-white'>
          {isLoading ? (
            <div className='flex items-center justify-center bg-primary'>
              <Cog className='h-8 w-8 text-white' />
            </div>
          ) : (
            <button onClick={setCounter.bind(null, counter + 1)}>Click me {counter}</button>
          )}
        </div>

        <div className='rounded-lg bg-primary p-6 text-white'>
          <button onClick={() => getPlayers()}>Saga </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
