function gameObject(){
    const ourNestedObj = {
      home : {
        teamName : "Brooklyn Nets", 
        colors : ["Black", "White"], 
        players : {
          "Alan Anderson" : {
            number : 0, 
            shoe : 16, 
            points : 22, 
            rebounds : 12, 
            assists : 12, 
            steals : 3, 
            blocks : 1, 
            slamDanks : 1, 
          }, 
          "Reggie Evans" : {
            number : 30, 
            shoe : 14, 
            points : 12, 
            rebounds : 12, 
            assists : 12, 
            steals : 12, 
            blocks : 12, 
            slamDanks : 7, 
          }, 
          "Brook Lopez" : {
            number : 11, 
            shoe : 17, 
            points : 17, 
            rebounds : 19, 
            assists : 10, 
            steals : 3, 
            blocks : 1, 
            slamDanks : 15, 
          }, 
          "Mason Plumlee" : {
            number : 1, 
            shoe : 19, 
            points : 26, 
            rebounds : 12, 
            assists : 6, 
            steals : 3, 
            blocks : 8, 
            slamDanks : 5, 
          }, 
          "jason Terry" : {
            number : 31, 
            shoe : 15, 
            points : 19, 
            rebounds : 2, 
            assists : 2, 
            steals : 4, 
            blocks : 11, 
            slamDanks : 1, 
          }
        }
      }, 
      away : {
        teamName : "Charlotte Hornets", 
        colors : ["Turquoise", "Purple"], 
        players : {
          "Jeff Adrien" : {
            number : 4, 
            shoe : 18, 
            points : 10, 
            rebounds : 1, 
            assists : 1, 
            steals : 2, 
            blocks : 7, 
            slamDanks : 2, 
          }, 
          "Bismak Biyombo" : {
            number : 0, 
            shoe : 16, 
            points : 12, 
            rebounds : 4, 
            assists : 7, 
            steals : 7, 
            blocks : 15, 
            slamDanks : 10, 
          }, 
          "DeSagna Diop" : {
            number : 2, 
            shoe : 14, 
            points : 24, 
            rebounds : 12, 
            assists : 12, 
            steals : 4, 
            blocks : 5, 
            slamDanks : 5, 
          }, 
          "Ben Gordon" : {
            number : 8, 
            shoe : 15, 
            points : 33, 
            rebounds : 3, 
            assists : 2, 
            steals : 1, 
            blocks : 1, 
            slamDanks : 0, 
          }, 
          "Brendan Haywood" : {
            number : 33, 
            shoe : 15, 
            points : 6, 
            rebounds : 12, 
            assists : 12, 
            steals : 22, 
            blocks : 5, 
            slamDanks : 12, 
          }
        }
      }
    };
  
    return ourNestedObj;
  };
  
  function numPointsScored(playerName){
    // returns the number of points scored for that player.
    let obj = gameObject();
  
    let output;
  
    if(obj.home.players[playerName]){
      output = obj.home.players[playerName].points;
    }else if(obj.away.players[playerName]){
      output = obj.away.players[playerName].points;
    }else{
      output = false;
    };
  
    return output;
  };
  
  function shoeSize(playerName){
    let obj = gameObject();
  
    let output;
  
    if(obj.home.players[playerName]){
      output = obj.home.players[playerName].shoe;
    }else if(obj.away.players[playerName]){
      output = obj.away.players[playerName].shoe;
    }else{
      output = false;
    };
  
    return output;
  };
  
  function teamColors(title){
    let obj = gameObject();
  
    let output;
  
    if(obj.away.teamName === title){
      output = obj.away.colors;
    }else if(obj.home.teamName === title){
      output = obj.home.colors;
    }else{
      output = false;
    };
  
    return output;
  };
  
  function teamNames(){
    let obj = gameObject();
  
    let arr = [];
  
    if(obj.away.teamName || obj.home.teamName){
      arr.push(obj.away.teamName);
      arr.push(obj.home.teamName);
    }
  
    return arr;
  };
  
  function playerNumbers(title){
    let obj = gameObject();
  
    let output = [];
  
    if(obj.away.teamName === title){
      const participantObj = obj.away.players;
      for(const player in participantObj){
        const playerObj = participantObj[player];
        output.push(playerObj.number)
      };
    }else if(obj.home.teamName === title){
      const participantObj = obj.home.players;
      for(const player in participantObj){
        const playerObj = participantObj[player];
        output.push(playerObj.number)
      };
    }else{
      output = false;
    };
  
    return output;
  };
  
  function playerStats(playerName){
    let obj = gameObject();
  
    let output;
  
    if(obj.away.players[playerName]){
      output = obj.away.players[playerName];
    }else if(obj.home.players[playerName]){
      output = obj.home.players[playerName];
    }else{
      output = false;
    };
  
    return output;
  };
  
  function bigShoeRebounds(){
    let obj = gameObject();
  
    let output;
  
    let shoeSizeCounter = 0;
  
    for(let player in obj.away.players){
      if(obj.away.players[player].shoe > shoeSizeCounter){
        shoeSizeCounter = obj.away.players[player].shoe;
      };
  
      if(obj.away.players[player].shoe === shoeSizeCounter){
        output = obj.away.players[player].rebounds;
      };
    };
  
    for(let player in obj.home.players){
      if(obj.home.players[player].shoe > shoeSizeCounter){
        shoeSizeCounter = obj.home.players[player].shoe;
      };
  
      if(obj.home.players[player].shoe === shoeSizeCounter){
        output = obj.home.players[player].rebounds;
      };
    };
  
    return output;
  };