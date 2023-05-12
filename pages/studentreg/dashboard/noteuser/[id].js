import MyLayout from "../../../component/layout";
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'


export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout title="Note"/>
   

      <h1>NoteName: {data.Notename}</h1>
      <h1>TeacherName: {data.teachername}</h1>
      <h1>Info: {data.Noteinfo}</h1>

    
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('http://localhost:3000/reg/findnote/'+id);
    const data = await response.data;

   
return { props: { data } }

}