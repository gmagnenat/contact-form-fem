import { ZodFormattedError } from "zod";

export function displayErrors<T>(
  errors: ZodFormattedError<T>,
  form: HTMLFormElement
): void {
  let firstErrorElement: HTMLElement | null = null;

  (Object.keys(errors) as Array<keyof T>).forEach((key) => {
    const errorDiv = form.querySelector(
      `.${key as string}__error`
    ) as HTMLDivElement;
    const inputElement = form.querySelector(
      `[name="${key as string}"]`
    ) as HTMLElement;

    if (errorDiv) {
      const errorMessages = ((errors as any)[key]?._errors as string[]) || [];
      errorDiv.innerHTML = errorMessages
        .map((msg) => `<span>${msg}</span>`)
        .join("");
      errorDiv.setAttribute("role", "alert");

      if (!firstErrorElement) {
        firstErrorElement = inputElement;
        firstErrorElement.focus();
      }
    }
  });
}

export default displayErrors;
