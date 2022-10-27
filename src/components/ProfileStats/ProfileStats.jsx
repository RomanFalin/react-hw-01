import PropTypes from 'prop-types';
import {
  ProfileStatsBox,
  ProfileStatsItem,
  StatsItemLabel,
  StatsItemQuantity,
} from './ProfileStats.styled';

const ProfileStats = ({ stats: { followers, views, likes } }) => {
  return (
    <ProfileStatsBox className="stats">
      <ProfileStatsItem>
        <StatsItemLabel className="label">Followers</StatsItemLabel>
        <StatsItemQuantity className="quantity">{followers}</StatsItemQuantity>
      </ProfileStatsItem>
      <ProfileStatsItem>
        <StatsItemLabel className="label">Views</StatsItemLabel>
        <StatsItemQuantity className="quantity">{views}</StatsItemQuantity>
      </ProfileStatsItem>
      <ProfileStatsItem>
        <StatsItemLabel className="label">Likes</StatsItemLabel>
        <StatsItemQuantity className="quantity">{likes}</StatsItemQuantity>
      </ProfileStatsItem>
    </ProfileStatsBox>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default ProfileStats;
