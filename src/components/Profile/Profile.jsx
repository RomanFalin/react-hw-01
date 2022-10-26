import PropTypes from 'prop-types';
import ProfileInfo from 'components/ProfileInfo/ProfileInfo';
import ProfileStats from 'components/ProfileStats/ProfileStats';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class="profile">
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <ProfileStats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
