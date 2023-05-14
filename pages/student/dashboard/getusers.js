

  import Link from "next/link"

import axios from "axios";
import { useRouter } from 'next/router'

import SessionCheck from "@/pages/component/sessioncheck";
import MyLayout from "@/pages/component/layout";
import AdminDrawer from "@/pages/component/admindrawer";
import Footer from "@/pages/component/footer";

export default function GetUsers({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck />
      <MyLayout title="Register ID" />
      <AdminDrawer />
      <div class="p-24 sm:ml-64">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        All Users
              </h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
            <Link href={"/student/dashboard/users/" + item.id}><div className="font-bold text-blue-600/100 bg-gray-200 px-16 m-10"
            >{item.fullname}</div></Link>
            </li>
        ))}
      </ul>
        </div>
       <Footer/> 
    </>
  );
  }
  

  export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get('https://umsbackendteo-production.up.railway.app/student/findstudent' + id);
  const data = await response.data;

  return { props: { data } }
}