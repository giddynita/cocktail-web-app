import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/NavBar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <div>
      <Navbar />
      <div className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </div>
    </div>
  )
}
export default HomeLayout
