const form= document.getElementById("user-form");

form.addEventListener('submit', async(event)=>{
    event.preventDefault();

    const name= document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;

    try{
        const response= await fetch(`https://test-api-v3.myways.ai/user?email=${email}`);

        if(response.status===200)
        {
            alert('User Found');
        }
        else{
            const createUserResponse= await fetch(`https://test-api-v3.myways.ai/user`,
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'},
                    body:JSON.stringify({name,email,phone})

            });

            if(createUserResponse.status===200){
                alert('Error Creating User');
            }
        }
    }

    catch(error)
    {
        console.error('Error',error);
        alert('Error Occured');
    }
});