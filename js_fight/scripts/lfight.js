/**
 * Created by lokoskornel on 3/19/16.
 */
var lfight = lfight || {};

lfight.minStr = 3;
lfight.maxStr = 18;
lfight.minDex = 3;
lfight.maxDex = 18;
lfight.minHp = 20;
lfight.maxHp = 40;

// Random number between 1 and n.
lfight.r = function(n) {
  return Math.floor(Math.random() * n + 1);
}

// Random number between min and max.
lfight.rmm = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// timesDside + plus, e.g.: 3D6+2.
lfight.d = function(times,side,plus) {
  result = 0;
  for (var i=0; i<times; i++) {
    result += lfight.r(side);
  }
  result += plus;
  return result;
}

// Initial values for character.
lfight.charGenPC = {
  pcstr : lfight.rmm(lfight.minStr, lfight.maxStr),
  pcdex : lfight.rmm(lfight.minDex, lfight.maxDex),
  pchp : lfight.rmm(lfight.minHp, lfight.maxHp)
}

// Reroll values charachter.
lfight.reRoll = function() {
  lfight.charGenPC.pcstr = lfight.rmm(lfight.minStr, lfight.maxStr);
  lfight.charGenPC.pcdex = lfight.rmm(lfight.minDex, lfight.maxDex);
  lfight.charGenPC.pchp = lfight.rmm(lfight.minHp, lfight.maxHp);
}

// ShowCharPC
lfight.showChar = function(chr) {
  if (chr == "pc") {
    $(".player-tab .attribute.name .value").text(lfight.charGenPC.pcname);
    $(".player-tab .attribute.str .value").text(lfight.charGenPC.pcstr);
    $(".player-tab .attribute.dex .value").text(lfight.charGenPC.pcdex);
    $(".player-tab .attribute.hp .value").text(lfight.charGenPC.pchp);
  } else {
    $(".enemy-tab .attribute.name .value").text(chr.name);
    $(".enemy-tab .attribute.str .value").text(chr.str);
    $(".enemy-tab .attribute.dex .value").text(chr.dex);
    $(".enemy-tab .attribute.hp .value").text(chr.hp);
  }
}
