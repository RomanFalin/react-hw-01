import PropTypes from 'prop-types';
import {
  StaticticsSection,
  StaticticsTitle,
  StatisticsList,
  StatisticsListItem,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';
import { getRandomHexColor } from './Statistics.styled';

const Statistics = ({ title = null, stats }) => {
  return (
    <StaticticsSection className="statistics">
      {title && <StaticticsTitle className="title">{title}</StaticticsTitle>}

      <StatisticsList className="stat-list">
        {stats.map(stat => (
          <StatisticsListItem
            className="item"
            key={stat.id}
            color={getRandomHexColor()}
          >
            <ItemLabel className="label">{stat.label}</ItemLabel>
            <ItemPercentage className="percentage">
              {stat.percentage}%
            </ItemPercentage>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StaticticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
