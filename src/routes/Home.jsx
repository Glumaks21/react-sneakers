import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterPanel from '../components/FilterPanel';
import Card from '../components/Card';
import MockedSneakersApi from '../util/MockedSneakersApi';
import useCart from '../hooks/useCart';
import useAuthentication from '../hooks/useAuthentication';
import useFetching from '../hooks/useFetching';
import LoadingCard from '../components/Card/LoadingCard';

export default function Home() {
  const [searchParams] = useSearchParams();
  const [auth] = useAuthentication();
  const [sneakers, setSneakers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, add, remove] = useCart();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [fetchSneakers, isSneakersLoading, sneakersError] = useFetching(async (signal) => {
    const q = searchParams.get('q');
    const sneakers = await MockedSneakersApi.getAll({ query: q, signal });
    setSneakers(sneakers);
  });

  const [fetchFavorites, isFavoritesLoading, favoritesError] = useFetching(async () => {
    if (auth) {
      const favorites = await Promise.resolve(['1', '4', '2']);
      setFavorites(favorites);
    }
  });

  useEffect(() => {
    const controller = new AbortController();
    fetchSneakers(controller.signal);
    return () => controller.abort();
  }, [searchParams.get('q')]);

  useEffect(() => {
    fetchFavorites();
  }, [auth]);

  useEffect(() => {
    setLoading(isSneakersLoading || isFavoritesLoading);
  }, [isSneakersLoading, isFavoritesLoading]);

  useEffect(() => {
    setError(sneakersError || favoritesError);
  }, [sneakersError, favoritesError]);

  const addToFavorite = (item) => {
    if (!auth) return;

    if (favorites.some((id) => id === item.id)) {
      setFavorites(favorites.filter((id) => id !== item.id));
    } else {
      setFavorites([...favorites, item.id]);
    }
  };

  const addToCart = (item) => {
    if (cart.some((i) => i.id === item.id)) {
      remove(item);
    } else {
      add(item);
    }
  };
  console.log(new Array(9));
  return (
    <main>
      <FilterPanel />
      {isLoading ? (
        <ul className="sneakers-list">
          {new Array(8).map((s, index) => (
            <li key={index}>
              <LoadingCard />
            </li>
          ))}
        </ul>
      ) : error ? (
        <h3>{error.message}</h3>
      ) : (
        <ul className="sneakers-list">
          {sneakers.map((s) => (
            <li key={s.id}>
              <Card
                sneakers={s}
                isFavorite={favorites.some((id) => id === s.id)}
                addToFavorite={addToFavorite}
                isAdded={cart.some((i) => i.id === s.id)}
                addToCart={addToCart}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
