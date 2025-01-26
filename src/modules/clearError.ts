export function clearError(input: HTMLInputElement): void {
  const errorDiv = document.querySelector(
    `.${input.name}__error`
  ) as HTMLDivElement;

  const inputElement = document.querySelector(
    `[name="${input.name}"]`
  ) as HTMLElement;

  inputElement?.classList.remove("highlighted");

  if (errorDiv) {
    errorDiv.innerHTML = "";
    errorDiv.removeAttribute("role");
  }
}
