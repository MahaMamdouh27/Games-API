import { Ui } from "./ui.module.js"

export class Details {
    constructor(id){
        document.getElementById('btn-close').addEventListener('click' , ()=>{
            document.getElementById('details').classList.add('d-none')
            document.getElementById('games').classList.remove('d-none')
            document.getElementById('nav').classList.remove('d-none')
            document.getElementById('home').classList.remove('d-none')
        });

        this.getDetails(id);
    }

    async getDetails(id){
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'd5593f813bmsh0db764b9b24c6ebp1944ecjsn71cd640ae217',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
          };
        var apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` ,options );
        var response = await apiResponse.json();
        console.log(response);

        new Ui().displayDetails(response);

    }
}