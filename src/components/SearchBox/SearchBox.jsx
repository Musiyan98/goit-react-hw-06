import css from './SearchBox.module.css';
import { nanoid } from 'nanoid';

const SearchBox = ({ onChange, value }) => {
  const SearchBarId = nanoid();
  return (
    <div className={css.SearchBarBlok}>
      <label className={css.label} htmlFor={SearchBarId}>
        Find Contact by name
      </label>
      <input
        className={css.input}
        value={value}
        onChange={onChange}
        name="SearchBar"
        id={SearchBarId}
      ></input>
    </div>
  );
};

export default SearchBox;
