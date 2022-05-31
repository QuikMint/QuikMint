import { withAdmin } from "../../../auth/hooks"
import InquiryTable from "../../../components/admin/inquiryTable"
import SideNav from "../../../components/admin/sideNav"

function Inquiries() {
	return (
		<div className={`flex flex-row`}>
			<SideNav />
			<InquiryTable />
		</div>
	)
}
export default withAdmin(Inquiries)