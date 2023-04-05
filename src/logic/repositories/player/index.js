import Api from 'logic/api';

const getPlayers = () => Api.get('https://jsonplaceholder.typicode.com/posts/');

export default { getPlayers };
