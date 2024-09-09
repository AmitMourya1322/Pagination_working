import Pagination from "./Pagination";
import "./styles.css";
import {useState} from 'react'
export default function App() {

  const dummyData = Array.from({length:100},(_,index)=>({
    id:index+1,
    name:`Product ${index+1}`
  }))
  const itemsPerPage =10;
  const [currentPage,setCurrentPage] = useState(1);
  const handleChange =(currentPage)=>{
    setCurrentPage(currentPage)
  }

  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemList = dummyData.slice(indexOfFirstItem,indexOfLastItem)
console.log(itemList,'items')

  return (
    <div className="App">
      <ul>
     {itemList.map((listItem)=>(
      <li key ={listItem.id}>{listItem.name}</li>
     ))}
     </ul>
     <Pagination
     currentPage ={currentPage}
     itemsPerPage ={Math.ceil(dummyData.length / itemList)}
     onPageChange={handleChange}
     />
    </div>
  );
}
