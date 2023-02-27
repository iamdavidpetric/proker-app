import { useEffect, useState } from 'react';
import Cog from '@heroicons/react/24/outline/CogIcon';

import Api from '../../../../logic/api';

const errors = (setError, err) => setError(err);
const loading = setIsLoading => setIsLoading(false);
const response = (setPost, res) => setPost(res?.data);

const Home = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState([]);
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Api.get(`https://jsonplaceholder.typicode.com/posts/${counter}`)
      .then(response.bind(null, setPost))
      .catch(errors.bind(null, setError))
      .finally(loading.bind(null, setIsLoading));
  }, [counter]);

  return (
    <div className='flex flex-col h-full'>
      <div>
        {JSON.stringify(post)}
        {JSON.stringify(error)}
      </div>
      <div className='flex flex-col justify-center items-center '>
        <div className='bg-primary text-white p-6 rounded-lg'>
          {isLoading ? (
            <div className='flex justify-center items-center bg-primary  '>
              <Cog className='text-white w-8 h-8' />
            </div>
          ) : (
            <button onClick={setCounter.bind(null, counter + 1)}>Click me {counter}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
