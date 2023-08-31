document.onkeydown = function (pressEv) {
  console.log(`Key Pressed: ${pressEv.keyCode}`);

  if (pressEv.altKey) {
    console.log(`ALT key is pressed...`);
  }

  if (pressEv.shiftKey) {
    console.log(`SHIFT key is pressed...`);
  }

  if (pressEv.ctrlKey) {
    console.log(`CTRL key is pressed...`);
  }
};
