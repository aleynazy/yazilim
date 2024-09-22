const yorumEkleyen = {};


async function updateYorum(newYorum){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(newYorum.includes('.')){
            yorumEkleyen.text = newYorum;
            resolve("Yorum başarıyla eklendi")
        } else {
            reject(new Error("Geçersiz Yorum"));
        }
        }, 1000);
    })
}

document.getElementById("yorum").addEventListener("submit", async (event)=> {

    event.preventDefault();

    const yInput = document.getElementById("username").value;
    const resultDiv = document.getElementById("result");
    const yorumInfoDiv = document.getElementById("yorumInfo");

     try{

         const result = await updateYorum(yInput); 
         resultDiv.textContent= result;

         yorumInfoDiv.textContent = `Yeni eklenen yorum ${yorumEkleyen.username} - ${yorumEkleyen.yorum1}`;
         yorumInfoDiv.style.color = "white";

     
 } catch (error) {
    resultDiv.textContent = error.message;
    resultDiv.style.color= "red";
 }
});