import Link from "next/link"
import MyLayout from "../../component/layout";
import axios from "axios";


export default function GetUsers({ data }) {
    
  return (
      <>
       <MyLayout title="Get Users"/>
      <h1>All Users</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/student/dashboard/users/"+item.id}>{item.fullname}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/student/index');
      const data = await response.data;
    
  return { props: { data } }
  }