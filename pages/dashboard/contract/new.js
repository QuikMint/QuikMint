import { withSetupUser } from "../../../auth/hooks"
import DashNav from "../../../components/Navbar/dash"

function NewContract() {

	return (
		<main className=''>
			<DashNav />
			Contract Creation
		</main>
	)
}

export default withSetupUser(NewContract)