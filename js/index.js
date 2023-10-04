console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const ageBadnessSum =
    parseInt(formElements.age.value) + parseInt(formElements.badness.value);
  console.log(data);
  console.log(
    `The age-badness-sum of ${formElements.firstName.value} is ${ageBadnessSum}`
  );
  console.log(event.target.elements);
  formElements.firstName.focus();
  event.target.reset();
});
