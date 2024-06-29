import { useId } from 'react';
import classes from './SearchBox.module.css';
import PropTypes from 'prop-types';

const SearchBox = ({ value, onFilter }) => {
  const searchID = useId();
  return (
    <div className={classes.searchBox}>
      <label htmlFor={searchID}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};