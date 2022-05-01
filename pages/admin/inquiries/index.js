import InquiryTable from "../../../components/admin/inquiryTable"
import SideNav from "../../../components/admin/sideNav"

export default function Inquiries() {
	return (
		<div className={`flex flex-row`}>
			<SideNav />
			<InquiryTable />
		</div>
	)
}