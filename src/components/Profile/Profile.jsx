import PropTypes from 'prop-types';
import ProfileInfo from 'components/Profile/ProfileInfo/ProfileInfo';
import ProfileStats from 'components/Profile/ProfileStats/ProfileStats';
import { UserCard } from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard className="profile">
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <ProfileStats stats={stats} />
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
