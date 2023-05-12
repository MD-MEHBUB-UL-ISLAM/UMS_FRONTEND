import MyLayout from "../../../component/layout";
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'


export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout title="Course"/>
   

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

    const response = await axios.get('http://localhost:3000/reg/findcourse/'+id);
    const data = await response.data;

   
return { props: { data } }

}