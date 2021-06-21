function submitForm(e) {
    e.preventDefault();
    let name = document.forms["form"]["name"].value;
    let roll = document.forms["form"]["roll"].value;
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("roll", roll);

    location.href = "startquiz.html";
  } 