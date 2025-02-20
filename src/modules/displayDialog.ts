export function displayDialog(dialog: HTMLDialogElement): void {
  dialog.showModal();

  // scroll to the top of the page
  window.scrollTo(0, 0);

  dialog.querySelector(".btn--dialog-close")?.addEventListener("click", () => {
    dialog.close();
  });
}
