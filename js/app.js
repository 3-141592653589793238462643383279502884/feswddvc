// Creates blueprint for each character's profile
class Character {
  constructor(firstName, age, icon, image, video, bio) {
    this._firstName = firstName;
    this._age = age;
    this._icon = icon;
    this._image = image;
    this._video = video;
    this._bio = bio;
  }
}

// Array of objects for each human
// Bio info from http://finalfantasy.wikia.com/wiki/
var human = [
  new Character(
    "cloud",
    "21",
    "../images/cloud.png",
    "../images/cloudfull.png",
    "https://www.youtube.com/embed/yRi-Y1Kq2AE?start=70&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=yRi-Y1Kq2AE;controls=0&amp;showinfo=0",
    "An arrogant and proud swordsman at first, Cloud introduces himself to AVALANCHE as a former member of an elite warrior unit called SOLDIER who has turned mercenary, and uninterested in anything beyond his hired task at hand. He later discovers more about his past and, with the help of his friends, learns there is more to being a hero than possessing physical strength and fame, developing compassion for the Planet and people he fights to protect. He fights to protect the Planet against his nemesis, Sephiroth."),

  new Character(
    "barret",
    "35",
    "../images/barret.png",
    "../images/barretfull.png",
    "https://www.youtube.com/embed/pHAhx4H5RLM?start=150&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=pHAhx4H5RLM;controls=0&amp;showinfo=0",
    "Barret fights passionately for his cause and cares greatly for his allies. His seemingly benevolent cause of fighting for the Planet is a cover for his personal vendetta and anger, which he later must come to terms with. Despite his brash and sometimes violent attitude, Barret has a good heart, and is torn between fighting and caring for his daughter, Marlene."),

  new Character(
    "tifa",
    "20",
    "../images/tifa.png",
    "../images/tifafull.png",
    "https://www.youtube.com/embed/rGyewQeARxw?start=72&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=rGyewQeARxw;controls=0&amp;showinfo=0",
    "Tifa is Cloud's childhood friend from Nibelheim, but lost contact with him years ago. When she meets him again, she convinces him to join AVALANCHE, the resistance group she is a member of, to fight Shinra Electric Power Company, whom she bears hatred for due to the destruction of their hometown. She supports Cloud as his comrade and helps him and his allies fight Sephiroth. Tifa is emotionally shy and empathic, acting as a motherly figure towards her allies when providing encouragement and emotional support."),

  new Character(
    "aeris",
    "22",
    "../images/aeris.png",
    "../images/aerisfull.png",
    "https://www.youtube.com/embed/-3OI7dw37h8?start=32&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=-3OI7dw37h8;controls=0&amp;showinfo=0",
    "Aeris is the last of the Cetra, an ancient race with powerful magical abilities, and so the Shinra Electric Power Company hunts her throughout her life, seeking to exploit her powers. She meets Cloud Strife in Midgar, and the two become close, leading her to join his quest to fight Shinra and hunt down Sephiroth. Aerith is upbeat, carefree and joyful, being flirtatious towards Cloud and also compassionate towards others."),

  new Character(
    "vincent",
    "57",
    "../images/vincent.png",
    "../images/vincentfull.png",
    "https://www.youtube.com/embed/yRi-Y1Kq2AE?start=170&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=yRi-Y1Kq2AE;controls=0&amp;showinfo=0",
    "Vincent is a man physically in his late twenties, and stands roughly six feet tall. He has crimson eyes and long black hair. He wears a red bandana with his fringe emerging over it. Vincent's most distinctive feature is his red cloak, held in place over his shoulders and lower face by several buckles. Underneath his cape Vincent's attire is black leather with several straps and buckles. Vincent wears a holster for his gun strapped to his right thigh, and pointed golden sabatons on his feet. He wears a golden gauntlet on his left arm.")
];

