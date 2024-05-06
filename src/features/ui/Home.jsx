import { useSelector } from 'react-redux';
import CreateUser from './../user/CreateUser';
import Button from './Button';
import LinkButton from './LinkButton';

function Home() {
  const username = useSelector(state => state.user.username)


  return (

    <div className='my-10 text-center sm:my-16'>
      <h1 className="text-center text-xl text- text-clip font-semibold mb-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? <CreateUser /> : <LinkButton to={'/menu'}>Continue Ordering ,{username}</LinkButton>}
    </div>

  );
}

export default Home;
