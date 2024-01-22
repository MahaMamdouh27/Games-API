import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Home {
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link)=>
        {
            link.addEventListener('click',() => {
                this.changeActiveLink(link)
                const category = link.dataset.category;
                this.getdata(category)
            });
        });

        this.details = document.getElementById('details')
        this.games = document.getElementById('games')
        this.nav = document.getElementById('nav')
        this.home = document.getElementById('home')

        
        this.ui = new Ui()
        // this.detailsSection = new Details()
        
        this.getdata('MMORPG')
    }

    async changeActiveLink(link){
        document.querySelector('.navbar-collapse .active').classList.remove("active");
        link.classList.add("active");

        
        // console.log(category)
        const categoryData = await this.getdata(category)
        
    }


    async getdata(cat){

        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'd5593f813bmsh0db764b9b24c6ebp1944ecjsn71cd640ae217',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
          };
        var apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` ,options );
        var finaldata = await apiResponse.json();
        console.log(finaldata); 


        this.ui.displayData(finaldata)

        document.querySelectorAll('.card').forEach((card)=>{
            card.addEventListener("click" , ()=>{
                this.details.classList.remove('d-none')
                this.games.classList.add('d-none')
                this.nav.classList.add('d-none')
                this.home.classList.add('d-none')
                new Details(card.dataset.id); 
            })
        })
    }
}
