// Fetch the JSON file containing the course data from GitHub Pages
fetch('https://raw.githubusercontent.com/alay0822/CV_html5/main/CSS/courses.json')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    const coursesList = document.getElementById('courses-list');
    
    // Loop through the courses and display them
    data.courses.forEach(course => {
      const courseItem = document.createElement('div');
      courseItem.classList.add('course-item');
      
      courseItem.innerHTML = `
        <h3>${course.code} - ${course.description}</h3>
        <p><strong>Year Level:</strong> ${course.year_level}</p>
        <p><strong>Semester:</strong> ${course.sem}</p>
        <p><strong>Credits:</strong> ${course.credit}</p>
      `;
      
      coursesList.appendChild(courseItem);
    });
  })
  .catch(error => {
    console.error('Error fetching the courses data:', error);
  });
