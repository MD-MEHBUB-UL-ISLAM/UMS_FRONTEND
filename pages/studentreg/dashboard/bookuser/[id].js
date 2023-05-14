import MyLayout from "../../../component/layout";
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'


export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout title="Book"/>
   

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