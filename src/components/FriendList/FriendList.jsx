import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './friendlist.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <FriendListItem
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
