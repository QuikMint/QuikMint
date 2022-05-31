import { withSetupUser } from "../../auth/hooks"

function AccountDash() {

	return (
		<div className=''>
			Lorem Ipsum
		</div>
	)
}

export default withSetupUser(AccountDash)