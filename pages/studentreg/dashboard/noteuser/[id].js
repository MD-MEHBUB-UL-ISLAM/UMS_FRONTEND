









import MyLayout from "@/pages/component/layout";
import MyLayout1 from "@/pages/component/layout1";
import axios from "axios";
import { useRouter } from 'next/router'

import UserLayout from "@/pages/component/userdata";
import UserLayout1 from "@/pages/component/userdata2";
import SessionCheck from "../../../component/sessioncheck";
import SessionCheck1 from "@/pages/component/sessioncheck1";
import AdminDrawer from "../../../component/admindrawer";
import AdminDrawer1 from "@/pages/component/admindrawer1";
import NoteLayout from "@/pages/component/noteuserdata";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck1 />
      <MyLayout1 title={data.id} />
      <AdminDrawer1 />

      <NoteLayout
     
     NoteName= {data.Notename}
     TeacherName= {data.teachername}
     Info= {data.Noteinfo}
      />

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get('https://umsbackendteo-production.up.railway.app/reg/findnote/' + id);
  const data = await response.data;

  return { props: { data } }
}