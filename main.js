import './style.css'

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
          <a href="#home" class="text-xl font-bold text-gray-800">John Doe</a>
          
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
          Passionate software engineering student with a strong foundation in full-stack development
          and a keen interest in cloud computing and artificial intelligence. Currently pursuing
          a Bachelor's degree in Computer Science with a focus on software engineering.
        </p>
      </section>

      <!-- Education Section -->
      <section class="mb-12">
        <h2 class="section-title">Education</h2>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
          <p class="text-gray-600">University of Technology</p>
          <p class="text-gray-600">Expected Graduation: May 2024</p>
          <p class="text-gray-700 mt-2">GPA: 3.8/4.0</p>
          <p class="text-gray-700">Relevant Coursework:</p>
          <ul class="list-disc list-inside text-gray-700 ml-4">
            <li>Data Structures and Algorithms</li>
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
            <span class="skill-tag">SQL</span>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Technologies & Frameworks</h3>
          <div class="flex flex-wrap">
            <span class="skill-tag">React</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Express</span>
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Docker</span>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mb-12">
        <h2 class="section-title">Experience</h2>
        <div class="bg-white p-6 rounded-lg shadow-md mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Software Development Intern</h3>
          <p class="text-gray-600">Tech Solutions Inc. - Summer 2023</p>
          <ul class="list-disc list-inside text-gray-700 mt-2">
            <li>Developed and maintained features for a customer-facing web application</li>
            <li>Collaborated with senior developers on code reviews and testing</li>
            <li>Implemented responsive design improvements that increased mobile usage by 25%</li>
          </ul>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="mb-12">
        <h2 class="section-title">Projects</h2>
        <div class="project-card">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">E-Commerce Platform</h3>
          <p class="text-gray-700 mb-2">
            Built a full-stack e-commerce platform using MERN stack (MongoDB, Express, React, Node.js).
            Implemented user authentication, product catalog, and shopping cart functionality.
          </p>
          <div class="flex flex-wrap">
            <span class="skill-tag">React</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">MongoDB</span>
          </div>
        </div>
        <div class="project-card">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Weather Dashboard</h3>
          <p class="text-gray-700 mb-2">
            Developed a weather dashboard application that displays current weather and forecasts
            using OpenWeatherMap API. Features include location search and responsive design.
          </p>
          <div class="flex flex-wrap">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">API Integration</span>
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
                <a href="mailto:john.doe@example.com" class="ml-2 hover:text-blue-600">
                  john.doe@example.com
                </a>
              </p>
              <p class="flex items-center text-gray-700">
                <i class="fab fa-github w-6"></i>
                <a href="https://github.com/johndoe" target="_blank" class="ml-2 hover:text-blue-600">
                  github.com/johndoe
                </a>
              </p>
              <p class="flex items-center text-gray-700">
                <i class="fab fa-linkedin w-6"></i>
                <a href="https://linkedin.com/in/johndoe" target="_blank" class="ml-2 hover:text-blue-600">
                  linkedin.com/in/johndoe
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
            <form class="space-y-4">
              <div>
                <label class="block text-gray-700 mb-2" for="name">Name</label>
                <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
              </div>
              <div>
                <label class="block text-gray-700 mb-2" for="email">Email</label>
                <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
              </div>
              <div>
                <label class="block text-gray-700 mb-2" for="message">Message</label>
                <textarea id="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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

// Render the entire application
function renderApp() {
  return `
    ${renderNav(isMenuOpen)}
    <main>${router()}</main>
    <footer class="text-center text-gray-600 mt-16 pb-8">
      <p>© 2024 John Doe. All rights reserved.</p>
    </footer>
  `;
}

// Initial render
document.querySelector('#app').innerHTML = renderApp();

// Handle route changes
window.addEventListener('hashchange', () => {
  document.querySelector('#app').innerHTML = renderApp();
});