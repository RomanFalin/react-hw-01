import PropTypes from 'prop-types';
import Friend from 'components/Friend/Friend';
import { FriendsBlock } from './FriendsList.styled';

const FriendsList = ({ friends }) => {
  return (
    <FriendsBlock className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </FriendsBlock>
  );
};

FriendsList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsList;
