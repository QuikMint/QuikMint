import { withSetupUser } from "../../../auth/hooks"

function NewContract() {

	return (
		<div className=''>
			Contract Creation
		</div>
	)
}

export default withSetupUser(NewContract)