import styled from 'styled-components';
import background from '../../assets/background.webp';
import loading from '../../assets/loading.gif';

export const SearchContainer = styled.header`
  align-items: center;
  background: linear-gradient(to bottom, #fbc300, #c98a00);
  background-image: url(${background});
  background-image: url(${background}), linear-gradient(to bottom, #fbc300, #c98a00);
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 368rem;
  padding: 0.5rem 1rem;
  text-align: center;

  form {
    background: white;
    border-radius: 4rem;
    width: 740rem;
    height: 64rem;
    box-shadow: 0 4rem 48rem 0 rgb(0 0 0 / 20%);

    input {
      border: none;
      color: #222;
      margin: 8rem 0;
      outline: none;
      font-size: 16rem;
      width: calc(100% - 120rem);
      height: calc(100% - 16rem);

      &.is-loading {
        width: calc(100% - 80rem);
        background: url(${loading}) no-repeat right center;
      }
    }
    #search-term-btn,
    #clear-search-term-btn {
      width: 60rem;
      height: 64rem;
      background: none;
      border: none;
      cursor: pointer;
      vertical-align: top;
      svg {
        color: #222;
        font-size: 20rem;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
