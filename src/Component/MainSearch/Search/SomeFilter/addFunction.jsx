export function showAge() {
  let result = false;
  const radios = document.getElementsByName("age");
  let ageFilter = 0;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      ageFilter = radios[i].dataset.age;
      if (i > 0) {
        result = true;
      }
      break;
    }
  }

  const getAllTeacherElemen = document.querySelectorAll(".catalog-main-item");
  const [start, end] = ageFilter.split("-").map(Number);
  for (let i = 0; i < getAllTeacherElemen.length; i++) {
    const age = parseInt(getAllTeacherElemen[i].dataset.age);
    if (age >= start && age <= end) {
      getAllTeacherElemen[i].classList.remove("classAge");
    } else {
      getAllTeacherElemen[i].classList.add("classAge");
    }
  }
  setTimeout(() => {
    checkTeacherList(getAllTeacherElemen);
  }, 100)

  return result;
}

export const togleVisible = (id) => {
  const element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};

export function pickCheckbox(name) {
  const checkboxes = document.querySelectorAll(`.${name}`);
  let selectedCheckboxes = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      selectedCheckboxes.push(checkbox.name);
    }
  });

  // selectedCheckboxes = selectedCheckboxes.join(", ");

  const option = checkOption(name);

  let arrAtribute = [];

  const getAllTeacherElemen = document.querySelectorAll(".catalog-main-item");
  for (let i = 0; i < getAllTeacherElemen.length; i++) {
    arrAtribute.push(getAllTeacherElemen[i].getAttribute(option.atribute));
  }

  let indexArr = [];

  for (let i = 0; i < arrAtribute.length; i++) {
    if (name === "important") {
      let arrOneTeacher = arrAtribute[i].split(", ");
      let results = arrOneTeacher.filter((item, index, array) => {
        return selectedCheckboxes.includes(item);
      });

      if (results.length === selectedCheckboxes.length) {
        indexArr.push(i);
        getAllTeacherElemen[i].classList.remove(option.giveClassName);
      } else if (!indexArr.includes(i)) {
        getAllTeacherElemen[i].classList.add(option.giveClassName);
      }
    } else {
      for (let j = 0; j < selectedCheckboxes.length; j++) {
        if (arrAtribute[i].includes(selectedCheckboxes[j])) {
          indexArr.push(i);
          getAllTeacherElemen[i].classList.remove(option.giveClassName);
        } else if (!indexArr.includes(i)) {
          getAllTeacherElemen[i].classList.add(option.giveClassName);
        }
      }
    }

    if (selectedCheckboxes.length === 0) {
      getAllTeacherElemen[i].classList.remove(option.giveClassName);
    }
  }

  setTimeout(() => {
    checkTeacherList(getAllTeacherElemen);
  }, 100)

  if (selectedCheckboxes.length > 0) {
    return true;
  }
}

const checkOption = (name) => {
  let giveClassName = "";
  let atribute = "";

  if (name === "lesson") {
    giveClassName = "classLesson";
    atribute = "data-lesson";
  } else {
    giveClassName = "classImportant";
    atribute = "data-important";
  }
  return { giveClassName: giveClassName, atribute: atribute };
};

export const checkTeacherList = (nodeList) => {
  let arrClassCount = 0;
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].classList.length === 1) {
      arrClassCount++;
    }
  }

  if (arrClassCount === 0) {
    document.querySelector(".catalog-main-notfound").style.display = "block";
  } else {
    document.querySelector(".catalog-main-notfound").style.display = "none";
  }
};
