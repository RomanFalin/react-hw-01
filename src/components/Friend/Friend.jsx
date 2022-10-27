import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './Friend.styled';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem className="item">
      <FriendStatus className="status" status={isOnline}></FriendStatus>
      <FriendAvatar
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friend;
