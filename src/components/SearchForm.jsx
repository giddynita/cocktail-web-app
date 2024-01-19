import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = ({ searchForm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          id="search"
          className="form-input"
          defaultValue={searchForm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  )
}
export default SearchForm
