export function getDOMElements() {
  const form = document.querySelector(".contact-form")! as HTMLFormElement;
  const firstName = document.querySelector(".firstName")! as HTMLInputElement;
  const lastName = document.querySelector(".lastName")! as HTMLInputElement;
  const email = document.querySelector(".email")! as HTMLInputElement;
  const queryType = document.querySelector(".queryType")! as HTMLInputElement;
  const message = document.querySelector(".message")! as HTMLTextAreaElement;
  const consent = document.querySelector(".consent")! as HTMLInputElement;
  const dialog = document.querySelector(".dialog")! as HTMLDialogElement;

  if (
    !form ||
    !firstName ||
    !lastName ||
    !email ||
    !queryType ||
    !message ||
    !consent ||
    !dialog
  ) {
    throw new Error("One or more elements not found");
  }

  return {
    form,
    firstName,
    lastName,
    email,
    queryType,
    message,
    consent,
    dialog,
  };
}
