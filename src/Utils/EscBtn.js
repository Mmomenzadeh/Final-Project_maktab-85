export const EscBtn = (event , close , reset ) => {
  const KeyCode = event.keyCode;
  if (KeyCode === 27) {
    close(false);
  }
};
