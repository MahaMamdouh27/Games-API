export class Ui {
  constructor() {}

  displayData(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
    <div class="">
      <div data-id="${data[i].id}" class="card bg-transparent" style="width: 18rem;">
         <div class="cardBody">
           <img src='${data[i].thumbnail}' class="w-100" />
           <div class="card-body d-flex justify-content-between align-items-center px-0 py-3">
             <h5 class="card-title text-white m-0">${data[i].title}</h5>
             <a href="#" class="btn btn-primary">free</a>
           </div>
           <p class="card-text mb-4">${data[i].short_description}</p>
         </div>
 
         <div class="footer d-flex justify-content-between">
           <span class="badge">${data[i].genre}</span>
           <span class="badge">${data[i].platform}</span>
         </div>
      </div> 
    </div>
            `;
    }
    document.getElementById("gamedate").innerHTML = gamesBox;
  }


  displayDetails(data){
    const box = `
    <div class="col-4">
      <img src="${data.thumbnail}" class="w-100"/>
    </div>
    <div class="col-8">
      <h3 class="text-white">Title : ${data.title}</h3>
      <p class="text-white">Category : <span class="badge">${data.genre}</span> </p>
      <p class="text-white">Platform : <span class="badge">${data.platform}</span> </p>
      <p class="text-white">Status : <span class="badge">${data.status}</span> </p>
      <p class="text-white">${data.description}</p>
      <a class="btn btn-outline-warning" href="#" role="button" target="_blank">Link</a>
    </div>
    `

    document.getElementById('detailsContent').innerHTML = box;
  }

}
