import styled from 'styled-components'

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin-inline: auto;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .nav-link {
    color: var(--grey-900);
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      width: var(--view-width);
      max-width: var(--max-width);
      margin-inline: auto;
      padding: 1.5rem 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-flow: row nowrap;
      margin-top: 0px;
    }
  }
`

export default Wrapper
