import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return null;
};

export default function Favorites() {
  const favorite = useLoaderData();

  return (
    <>
      {favorite.map((item) => (
        <div>{item.title}</div>
      ))}
    </>
  );
}
