function includeHTML(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(err => {
        console.error("Error loading file:", file, err);
      });
  }
  
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
  