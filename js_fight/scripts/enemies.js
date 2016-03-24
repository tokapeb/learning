/**
 * Created by lokoskornel on 3/21/16.
 */
var lfenemies = lfenemies || {};

lfenemies.enemy = function(lvl) {
  switch (lvl) {
    case 1:
      this.name = "Goblin";
      this.str = lfight.rmm(3, 8);
      this.dex = lfight.rmm(3, 8);
      this.hp = lfight.rmm(8, 15);
      break;
    case 2:
      this.name = "Ork";
      this.str = lfight.rmm(3, 13);
      this.dex = lfight.rmm(3, 13);
      this.hp = lfight.rmm(15, 25);
      break;
    case 3:
      this.name = "Troll";
      this.str = lfight.rmm(8, 13);
      this.dex = lfight.rmm(8, 13);
      this.hp = lfight.rmm(20, 40);
      break;
    case 4:
      this.name = "Demon";
      this.str = lfight.rmm(12, 18);
      this.dex = lfight.rmm(12, 18);
      this.hp = lfight.rmm(30, 40);
      break;
    default:
      this.name = "Ember Rabszolga";
      this.str = lfight.rmm(lfight.minStr, lfight.maxStr);
      this.dex = lfight.rmm(lfight.minDex, lfight.maxDex);
      this.hp = lfight.rmm(lfight.minHp, lfight.maxHp);
  }
}
