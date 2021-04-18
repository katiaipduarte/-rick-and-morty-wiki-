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
      align-items: center;
      display: flex;
      justify-content: center;
      img {
        border-radius: 50%;
        flex: 1 1;
        margin-right: 15rem;
      }

      .profile-details {
        flex: 2 1;

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
`;
