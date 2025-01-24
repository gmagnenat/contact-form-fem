export function clearError(input: HTMLInputElement): void {
  const errorDiv = document.querySelector(
    `.${input.name}__error`
  ) as HTMLDivElement;

  if (errorDiv) {
    errorDiv.innerHTML = "";
    errorDiv.removeAttribute("role");
  }
}
