document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("send").addEventListener("click", ()=>{
        let formData = new FormData();
        formData.append("name", document.getElementById("name").value);
        formData.append("idnumber", document.getElementById("idnumber").value);
        formData.append("password", document.getElementById("password").value);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://httpbin.org/post", true);
        xhr.onload = ()=>{
            if(xhr.status===200){
                console.log(xhr.responseText);
            }else{
                console.error(xhr.statusText);
            }
        };

        xhr.onerror = ()=>{
            console.error("Request error");
        }

        xhr.send(formData);
    });
});

document.getElementById("Cancel").addEventListener("click", ()=>{
    alert("Please, answer the form");
})
