
import Link from "next/link"
import MyLayout from "../../component/layout"


import SessionCheck from "../../component/sessioncheck"
import AdminDrawer from "../../component/admindrawer"


export default function AdminDashboard() {

    return (
      <>
         <SessionCheck />
    
      <MyLayout title="student DashBoard"/>
      <h1>Student Dashboard</h1>
      <AdminDrawer />



      </>
    )
  }