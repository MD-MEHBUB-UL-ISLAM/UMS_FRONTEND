import MyLayout1 from "@/pages/component/layout1";
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'


export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout1 title="Course"/>
   

      <h1>CourseName: {data.Coursename}</h1>
      <h1>CourseID: {data.Courseid}</h1>

    
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('https://umsbackendteo-production.up.railway.app/reg/findcourse/'+id);
    const data = await response.data;

   
return { props: { data } }

}