import './style.css'
import emailjs from '@emailjs/browser';

emailjs.init("Y5ljGSnD80yBWkQbL");

// Router function to handle page navigation
function router() {
  const path = window.location.hash.slice(1) || 'home';
  const pages = {
    home: renderHome(),
    contact: renderContact()
  };
  
  return pages[path] || pages.home;
}

// Navigation component
function renderNav(isMenuOpen) {
  return `
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-30">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <a href="#home" class="text-xl font-bold text-gray-800">Owen Reedy</a>
          
          <!-- Desktop Navigation -->
          <div class="hidden lg:flex space-x-6">
            <a href="#home" class="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          <!-- Hamburger Button -->
          <button class="lg:hidden p-2" onclick="toggleMenu()">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="lg:hidden">
        <div class="bg-white absolute top-16 left-0 right-0 shadow-md ${isMenuOpen ? '' : 'hidden'}">
          <a href="#home" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" onclick="toggleMenu()">Home</a>
          <a href="#contact" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" onclick="toggleMenu()">Contact</a>
        </div>
      </div>
    </nav>
  `;
}

function renderHome() {
  return `
    <div class="max-w-4xl mx-auto px-4 py-8 pt-20">
      <!-- About Section -->
      <section class="mb-12">
        <h2 class="section-title">About Me</h2>
        <p class="text-gray-700">
          I am motivated Software Engineering Student who is seeking to gain
          experience within the field. Excited by the prospect of being
          involved with projects that can improve the lives of many. I aim to
          do so by using the experiences I have gained through leadership
          roles to effectively work with customers others.
        </p>
      </section>

      <!-- Education Section -->
      <section class="mb-12">
        <h2 class="section-title">Education</h2>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800">Bachelor of Science in Software Engineering</h3>
          <p class="text-gray-600">Auburn University</p>
          <p class="text-gray-600">Expected Graduation: May 2025</p>
          <p class="text-gray-700 mt-2">GPA: 3.26/4.0</p>
          <p class="text-gray-700">Relevant Coursework:</p>
          <ul class="list-disc list-inside text-gray-700 ml-4">
            <li>Introduction to Algorithms</li>
            <li>Software Engineering Principles</li>
            <li>Database Management Systems</li>
            <li>Web Development</li>
          </ul>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="mb-12">
        <h2 class="section-title">Technical Skills</h2>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Programming Languages</h3>
          <div class="flex flex-wrap">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag">C++</span>
            <span class="skill-tag">C#</span>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Technologies & Frameworks</h3>
          <div class="flex flex-wrap">
            <span class="skill-tag">React</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Pandas</span>
            <span class="skill-tag">.NET</span>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mb-12">
        <h2 class="section-title">Experience</h2>
        <div class="bg-white p-6 rounded-lg shadow-md mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Digital Intern</h3>
          <p class="text-gray-600">Michelin - Summer 2024</p>
          <ul class="list-disc list-inside text-gray-700 mt-2">
            <li>Developed and implemented a Python script to automate data processing for manufacturing operations, significantly enhancing efficiency and accuracy in reporting</li>
            <li>Leveraged Python's data manipulation libraries (Pandas) to streamline the extraction, transformation, and loading (ETL) processes from an Oracle Database into a usable format</li>
            <li>Integrated the processed data into a MicroStrategy report, reducing manual effort and error susceptibility, optimizing manufacturing workflows and providing insights critical for decision-making, enhancing overall operational functionality</li>
            <li>Assisted colleagues with digital tasks, including troubleshooting and resolving issues in Power BI reports</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Project Intern</h3>
          <p class="text-gray-600">Axis Group - Summer 2023</p>
          <ul class="list-disc list-inside text-gray-700 mt-2">
            <li>Implemented a search function for users to identify unused report fields using C# .NET to enhance existing 	software</li>
            <li>Collaborated with manager and mentor to gather requirements and develop implementation plan</li>
            <li>Utilized GitLab for version control, collaboration, and continuous integration</li>
          </ul>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="mb-12">
        <h2 class="section-title">Projects</h2>
        <div class="project-card">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Resume Website</h3>
          <p class="text-gray-700 mb-2">
            Built a resume website using Vite
          </p>
          <div class="flex flex-wrap">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">CSS</span>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderContact() {
  return `
    <div class="max-w-4xl mx-auto px-4 py-8 pt-20">
      <h2 class="section-title">Contact Me</h2>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <div class="space-y-4">
              <p class="flex items-center text-gray-700">
                <i class="fas fa-envelope w-6"></i>
                <a href="mailto:owen.reedy@outlook.com" class="ml-2 hover:text-blue-600">
                  owen.reedy@outlook.com
                </a>
              </p>
              <p class="flex items-center text-gray-700">
                <i class="fab fa-github w-6"></i>
                <a href="https://github.com/owenreedy" target="_blank" class="ml-2 hover:text-blue-600">
                  github.com/owenreedy
                </a>
              </p>
              <p class="flex items-center text-gray-700">
                <i class="fab fa-linkedin w-6"></i>
                <a href="https://www.linkedin.com/in/owen-reedy-8331081ab/" target="_blank" class="ml-2 hover:text-blue-600">
                  linkedin.com/in/owen-reedy
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
            <form id="contactForm" class="space-y-4" onsubmit="handleSubmit(event)">
              <div>
                <label class="block text-gray-700 mb-2" for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                >
              </div>
              <div>
                <label class="block text-gray-700 mb-2" for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                >
              </div>
              <div>
                <label class="block text-gray-700 mb-2" for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4" 
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div id="formStatus" class="hidden">
                <p class="text-green-600 font-medium"></p>
              </div>
              <button 
                type="submit" 
                class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize the application
let isMenuOpen = false;

// Add menu toggle function to window object
window.toggleMenu = function() {
  isMenuOpen = !isMenuOpen;
  document.querySelector('#app').innerHTML = renderApp();
};

// Handle form submission
window.handleSubmit = async function(event) {
  event.preventDefault();
  
  const form = event.target;
  const statusDiv = document.getElementById('formStatus');
  const statusText = statusDiv.querySelector('p');
  const submitButton = form.querySelector('button[type="submit"]');
  
  // Disable the submit button and show loading state
  submitButton.disabled = true;
  submitButton.innerHTML = 'Sending...';
  
  try {
    const templateParams = {
      from_name: form.name.value,
      reply_to: form.email.value,
      message: form.message.value,
    };

    await emailjs.send(
      'service_ppdfd5r', // Replace with your EmailJS service ID
      'template_lcjbsqc', // Replace with your EmailJS template ID
      templateParams
    );

    // Show success message
    statusDiv.classList.remove('hidden');
    statusText.textContent = 'Message sent successfully!';
    statusText.className = 'text-green-600 font-medium';
    form.reset();
  } catch (error) {
    // Show error message
    statusDiv.classList.remove('hidden');
    statusText.textContent = 'Failed to send message. Please try again.';
    statusText.className = 'text-red-600 font-medium';
  } finally {
    // Re-enable the submit button
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send Message';
  }
};

// Render the entire application
function renderApp() {
  return `
    ${renderNav(isMenuOpen)}
    <main>${router()}</main>
    <footer class="text-center text-gray-600 mt-16 pb-8">
      <p>© 2024 Owen Reedy. All rights reserved.</p>
    </footer>
  `;
}

// Initial render
document.querySelector('#app').innerHTML = renderApp();

// Handle route changes
window.addEventListener('hashchange', () => {
  document.querySelector('#app').innerHTML = renderApp();
});