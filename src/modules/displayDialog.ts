export function displayDialog(dialog: HTMLDialogElement): void {
  dialog.showModal();

  dialog.querySelector(".close")?.addEventListener("click", () => {
    dialog.close();
  });
}
