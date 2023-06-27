import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.filtr}>
    <label className={css.labelFilter}>
      Filter
      <input
        className={css.inputFilter}
        type="name"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
