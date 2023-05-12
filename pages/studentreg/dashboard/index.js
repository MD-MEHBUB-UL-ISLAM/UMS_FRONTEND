
import SessionCheck1 from "@/pages/component/sessioncheck1"
import MyLayout1 from "@/pages/component/layout1"
import AdminDrawer1 from "@/pages/component/admindrawer1"

export default function AdminDashboard1() {


  return (
    <>
      <SessionCheck1 />

      <MyLayout1 title="Student User DashBoard" />

      <AdminDrawer1 />
    </>
  )
}