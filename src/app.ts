import { clearError } from "./modules/clearError";
import { getDOMElements } from "./utils/getDOMElements";
import { handleSubmit } from "./modules/formHandler";

function init() {
  window.addEventListener("DOMContentLoaded", () => {
    const elements = getDOMElements();

    const { form } = elements;
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        clearError(input as HTMLInputElement);
      });
    });

    form.addEventListener("submit", (event: SubmitEvent) =>
      handleSubmit(event, elements)
    );
  });
}

init();
