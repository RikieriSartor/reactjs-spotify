import React from 'react';

import {
  Container,
  Title,
  List,
  Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/album-cover.png"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas os melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
