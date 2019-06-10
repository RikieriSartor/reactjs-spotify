import React from 'react';
import {
  Container,
  Header,
  SongList,
} from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/album-cover.png"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button type="button">PLAY</button>
      </div>
    </Header>
    <SongList cellSpacing={0} cellPadding={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
        <th><img src={ClockIcon} alt="Duração" /></th>
      </thead>
      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Pappercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Pappercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Pappercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Pappercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