// Array of objects for each summon
var summon = [
  new Character (
  "ifrit",
  "Unknown",
  "../images/ifrit.png",
  "../images/ifritfull.png",
  "https://www.youtube.com/embed/Dv14noxyqO0?start=19&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=Dv14noxyqO0;controls=0&amp;showinfo=0",
  "Ifrit (イフリート, Ifurīto?), also called Jinn and Iflyte, is a Fire-elemental summon that appears in several games in the series. His signature attack is Hellfire, sometimes called Inferno or Flames of Hell, that deals Fire-elemental damage to all opponents. He is one of the most frequently appearing summons and is often a rival to the ice summon Shiva."),

  new Character (
  "odin",
  "Unknown",
  "../images/odin.png",
  "../images/odinfull.png",
  "https://www.youtube.com/embed/Dv14noxyqO0?start=175&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=Dv14noxyqO0;controls=0&amp;showinfo=0",
  "Odin is a demonic-looking knight with horns, a long, curved scimitar and a cape. This progressed to include a lance-type weapon called Gungnir. The horse Odin rides takes on demonic attributes as well, such as red eyes and body armor. Sleipnir, Odin's steed in Norse mythology, has eight legs. In some games in the series, Odin's steed has six legs."),

  new Character (
  "phoenix",
  "Unknown",
  "../images/phoenix.png",
  "../images/phoenixfull.png",
  "https://www.youtube.com/embed/Dv14noxyqO0?start=219&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=Dv14noxyqO0;controls=0&amp;showinfo=0",
  "Phoenix, also called Phenix, is a recurring summon in the Final Fantasy series. Unlike many summons, Phoenix has often appeared as a story element. Its summon commonly involves reviving knocked out party members, and is associated with the element of Fire; this ability is called Flames of Rebirth. Its down feathers have the same effect, but without the element."),

  new Character (
  "bahamut",
  "Unknown",
  "../images/bahamut.png",
  "../images/bahamutfull.png",
  "https://www.youtube.com/embed/Dv14noxyqO0?start=64&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=Dv14noxyqO0;controls=0&amp;showinfo=0",
  "Bahamut, sometimes known by his epithet The Dragon King, is one of the most prominent summons in the Final Fantasy series. Bahamut has appeared in several installments, as well as his own game, Bahamut Lagoon. He also appeared as an enemy in Super Mario RPG: Legend of the Seven Stars with the name of Bahamutt, in addition to being the namesake for the Sky Fortress Bahamut in Final Fantasy XII. Compilation of Final Fantasy VII has several species of Bahamut. A Bahamut-like summon called Gun Dragon appears in Final Fantasy: Unlimited."),

  new Character (
  "bahamutzero",
  "Unknown",
  "../images/bahamutzero.png",
  "../images/bahamutzerofull.png",
  "https://www.youtube.com/embed/Dv14noxyqO0?start=123&;autoplay=1&;mute=1&;loop=1&;rel=0&amp;&playlist=Dv14noxyqO0;controls=0&amp;showinfo=0",
  "Bahamut ZERO is a stronger form of Bahamut originating from Final Fantasy VII. Its signature attack is Teraflare. The Bahamut ZERO Materia can be found at the planetarium in Cosmo Canyon when the player touches the Blue Huge Materia, after having obtained both Bahamut and Neo Bahamut. Bahamut ZERO is the last Summon Materia to become available since the player must have first done all the Huge Materia sidequests, during which time the player can obtain the Shinra Sub and breed chocobo to get to places where the other Summon Materia are located.")
];

// delays page redirection by 1 second
var loadhome = () => {
  setTimeout(function(){
    window.location = "pages/home.html"
  }, 1000);
}

// Hides modal when clicking on the modal bg
var hideModal = () => {
  var modal = document.getElementById('modalbg');
  modal.style.display = "none";
}

// Onclick this function will be called in order to display proper info
var humanInfo = (humanName) => {
  var video = document.getElementById('backgroundvid');
  var modalbg = document.getElementById('modalbg');
  var modal = document.getElementById('closemodal');
  var pic = document.getElementById('characterpic');
  var name = document.getElementById('name');
  var age = document.getElementById('age');
  var bio = document.getElementById('bio');

  modalbg.style.display = "flex";

  for (let i = 0; i < human.length; i++) {
    if (humanName == human[i]._firstName) {
      pic.style.background = `url(${human[i]._image})`;
      pic.style.backgroundSize = "cover";
      name.innerHTML = `NAME: ${human[i]._firstName}`;
      name.style.textTransform = "capitalize";
      age.innerHTML = `AGE: ${human[i]._age}`;
      bio.innerHTML = `BIO: ${human[i]._bio}`;
      video.setAttribute("src", human[i]._video);
      modal.style.position = "absolute";
    }
  }
}

// Onclick this function will be called in order to display proper info
var summonInfo = (summonName) => {
  var video = document.getElementById('backgroundvid');
  var modalbg = document.getElementById('modalbg');
  var modal = document.getElementById('closemodal');
  var pic = document.getElementById('characterpic');
  var name = document.getElementById('name');
  var age = document.getElementById('age');
  var bio = document.getElementById('bio');

  modalbg.style.display = "flex";

  for (let i = 0; i < human.length; i++) {
    if (summonName == summon[i]._firstName) {
      pic.style.background = `url(${summon[i]._image})`;
      pic.style.backgroundSize = "cover";
      name.innerHTML = `NAME: ${summon[i]._firstName}`;
      name.style.textTransform = "capitalize";
      age.innerHTML = `AGE: ${summon[i]._age}`;
      bio.innerHTML = `BIO: ${summon[i]._bio}`;
      video.setAttribute("src", summon[i]._video);
      modal.style.position = "absolute";
    }
  }
}

// Slideshow in gallery page
var loadSlides = () => {
  var slideshow = document.getElementById('slideshow');
  var slides = [ "../images/slide1.jpg", "../images/slide2.png", "../images/slide3.jpg", "../images/slide4.jpg", "../images/slide5.jpg", "../images/slide6.jpg", "../images/slide7.jpg", "../images/slide8.jpg"];

  // Displays images in option divs
  for (let i = 0; i < slides.length; i++) {
    var option = document.getElementById(`option${i}`);
    option.setAttribute('src', slides[i]);
  }


  slideshow.style.background = `url(${slides[0]})`;
  slideshow.style.backgroundSize = "100% 100%";
}

var displaypic = (idname) => {
  var imagesrc = document.getElementById(idname).src;
  slideshow.style.background = `url(${imagesrc})`;
  slideshow.style.backgroundSize = "100% 100%";
}

var loadHumanIcons = () => {
  for (let i = 0; i < human.length; i++) {
    let humanicon = document.getElementById(human[i]._firstName);
    humanicon.style.background = `100% url(${human[i]._icon})`;
    humanicon.style.backgroundSize = "cover";
  }
}

var loadSummonIcons = () => {
  for (let i = 0; i < human.length; i++) {
    let summonicon = document.getElementById(summon[i]._firstName);
    summonicon.style.background = `100% url(${summon[i]._icon})`;
    summonicon.style.backgroundSize = "cover";
  }
}
