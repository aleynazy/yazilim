document.getElementById("sl-form").addEventListener("submit", (event)=>{
    event.preventDefault();
    const SLContent = document.getElementById("SL").value;
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title: SLContent})
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Ağ yanıtı uygun değil");
        }
        return response.json();
    })
    .then(data => {
        const slList = document.getElementById("sl-list");
        const li = document.createElement("li");
        li.textContent = data.title;
        slList.appendChild(li);
        document.getElementById("sl-form").reset();
    })
    .catch(error => console.log("Hata", error));
});