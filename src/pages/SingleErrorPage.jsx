import { useRouteError } from 'react-router-dom'

const SingleErrorPage = () => {
  const error = useRouteError()
  return <div>{error.message}</div>
}
export default SingleErrorPage
