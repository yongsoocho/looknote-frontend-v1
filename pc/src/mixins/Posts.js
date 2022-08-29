import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../css/Post.module.css';

const Container = styled.div`
  --WIDTH: 220px;
  --HEIGHT: calc(var(--WIDTH) * 1.2);
  width: var(--WIDTH);
  height: var(--HEIGHT);
  display: flex;
  cursor: pointer;

  @media (max-width: 700px) {
    --WIDTH: 220px;
  }

  @media (max-width: 500px) {
    --WIDTH: 200px;
  }

  @media (max-width: 400px) {
    --WIDTH: 170px;
  }
`;

const Post = props => {
  const { imageURL } = props;
  const navigate = useNavigate();

  return (
    <Container>
      <div
        className={styles.thumbnail}
        // onClick={() => {
        //   return navigate(`/preview/${props.id}`, { state: imageURL });
        // }}
      >
        <img src={imageURL} alt="thumbnail" className={styles.image} />
      </div>
    </Container>
  );
};

export default React.memo(Post);
