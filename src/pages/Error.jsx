import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src="" alt="" />
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you are looking for.</p>
          <Link to="/">go back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h3>Something went wrong</h3>
    </Wrapper>
  )
}
export default Error
