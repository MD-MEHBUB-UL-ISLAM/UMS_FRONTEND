


import MyLayout from "@/pages/component/layout";
import axios from "axios";
import { useRouter } from 'next/router'

import UserLayout from "@/pages/component/userdata";
import SessionCheck from "../../../component/sessioncheck";
import AdminDrawer from "../../../component/admindrawer";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck />
      <MyLayout title={data.id} />
      <AdminDrawer />

      <UserLayout
        filename={data.filename}
     
        Name= {data.fullname}
        CGPA= {data.CGPA}
        phone= {data. phone}
        isActive= {data.isActive}
        Email= {data.email}
        Password= {data.password}
        Info= {data.info}
      />

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get('https://umsbackendteo-production.up.railway.app/student/findstudent/' + id);
  const data = await response.data;

  return { props: { data } }
}