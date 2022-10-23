import FriendListItem from 'components/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      <FriendListItem
        avatar={friends[0].avatar}
        name={friends[0].name}
        isOnline={friends[0].isOnline}
      />
      <FriendListItem
        avatar={friends[1].avatar}
        name={friends[1].name}
        isOnline={friends[1].isOnline}
      />
      <FriendListItem
        avatar={friends[2].avatar}
        name={friends[2].name}
        isOnline={friends[2].isOnline}
      />
      <FriendListItem
        avatar={friends[3].avatar}
        name={friends[3].name}
        isOnline={friends[3].isOnline}
      />
    </ul>
  );
};

export default FriendList;
