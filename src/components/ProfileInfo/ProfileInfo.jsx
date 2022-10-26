import PropTypes from 'prop-types';

const ProfileInfo = ({ username, tag, location, avatar }) => {
  return (
    <div class="description">
      <img src={avatar} alt={username} class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>
  );
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileInfo;
