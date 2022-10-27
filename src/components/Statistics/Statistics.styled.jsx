import styled from '@emotion/styled';

export const StaticticsSection = styled.section`
  width: 350px;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
`;
export const StaticticsTitle = styled.h2`
  margin: 10px 0;
`;
export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  min-width: 300px;
  border-top: 1px solid #616858;
`;
export const StatisticsListItem = styled.li`
  flex-basis: 100%;
  padding: 10px 0;
  background-color: ${props => props.color};
  color: #f8f8f8;
`;
export const ItemLabel = styled.span`
  display: block;
`;
export const ItemPercentage = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  display: block;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
