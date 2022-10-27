import styled from '@emotion/styled';

export const FriendItem = styled.li`
  flex-basis: 100%;
  display: flex;
  width: 330px;
  align-items: center;
  padding: 10px;
  column-gap: 20px;
  border-radius: 5px;
  background-color: #f3ebeb;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? `green` : `red`;
  }};
`;
export const FriendAvatar = styled.img``;
export const FriendName = styled.p`
  font-weight: bold;
`;
