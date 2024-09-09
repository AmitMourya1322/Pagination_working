function Pagination({currentPage,itemPerPage=10,onPageChange}){
    const generatNoOfPages=()=>{
      let page= [];
      for(let i=1;i<=itemPerPage;i++){
        page.push(i)
      }
      return page;
    }
  
    return(
  <>
  <button 
 
  onClick={()=>onPageChange(currentPage-1)}
  disabled={currentPage==1}
  >
    
    Prev
  </button>
  {generatNoOfPages().map((item)=>(
    <button 
    disabled={currentPage === item? true:false}
    key={item}
    onClick={()=>onPageChange(item)}
    >{item}</button>
  ))}
  <button
  onClick={()=>onPageChange(currentPage+1)}
  disabled={currentPage===itemPerPage}
  >Next</button>
  </>
  )
  
  }
  
  
  export default Pagination