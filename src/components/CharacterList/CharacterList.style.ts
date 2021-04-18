import styled from 'styled-components';

export const CharacterListContainer = styled.section`
  display: grid;
  grid-gap: 40rem;
  grid-template-columns: 1fr;
  margin-top: 40rem;
  flex: 3 1;

  article {
    align-items: center;
    display: flex;
    height: 174px;
    justify-content: center;
    cursor: pointer;
    img {
      align-items: center;
      display: flex;
      height: 174rem;
      width: 174rem;
      justify-content: center;
      margin-right: 20rem;
      flex: 1 1;
    }

    div {
      overflow-wrap: break-word;
      word-break: break-word;
      flex: 2 1;

      .species,
      .status {
        color: #222;
        font-size: 12rem;
        font-weight: bold;
        margin: 8rem 0;
        opacity: 0.7;
        text-transform: uppercase;
      }

      h4 {
        font-size: 16rem;
        font-weight: bold;
      }

      .description {
        color: #222;
        font-size: 11rem;
        margin-top: 8rem;

        br {
          display: block; /* makes it have a width */
          content: ''; /* clears default height */
          margin-top: 5rem; /* change this to whatever height you want it */
        }
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;

    article {
      display: initial;
      height: auto;

      .description {
        display: none;
      }
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
