import styled from 'styled-components';

export const PaginationContainer = styled.section`
  margin: 30rem auto 0;

  ul {
    display: flex;
    align-items: center;

    li {
      width: 40rem;
      height: 40rem;
      cursor: pointer;
      border: 4rem;

      &.disabled {
        opacity: 0.3;
        cursor: default;
      }
    }
  }
`;
