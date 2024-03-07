import { useSearchParams } from 'react-router-dom';
import cl from './FilterPanel.module.scss';

export default function FilterPanel() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={cl.content}>
      <h1>All sneakers</h1>
      <div className={cl.search_block}>
        <img src="/img/icons/search.svg" alt="search icon" />
        <input
          defaultValue={searchParams.get('q')}
          onChange={(e) => setSearchParams({ q: e.target.value })}
          className="input"
          placeholder="Search..."
          type="search"
        />
      </div>
    </div>
  );
}
