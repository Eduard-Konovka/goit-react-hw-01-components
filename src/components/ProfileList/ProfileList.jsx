import PropTypes from 'prop-types';
import Profile from './Profile';
import s from './ProfileList.module.css'

export default function ProfileList({ items = [] }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li key={item.name}>
          <Profile
            name={item.name}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};