var images = [
"http://thenerdstash.com/wp-content/uploads/2016/07/monster_hunter_generations-1920x1080.jpg",
"https://images7.alphacoders.com/585/585064.jpg",
"https://i.pinimg.com/originals/8f/4d/cc/8f4dcc132ac16d02741ba8fc8164188f.jpg",
"https://images4.alphacoders.com/634/634424.jpg",
"https://i.pinimg.com/originals/4a/34/e6/4a34e6e3a0ad891ebd220145e4d1ef32.jpg",
"https://i.imgur.com/QLseHAa.jpg",
"https://i.pinimg.com/originals/9a/57/4c/9a574c5917515c48ef2ff1f372ed5af5.jpg",
"https://i.pinimg.com/originals/3d/63/7b/3d637b294ee324f97628a30e4d611066.jpg",
"https://images3.alphacoders.com/163/thumb-1920-163915.jpg",
"https://s.candybanana.com/images/4204/126c947e-5968-4305-b04d-6a813bcb26b3_Wildlands_Waste_Screen_011_1502985001.jpg",
"https://static.trueachievements.com/customimages/067482.jpg",
"https://cdn3.dualshockers.com/wp-content/uploads/2017/06/MHWorld_E3_art1.jpg",
"https://cdn3.dualshockers.com/wp-content/uploads/2017/09/MonsterHunterWorld-30.jpg",
"https://s.candybanana.com/images/4d21/e96fe93a-6106-4299-af6b-be92a5ff00c1_Wildlands_Waste_Screen_010_1502984997.jpg",
"https://s.candybanana.com/images/4145/ebb65ab5-6bef-49ae-8b73-62a8f061148f_Wildlands_Waste_Screen_009_1502984993.jpg",
"https://fextralife.com/wp-content/uploads/2017/06/MHWorld_E3Screen4_bmp_jpgcopy.jpg",
"https://s.candybanana.com/images/7e42/00ffb6ca-8655-494c-b9f4-71aa2625f23d_Wildlands_Waste_Screen_003_Scatternut_1502984967.jpg",
"https://cdn.wccftech.com/wp-content/uploads/2017/06/mh_world_running.jpg"]

var rand = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = 'url(' + rand + ')';

var ps4DownDate = new Date("Jan 26, 2018 00:00:00").getTime();
var pcDownDate = new Date("Sep 22, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var difference = ps4DownDate - now;
  var day = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementById("ps4Rel").innerHTML = day + " days, " + hour + " hours, "
  + minute + " minutes and " + second + " seconds ";
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("ps4Rel").innerHTML = "IT'S OUT";
  }
}, 1000);

var y = setInterval(function() {
  var now = new Date().getTime();
  var difference = pcDownDate - now;
  var day = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementById("pcRel").innerHTML = day + " days, " + hour + " hours, "
  + minute + " minutes and " + second + " seconds ";
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("pcRel").innerHTML = "IT'S OUT";
  }
}, 1000);
