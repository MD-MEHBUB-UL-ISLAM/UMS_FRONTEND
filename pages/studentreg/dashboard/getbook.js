import Link from "next/link"
import axios from "axios";
import { useRouter } from 'next/router'
import SessionCheck1 from "@/pages/component/sessioncheck1";
import MyLayout1 from "@/pages/component/layout1";
import AdminDrawer1 from "@/pages/component/admindrawer1";
import Footer1 from "@/pages/component/footer1";
export default function GetUsers({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck1 />
      <MyLayout1 title="Get Users" />
      <AdminDrawer1 />
      <div class="p-24 sm:ml-64">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        All Books
              </h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
            <Link href={"/studentreg/dashboard/bookuser/" + item.id}><div className="font-bold text-blue-600/100 bg-gray-200 px-16 m-10"
            >{item.bookname}</div></Link>
            </li>
        ))}
      </ul>
        </div>
       <Footer1/> 
    </>
  );
  }
  

  
  export async function getServerSideProps(context) {
    const id = context.params.id;
  
    const response = await axios.get('https://umsbackendteo-production.up.railway.ap/reg/findbook/' + id);
    const data = await response.data;
  
    return { props: { data } }
  }