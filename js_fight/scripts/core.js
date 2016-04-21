/**
 * Created by lokoskornel on 3/19/16.
 */
$('#new-character-tbn').click(function() {
  lfight.reRoll();
  $(lfmodals.createChrModal()).dialog({
    appendTo: "#modal",
    buttons: [
      {
        text: "Ok",
        icons: {
          primary: "ui-icon-plus"
        },
        click: function() {
          lfight.charGenPC.pcname = $('input#name').val();
          lfight.showChar('pc');
          $( this ).dialog( "destroy" );
        }
      },
      {
        text: "Reroll",
        icons: {
          primary: "ui-icons-refresh"
        },
        click: function() {
          $( this ).dialog( "destroy" );
          lfight.reRoll();

          $(lfmodals.createChrModal()).dialog({
            appendTo: "#modal",
            buttons: [
              {
                text: "Ok",
                icons: {
                  primary: "ui-icon-plus"
                },
                click: function() {
                  lfight.charGenPC.pcname = $('input#name').val();
                  lfight.showChar('pc');
                  $( this ).dialog( "destroy" );
                }
              }

            ]
          });
        }
      }

    ]
  });
});

mapKey = {
  "m" : 109,
  "s": 115,
  "f": 102,
  "eof": 10
}

function addTile(type, x ,y) {
  tile = '';
  tile = '<span class="tile '+ type +'" data-pos-x="x" data-pos-y="y"></span>';
  return tile;
}

$('#load-map').click(function() {
  $.get("../data/data.txt", function(data) {
    dataMap = '';
    logPlace = $('#center-log');
    log.add(logPlace, dataMap);
    var character;
    for (character in data) {
      switch (data[character].charCodeAt()) {
        case mapKey.m:
          dataMap += addTile('mezo', 0, 0);
          break;
        case mapKey.s:
          dataMap += addTile('sivatag', 0, 0);
          break;
        case mapKey.f:
          dataMap += addTile('folyo', 0, 0);
          break;
        default:
          dataMap += '<br class="map-br">';
      }
    }
    log.add(logPlace, dataMap);
  });

  data = null;
});

var enemy = new lfenemies.enemy(1);
lfight.showChar(enemy);