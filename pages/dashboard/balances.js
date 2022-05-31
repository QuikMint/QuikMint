import { withSetupUser } from "../../auth/hooks"
import DashNav from "../../components/Navbar/dash"

function Balances() {

	return (
		<main className=''>
			<DashNav />
			Lorem Ipsum
		</main>
	)
}

export default withSetupUser(Balances)