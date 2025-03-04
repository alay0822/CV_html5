document.addEventListener("DOMContentLoaded", function() {
    fetch("https://alay0822.github.io/CV_html5/courses.json")
      .then(response => response.json())
      .then(data => {
        const coursesList = document.getElementById("courses-list");
        data.courses.forEach(course => {
          const courseItem = document.createElement("div");
          courseItem.classList.add("course-item");
          courseItem.innerHTML = `
            <p><strong>Year Level:</strong> ${course.year_level}</p>
            <p><strong>Semester:</strong> ${course.sem}</p>
            <p><strong>Code:</strong> ${course.code}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Credit:</strong> ${course.credit}</p>
          `;
          coursesList.appendChild(courseItem);
        });
      });
  });
  