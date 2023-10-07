import { useSelector } from 'react-redux';

const NavBar = () => {
  const amount = useSelector((state) => state.card.amount);
  return <h1>{amount}</h1>;
};

export default NavBar;
