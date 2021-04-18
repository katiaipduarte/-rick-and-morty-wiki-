import styled from 'styled-components';

export const CharacterListContainer = styled.section`
  display: grid;
  grid-gap: 40rem;
  grid-template-columns: 1fr;
  margin-top: 40rem;
  flex: 3 1;
  img {
    align-items: center;
    display: flex;
    height: 174rem;
    width: 174rem;
    justify-content: center;
  }

  div {
    overflow-wrap: break-word;
    word-break: break-word;

    p {
      color: #222;
      font-size: 12rem;
      font-weight: bold;
      margin: 8rem 0;
      opacity: 0.7;
      text-transform: uppercase;
    }

    h1 {
      font-size: 16rem;
      font-weight: bold;
    }
  }

  @media (min-width: 680px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
