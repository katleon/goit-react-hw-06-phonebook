import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../redux/contactSlice';
import { setFilter } from '../redux/contactSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filtr}>
      <label className={css.labelFilter}>
        Filter
        <input
          className={css.inputFilter}
          type="name"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
