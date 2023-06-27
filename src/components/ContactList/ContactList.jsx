import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        <p className={css.contact}>
          {name}: {number}
        </p>
        <button className={css.btn} type="submit" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};

export default ContactList;
