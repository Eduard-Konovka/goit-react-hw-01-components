import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline
        ? <span className={`${s.status} ${s.onLine}`}>√☺</span>
        : <span className={`${s.status} ${s.ofLine}`}>×☻</span>
      }
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendListItem.defaultProps = {
  avatar: `https://dummyimage.com/512x512/2a2a2a/ffffff&text=Аватар+пользователя`,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};