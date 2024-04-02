let birthday = new Date("03-28-2024");

setInterval(() => {
    let now = new Date();
    let between = now - birthday;
    let saniye = Math.trunc(between / 1000) % 60;
    let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
    let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
    let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
    
    console.clear();
    
    let message = `${gun} gün ${saat} saat ${deqiqe} dakika ${saniye} saniye`;

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    console.log(`%c${message}`, `color: ${color}`);
}, 1000);

  console.log(saniye, deqiqe, saat, gun, il);
  
  console.log("%cHello world", "color:red; font-size:34px;")


// ########################################################################################################################################
  

// Task 2
  // let players = [
  //   {
  //       ad : "Quaresma",
  //       soyad : "Ricardo",
  //       yas : 40,
  //       Hobiler: ["Fenerin xeyallariyla oynamaq","Adam kecmek"],
  //       Performans:100
  //   },
  //   {
  //       ad : "Talisca",
  //       soyad : "Anderson",
  //       yas : 30,
  //       Hobiler: ["Muslerayla zarafat etmek XD","Qol atmaq"],
  //       Performans: 95
  //   },
  //   {
  //       ad : "Oguzan",
  //       soyad : "Ozyakup",
  //       yas : 31,
  //       Hobiler: ["Imza paslar atmaq","Menasiz qerarlar vermek"],
  //       Performans: 80
  //   },
  //   {
  //       ad : "Pepe",
  //       soyad : "Ferreira",
  //       yas : 41,
  //       Hobiler: ["Kariyer bitirmek","Messini yixmaq"],
  //       Performans: 65
  //   },
  //   {
  //       ad : "Gedson",
  //       soyad : "Fernandes",
  //       yas : 25,
  //       Hobiler: ["Galatasarla zarafatlasmaq","Mukemmel driblingler atmaq"],
  //       Performans: 89
  //   }, 
  // ];
  // let playerName = prompt("Ad daxil et: ")
  // let foundedplayers = players.filter((player) =>  player.ad.toLowerCase() === playerName.toLowerCase())
  // if (foundedplayers.length > 0) 
  //  foundedplayers.map((player) => {
  //    console.log(` ${player.ad} ${player.soyad}`);
  //  })  
  // else {
  //   console.log("Oyuncunun adini duzgun daxil edin ");
  // }
  
  
// ######################################################################################################################################


  // Task 3
  // let word = prompt("Bir soz daxil edin: ");
  // let length = word.length;
  // for (let i = 0; i < length * 2 - 1; i++) {
  //   let output = "";
  //   if (i < length) {
  //     for (let j = 0; j <= i; j++) {
  //       output += word[j];
  //     }
  //   } else {
  //     for (let j = 0; j < length - (i - length + 1); j++) {
  //       output += word[j];
  //     }
  //   }
  //   console.log(output);
  // }