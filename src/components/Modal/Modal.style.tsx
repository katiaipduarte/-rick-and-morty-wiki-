import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: default;

  .content {
    background-color: white;
    position: absolute;
    top: 20%;
    left: 19%;
    width: 60%;
    padding: 20rem;
    border-radius: 5rem;

    .close {
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
    }
    .profile {
      img {
        display: block;
        margin: 0 auto 20rem;
        border-radius: 50%;
        width: 80%;
      }

      .profile-details {
        h1 {
          font-weight: bold;
          color: green;
          font-size: 26rem;
          margin-bottom: 25rem;
          text-transform: uppercase;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .content {
      .profile {
        align-items: center;
        display: flex;
        justify-content: center;
        img {
          flex: 1 1;
          margin-right: 15rem;
          width: 50%;
        }
        .profile-details {
          flex: 2 1;
        }
      }
    }
  }
`;
