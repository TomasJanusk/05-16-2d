import ajaxSevice from "./ajaxService";


const searchCode = ()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxSevice(searchTerm)
        .then(result => {searchResponse = result;
        if (searchResponse.data.length === 0) {
                alert('Tokio adreso nera')   
            }    
        })
        .then(()=>{console.log(searchResponse.data[0].post_code)}) 
        .then(()=>{document.querySelector('.result').value =searchResponse.data[0].post_code})
    })

}
export default searchCode