
export default function SSG({ data }) {
    
    return (
        <>
        <h1>This SSG request!</h1>
        <ul>
        {data.map(item => (
            <li key={item.id}>
             <p>Name: {item.name}</p> 
           <p>email: {item.email}</p>   
              </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getStaticProps() {
   
        const response = await fetch('https://umsbackendteo-production.up.railway.app/reg/index');
        const data = await response.json();
      
    return { props: { data } }
    }