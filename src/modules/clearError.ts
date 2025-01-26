export function clearError(input: HTMLInputElement): void {
  const errorDiv = document.querySelector(
    `#${input.name}-error`
  ) as HTMLDivElement;

  const inputElement = document.querySelector(
    `[name="${input.name}"]`
  ) as HTMLElement;

  console.log(inputElement);

  inputElement?.classList.remove("highlighted");

  if (errorDiv) {
    errorDiv.innerHTML = "";
    errorDiv.removeAttribute("role");
  }
}
