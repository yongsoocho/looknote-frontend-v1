import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 1px;
  display: flex;
  box-sizing: border-box;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Home = styled.div`
  display: flex;
  width: ${props => (props.page === `main` ? `65%` : `35%`)};
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: 600;
  font-size: 1em;
  background-color: ${props => (props.page === `main` ? `black` : `white`)};
  color: ${props => (props.page === `main` ? `white` : `black`)};
  transition: all 0.3s;
`;

const About = styled.div`
  display: flex;
  width: ${props => (props.page === `about` ? `65%` : `35%`)};
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: 500;
  font-size: 1em;
  background-color: ${props => (props.page === `about` ? `black` : `white`)};
  color: ${props => (props.page === `about` ? `white` : `black`)};
  transition: all 0.3s;
`;

const LinkBar = props => {
  const navigate = useNavigate();
  const { page } = props;

  const onClickHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onClickAbout = useCallback(() => {
    navigate('/about');
  }, [navigate]);

  return (
    <Container>
      <Home onClick={onClickHome} page={page}>
        <span>Home</span>
      </Home>
      <About onClick={onClickAbout} page={page}>
        <span>둘러보기</span>
      </About>
    </Container>
  );
};

export default React.memo(LinkBar);
