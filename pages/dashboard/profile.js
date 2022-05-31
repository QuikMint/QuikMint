import { withSetupUser } from '../../auth/hooks'
import DashNav from '../../components/Navbar/dash'

function Profile() {
  return <main className=''>
		<DashNav />
	</main>
}

export default withSetupUser(Profile)
