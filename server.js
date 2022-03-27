//առաջին 10 տողը նույնությամբ գրիր, որպեսզի լոկալհոստ ունենաս
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('Indexp2.html');
});
server.listen(3005);

 grassArr = [];
 eaterArr = [];
 toxicGrassArr = [];
 WolfArr = [];
 WaterArr = [];

Grass = require("./Grass_Class")
Eater = require("./Eater")
ToxicGrass = require("./ToxicGrass")
Water = require("./Water")
Wolf = require("./Wolf")

var n = 50;
matrix = [];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < n; i++) {
  matrix[i] = [];
  for (let j = 0; j < n; j++) {
      matrix[i][j] = Math.floor(rand(0, 7))

  }
}


io.sockets.emit("send matrix", matrix)

// function WaterGenerator()
// {
//   for (let i = 0; i < Math.round((matrix.length)/20); i++)
//   {
//       let randX = Math.round(Math.random() * matrix.length)
//       let randY = Math.round(Math.random() * matrix.length)

//       WaterArr.push (new Water(randX,randY))
//       matrix[randY][randX] = 5;
//   }
// }

//WaterGenerator();

//io.sockets.emit("send matrix", matrix)

//այստեղ քո պատրաստի թվերով լցված զանգվածը ուղարկում ես կլիենտին:
//սոքեթի emit մեթոդը թույլ է տալիս առաջին արգումենտով ստեղծել իվենթի անունը,
//2-րդ արգումենտով ուղղարկել տվյալը, այն ինչ ուզում ես ուղարկել

// հիմա գնա կլիենտի ֆայլ

//.........................................լոադինգ

//եթե գնացիր ու ամենինչ գրեցիր, արի էստեղ, դեռ անելիք ունենք

//էստեղ բեր քո գազանիկների դատարկ զանգվածները


    //քանի որ քո կլասս-երը արդեն մոդուլներ են և ոչ մի կապ չունեն html ֆայլիդ հետ՝
    //այլ աշխատում են սերվերի վրա:
    //Դու պետք է նրանց իմպորտ անես: Ինձ մոտ նրանք երկուսն են, քեզ մոտ ավելի շատ
    //Այժմ լցնենք մատրիցը օբյեկտներով
    //սարքի մի հատ ֆունկցիա օրինակ createObject անունով
    //և էստեղ բեր քո սկրիպտ ֆայլի օբյեկտներով լցնող հատվածը


    function createObject()
    {
      for (var y = 0; y < matrix.length; y++)
      {
        for (var x = 0; x < matrix[y].length; x++)
        {
          if (matrix[y][x] == 1)
          {
            grassArr.push(new Grass(x, y));
          }
          else if (matrix[y][x] == 2)
          {
            eaterArr.push(new Eater(x, y));
          }
          else if (matrix[y][x] == 3)
          {
            toxicGrassArr.push(new ToxicGrass(x, y));
          }
          else if (matrix[y][x] == 4)
          {
            WolfArr.push(new Wolf(x, y));
          }
           else if (matrix[y][x] == 5)
           {
             WaterArr.push(new Water(x, y));
           }
        }
      }
      io.sockets.emit("send matrix", matrix)
    }



    //հիմա անցնենք նրանց վայրենի գործունեությանը
    //որևէ անունով կոչիր ֆունկցիադ և մեջը դիր մեթոդների հատվածը:

    function game()
    {
      for (var i in grassArr)
      {
        grassArr[i].mul();
      }
      for (var i in eaterArr)
      {
        eaterArr[i].eat();
      }
      for (var i in WolfArr)
      {
        WolfArr[i].eat();
      }
      io.sockets.emit("send matrix", matrix);
    }

    //մեր խաղի շարժը լինելու է 1 վարկյանը մեկ
    setInterval(game, 1000)



      // մինչև այժմ մենք ինքներս էինք դնում իվենթների անուննները,
      //օրինակ send matrix կամ ըըը... էլ չկա :D
      // էստեղ connection պատրասի իվենթի անուն է, որը աշխատում է այն ժամանակ,
      //երբ որևէ մեկը աշխատացնում է սերվերը՝ մտնում է սերվեր
      //և մենք դեռ չէինք կանչել createObject ֆունկցիան
      // էստեղ կկանչենք )))
io.on('connection', function (socket) {
    createObject();
})

var statistics = {};

// setInterval(function() {
//   statistics.Grass_CLass = grassArr.length;
//   statistics.Eater = eaterArr.length;
//   statistics.ToxicGrass = ToxicGrass.length;
//   //statistics.Water = Water.length;
//   statistics.Wolf = Wolf.length;
//   fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
//       console.log("send")
//   })
// },1000)
//դե ինչ այսօր այսքանը:

//ինձ համար շատ կարևոր է , որ հենց դու շատ լավ հասկանաս էս
//ամենը ու լինես լավագույնը քո ընտրած ոլորտում:



//Գիտեմ, որ լիիիիիքը սխալ կա մեջը: Դուք ճիշտը գրեք :PPPPP
