import Api from 'logic/api';

const getPlayers = () => Api.get('https://jsonplaceholder.typicode.com/users');

export default { getPlayers };
