/**
 * Created by lokoskornel on 3/20/16.
 */
var lfmodals = lfmodals || {};

lfmodals.createChrModal = function() {
  lfmodals.createCharacter = [
    '<div id="dialog-form" title="Roll new Character">',
    '  <p class="validateTips">All form fields are required.</p>',
    '  <form>',
    '    <fieldset>',
    '      <label for="name">Name</label>',
    '      <input type="text" name="name" id="name" value="Anonymous" class="text ui-widget-content ui-corner-all">',
    '      <label for="str">Strength</label>',
    '      <p name="str">' + lfight.charGenPC.pcstr + '</p>',
    '      <label for="dex">Dexterity</label>',
    '      <p name="dex">' + lfight.charGenPC.pcdex + '</p>',
    '      <label for="hp">Hit points</label>',
    '      <p name="hp">' + lfight.charGenPC.pchp + '</p>',
    '      <!-- Allow form submission with keyboard without duplicating the dialog button -->',
    '      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">',
    '    </fieldset>',
    '  </form>',
    '</div>'
  ].join('');

  return lfmodals.createCharacter;
}
