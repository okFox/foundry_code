//ui.notifications.error
let dialog = new Dialog({
    title: `Pick A Lock`,
    content: `
  <div>Select the DC and the number of successes required.<div>
  <hr/>
  <form>
    <div class="form-group">
      <label for="dc"> DC: </label>
      <input id="dc" name="dc" type="number" min="1" max="60"/>
    </div>
    <div class="form-group">
      <label>Number of successes needed:</label>
      <input id="successes" name="successes" type="number" min="1" max="6"/>
    </div>
  </form>
  `,
    buttons: {
      start: {
        label: `Start Picking!`
        }
    },
    default: "start",
    render: html => console.log("rendering"),
    close: html => pickAttempt(),
});

dialog.render(true);
