import PropTypes from 'prop-types';
import {
  UserDesc,
  UserName,
  UserAvatar,
  UserTag,
  UserLocation,
} from './ProfileInfo.styled';

const ProfileInfo = ({ username, tag, location, avatar }) => {
  return (
    <UserDesc className="description">
      <UserAvatar src={avatar} alt={username} className="avatar" />
      <UserName className="name">{username}</UserName>
      <UserTag className="tag">{tag}</UserTag>
      <UserLocation className="location">{location}</UserLocation>
    </UserDesc>
  );
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileInfo;
