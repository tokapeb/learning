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

var enemy = new lfenemies.enemy(1);
lfight.showChar(enemy);