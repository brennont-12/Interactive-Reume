"use strict";

// Define types for blog post data

// Apply social media hover effects
function setupSocialIcons() {
  var socialIcons = document.querySelectorAll('.social-media a');
  socialIcons.forEach(function (icon) {
    icon.addEventListener('mouseover', function () {
      this.style.backgroundColor = 'rgb(31, 151, 184)';
      this.style.transform = 'scale(1.5) translateY(-0.5rem)';
      this.style.transition = '0.2s ease';
    });
    icon.addEventListener('mouseout', function () {
      this.style.backgroundColor = 'transparent';
      this.style.transform = 'scale(1)';
    });
  });
}

// Populate blog posts from data
function generateBlogPosts() {
  // Blog posts data array
  var blogPosts = [{
    title: "Building My First React Application",
    date: "March 1, 2025",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia eleifend mi nisi volutpat mauris. Vel elit sagittis egestas quisque ante lobortis. Sit fusce semper etiam nunc lectus vulputate rutrum. Elit etiam eu litora fringilla tortor pulvinar suspendisse. Penatibus in taciti sit sapien ac ac. Primis faucibus egestas mollis felis porttitor tincidunt consectetur finibus.",
    link: "https://react.dev/"
  }, {
    title: "My Experience at UMaine",
    date: "February 15, 2025",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia eleifend mi nisi volutpat mauris. Vel elit sagittis egestas quisque ante lobortis. Sit fusce semper etiam nunc lectus vulputate rutrum. Elit etiam eu litora fringilla tortor pulvinar suspendisse. Penatibus in taciti sit sapien ac ac. Primis faucibus egestas mollis felis porttitor tincidunt consectetur finibus.",
    link: "https://umaine.edu/cs/undergraduate-degree-programs/"
  }, {
    title: "The Job Hunt: My Perspective as a Student",
    date: "January 20, 2025",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia eleifend mi nisi volutpat mauris. Vel elit sagittis egestas quisque ante lobortis. Sit fusce semper etiam nunc lectus vulputate rutrum. Elit etiam eu litora fringilla tortor pulvinar suspendisse. Penatibus in taciti sit sapien ac ac. Primis faucibus egestas mollis felis porttitor tincidunt consectetur finibus.",
    link: "https://www.linkedin.com/in/brennon-tiensivu/"
  }];
  var blogPostsContainer = document.querySelector('.blog-posts');
  if (blogPostsContainer) {
    blogPostsContainer.innerHTML = '';

    // Loop through the blog posts array
    blogPosts.forEach(function (post, index) {
      var article = document.createElement('article');
      article.className = 'blog-post';
      article.style.animationDelay = "".concat(index * 0.1, "s");
      article.innerHTML = "\n                <div class=\"post-header\">\n                    <h2>".concat(post.title, "</h2>\n                    <div class=\"post-meta\">\n                        <span class=\"post-date\"><i class=\"fa-regular fa-calendar\"></i> ").concat(post.date, "</span>\n                    </div>\n                </div>\n                <div class=\"post-content\">\n                    <p>").concat(post.content, "</p>\n                </div>\n                <a href=\"").concat(post.link, "\" class=\"read-more\">Read More <i class=\"fa-solid fa-arrow-right\"></i></a>\n            ");
      blogPostsContainer.appendChild(article);
    });
  } else {
    console.error("Blog posts container not found. Ensure the '.blog-posts' element exists in blog.html.");
  }
}

// Add more interactivity for the portfolio section
function setupPortfolioInteractivity() {
  var projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.03)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
      this.style.transition = 'all 0.3s ease';
    });
    item.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });
}

// Implement smooth scrolling
function setupSmoothScrolling() {
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        var targetId = href.substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Create a typing effect for skills section
function setupTypingEffect() {
  var typingElement = document.querySelector('.typing span');
  if (!typingElement) return;
  var skills = ['Software Developer', 'Student', 'Problem Solver'];
  var currentSkillIndex = 0;
  var currentCharIndex = 0;
  var isDeleting = false;
  var typingSpeed = 100;
  function type() {
    var currentSkill = skills[currentSkillIndex];
    if (isDeleting) {
      if (typingElement) {
        typingElement.textContent = currentSkill.substring(0, currentCharIndex - 1);
      }
      currentCharIndex--;
      typingSpeed = 50;
    } else {
      if (typingElement) {
        typingElement.textContent = currentSkill.substring(0, currentCharIndex + 1);
      }
      currentCharIndex++;
      typingSpeed = 100;
    }
    if (!isDeleting && currentCharIndex === currentSkill.length) {
      isDeleting = true;
      typingSpeed = 1000;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    }
    setTimeout(type, typingSpeed);
  }

  // Start the typing effect
  setTimeout(type, 1000);
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  setupSocialIcons();

  // Call the function to generate blog posts if we're on the blog page
  if (document.querySelector('.blog-posts')) {
    generateBlogPosts();
  }
  setupPortfolioInteractivity();
  setupSmoothScrolling();
  setupTypingEffect();
});