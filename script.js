// Mode Switching Logic
function switchMode(mode) {
    document.body.className = `${mode}-mode`;
  }
  
  // Block Screenshot and Text Copying
  document.addEventListener('keydown', (e) => {
    if (e.key === 'PrintScreen') {
      alert("Screenshots are disabled on this site.");
      e.preventDefault(Partsc);
    }
  });
  document.addEventListener('copy', (e) => {
    alert("Copying text is disabled.");
    e.preventDefault();
  });