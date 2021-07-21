var mainmenuOST = new Audio("src/ost/mainmenu.mp3")
var crowdSnd = new Audio("src/sounds/crowd.mp3")
// voiceover's to be randomly selected in game
var items = [
    "src/voiceovers/innkeeper_1.mp3",
    "src/voiceovers/innkeeper_2.mp3",
    "src/voiceovers/innkeeper_3.mp3"
    ]
// randomly selects an element from the array 'items'
var item = items[Math.floor(Math.random()*items.length)];
var hasPlayedTutorial_deserailized = JSON.parse(localStorage.getItem("hasPlayedTutorial"));
// converts the string into an audio element
var voiceover = new Audio(item);
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            document.getElementById('load').style.visibility="hidden";
            document.getElementById('load').style.opacity="0";
            document.getElementById('load').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
            var myGold = Number(localStorage.getItem('myGold'));
            if (typeof myGold === 'undefined') {
                var myGold = 0;
                localStorage.setItem('myGold', myGold.toString());
            }
            var myPacks = Number(localStorage.getItem('myPacks'));
            if (typeof myPacks === 'undefined') {
                var myPacks = 0;
                localStorage.setItem('myPacks', myPacks.toString());
            }
            document.getElementById("myGold").innerText = myGold + "🪙";
            document.getElementById("myPacks").innerText = myPacks;
            // make an element and set innerText to myPacks in mainmenu
            for (let i = 0; i < myPacks; i++) {
                createPack();
            }
            if (hasPlayedTutorial_deserailized === null) {
               tutorial();
            } else {
                mainmenuOST.play();
                mainmenuOST.volume = 0.7;
                setTimeout(function(){
                    voiceover.play();
                },550);
                if (typeof crowdSnd.loop == 'boolean')
                {
                    crowdSnd.loop = true;
                }
                else
                {
                    crowdSnd.addEventListener('ended', function() {
                        this.currentTime = 0;
                        this.play();
                    }, false);
                }
                crowdSnd.play();
                crowdSnd.volume = 0.5;
                document.querySelector('#blockmainmenu').style.display="block";
                document.getElementById('mainmenu').style.visibility="visible";
                document.getElementById('mainmenu').classList.add("zoomOutAnim");
                setTimeout(function() {
                    document.querySelector('#blockmainmenu').style.display="none";
                    document.getElementById('mainmenu').classList.remove("zoomOutAnim");
                },4000);
            }
        },1000);
    }
  }

  