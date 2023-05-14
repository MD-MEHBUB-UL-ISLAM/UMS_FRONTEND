import MyLayout1 from "@/pages/component/layout1";
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'


export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout1 title="Book"/>
   

      <h1>BookName: {data.bookname}</h1>
      <h1>InfoBook: {data.takeinfo}</h1>
      <h1>WriterNmae: {data.authorname}</h1>

    
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('https://umsbackendteo-production.up.railway.app/reg/findbook/'+id);
    const data = await response.data;

   
return { props: { data } }

}










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
import BookLayout from "@/pages/component/bookuserdata";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck1 />
      <MyLayout1 title={data.id} />
      <AdminDrawer1 />

      <BookLayout
      
      BookName= {data.bookname}
      InfoBook={data.takeinfo}
      WriterNmae= {data.authorname}
      />

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get('https://umsbackendteo-production.up.railway.app/reg/findbook/' + id);
  const data = await response.data;

  return { props: { data } }
}