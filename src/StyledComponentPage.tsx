import React from 'react';
import styled from 'styled-components';
import FetchProfile from './components/FetchProfile';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const StyledComponentPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Styled-Components Profile</Title>
      <FetchProfile username="octocat" />
    </PageContainer>
  );
};

export default StyledComponentPage;
