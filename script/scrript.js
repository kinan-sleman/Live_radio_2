// class Player 
class Player{
    constructor(){
        this.main = document.getElementById("main");
        this.img = document.getElementById("img");
        this.main.style.height = screen.height-500+ "px"; 
        if(screen.width <= 500){
            this.main.style.width = screen.width + "px";
        }
        this.content = document.getElementById("content");
        this.content.style.height = screen.height-350 + "px";
        document.getElementById("body").style.width = screen.width + "px";
        document.getElementById("body").style.height = screen.height + "px";
    }
}
// class audio player
class Audioplayer{
    constructor(){
        this.Message = ` 
    أهلاً وسهلاً بك 
    اختر المحطة التي تريدها واضغط على زر التشغيل
    نتمنى لك وقتاً سعيداً
    `;
        if(localStorage.getItem("hi") == null){
            alert(this.Message);    
        }
        localStorage.setItem("hi",this.Message)
        this.audio = document.getElementById("audio");
        this.play_pause_button = document.getElementById("play_pause_button");
        this.pleaseWait = document.getElementById("pleaseWait");
        this.Hide_pleaseWait();
        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause();
        });
        document.getElementsByClassName("dropbtn")[0].addEventListener("click",()=>{
            this.myFunction();    
        });
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        }
    }
    play_pause(){
        if(this.play_pause_button.getAttribute("src") == "../img/play.png"){
            this.play_pause_button.setAttribute("src","../img/pause.png");
            this.audio.play();
            if(this.audio.networkState == 2){
                this.Show_pleaseWait();
            }
            this.audio_Event();
            }else if(this.play_pause_button.getAttribute("src") == "../img/pause.png"){
                this.play_pause_button.setAttribute("src","../img/play.png");
                this.audio.pause();
                this.Hide_pleaseWait();
            }
        this.audio_Event();
    }
    audio_Event(){
        this.audio.addEventListener("loadeddata",()=>{
            this.Hide_pleaseWait();
        });
    }
    Show_pleaseWait(){
        this.pleaseWait.style.display = "inline";
    }
    Hide_pleaseWait(){
        this.pleaseWait.style.display = "none";
    }
    /* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }
        
    keep_play(){
        if(this.play_pause_button.getAttribute("src") == "../img/play.png"){
            this.play_pause_button.setAttribute("src","../img/pause.png");
        }
        // this.load_music();
        this.audio.play();
        this.audio_Event();
    }
}
onload = new Audioplayer();    
onload = new Player();
onload = ()=>{
    
}