  document.getElementById("fetchGaleri").addEventListener("click", function() {
              const url = "https://picsum.photos/800/400?random=${i}";

               fetch(url)
               .then((response) => response)
               .then((data) => {
                   const galeriShow = document.getElementById("galeriShow");
                    galeriShow.innerHTML = "";
                data?.products?.map((item) => {
                       const galeri = Math.floor(Math.random() * data.results.length);

                       const title = document.createElement("div");
                      title.innerHTML = item.title;

                       const thumbnail = document.createElement("img");
                       thumbnail.src = item.thumbnail;
                       thumbnail.style.width= "200px";


                       const galeriBox = document.createElement("div");
                       galeriBox.style.background = color;

                       title.classList.add("title");
                      thumbnail.classList.add("thumbnail");
                      galeriBox.classList.add("galeriBox");

                   galeriShow.appendChild(title);
                       galeriShow.appendChild(thumbnail);
                   galeriShow.appendChild(galeriBox);
                   });
               })
               .catch((err) =>{
                  console.log("err", err);
                    
              })
            })

