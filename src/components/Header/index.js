import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/10809289?s=460&v=4" alt="" />
      Rikiéri Sartor
    </User>
  </Container>

);

export default Header;
