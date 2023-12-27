export const fuchsia = () => {
  document.documentElement.classList.add("fuchsia");
  document.documentElement.classList.remove("cyan");
  document.documentElement.classList.remove("rose");
  document.documentElement.classList.remove("amber");
  document.documentElement.classList.remove("green");
  localStorage.setItem("favTheme", "fuchsia");
};

export const cyan = () => {
  document.documentElement.classList.add("cyan");
  document.documentElement.classList.remove("fuchsia");
  document.documentElement.classList.remove("rose");
  document.documentElement.classList.remove("amber");
  document.documentElement.classList.remove("green");
  localStorage.setItem("favTheme", "cyan");
};

export const rose = () => {
  document.documentElement.classList.add("rose");
  document.documentElement.classList.remove("cyan");
  document.documentElement.classList.remove("fuchsia");
  document.documentElement.classList.remove("amber");
  document.documentElement.classList.remove("green");
  localStorage.setItem("favTheme", "rose");
};

export const amber = () => {
  document.documentElement.classList.add("amber");
  document.documentElement.classList.remove("cyan");
  document.documentElement.classList.remove("fuchsia");
  document.documentElement.classList.remove("fuchsia");
  document.documentElement.classList.remove("green");
  localStorage.setItem("favTheme", "amber");
};

export const green = () => {
  document.documentElement.classList.add("green");
  document.documentElement.classList.remove("cyan");
  document.documentElement.classList.remove("fuchsia");
  document.documentElement.classList.remove("amber");
  document.documentElement.classList.remove("fuchsia");
  localStorage.setItem("favTheme", "green");
};
