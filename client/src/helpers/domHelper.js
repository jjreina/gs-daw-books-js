export const createOption = (value, text) => {
  const option = document.createElement("option");
  option.value = value;
  option.text = text;
  return option;
};

export const cleanSelect = (select, img, text, srcImage) => {
  select.innerHTML = "";
  let option = createOption(text, text);
  select.appendChild(option);
  img.src = srcImage;
};
