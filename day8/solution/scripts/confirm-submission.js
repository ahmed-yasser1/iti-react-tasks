let sbtn = document.querySelector(`input[type='submit']`);

sbtn.onclick = function confirmSubmit(e) {
  let data = prompt(`Do you want to continue? (y/n)`);
  if (data === "y") {
    document.getElementsByTagName(`form`)[0].submit();
  }
  return false;
};
