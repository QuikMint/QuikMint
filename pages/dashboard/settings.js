import { withSetupUser } from "../../auth/hooks"
import DashNav from "../../components/Navbar/dash"

function Settings() {

	return (
		<main className=''>
			<DashNav />
				
		</main>
	)
}

export default withSetupUser(Settings)