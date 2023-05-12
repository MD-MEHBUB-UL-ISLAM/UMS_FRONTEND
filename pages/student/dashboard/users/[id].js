
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router';
import MyLayout from "../../../component/layout";

export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout title="User"/>
   
      <h1>Name: {data.fullname}</h1>
  <h1>CGPA: {data.CGPA}</h1>
  <h1>phone: {data. phone}</h1>
  <h1>isActive: {data.isActive}</h1>
  <h1>Email: {data.email}</h1>
  <h1>Password: {data.password}</h1>
  <h1> Info: {data.info}</h1>
      <h1>Picture: </h1>
      <Image src={"http:/localhost:3000/student/getimage/"+data.filename} alt="me" width="150" height="150" />
     <br></br>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('http://localhost:3000/student/findstudent/'+id);
    const data = await response.data;
   
return { props: { data } }
}