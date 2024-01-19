import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 6rem;

  .form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media screen and (max-width: 448px) {
    .form {
      padding: 5% 5%;
    }
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`
export default Wrapper
