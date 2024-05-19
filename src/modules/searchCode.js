import ajaxSevice from "./ajaxService";


const searchCode = ()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        const resultElement = document.querySelector('.result');
        const errorMessageElement = document.querySelector('.error-message');
        let searchResponse;
        ajaxSevice(searchTerm)
        .then(result => {searchResponse = result;
            if (searchResponse.data && searchResponse.data.length > 0) {
                resultElement.value = searchResponse.data[0].post_code;
                errorMessageElement.style.display = 'none';
            } else {
                resultElement.value = '';
                errorMessageElement.style.display = 'block';
            }
        })
        .catch(() => {
            resultElement.value = '';
            errorMessageElement.style.display = 'block';
        });
     
    })

}
export default searchCode