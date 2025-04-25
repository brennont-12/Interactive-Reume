// Define types for blog post data
interface BlogPost {
    title: string;
    date: string;
    content: string;
    link: string;
}

// Apply social media hover effects
function setupSocialIcons(): void {
    const socialIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.social-media a');
    
    socialIcons.forEach((icon: HTMLElement) => {
        icon.addEventListener('mouseover', function(this: HTMLElement): void {
            this.style.backgroundColor = 'rgb(31, 151, 184)';
            this.style.transform = 'scale(1.5) translateY(-0.5rem)';
            this.style.transition = '0.2s ease';
        });
        
        icon.addEventListener('mouseout', function(this: HTMLElement): void {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'scale(1)';
        });
    });
}

// Populate blog posts from data
function generateBlogPosts(): void {
    // Blog posts data array
    const blogPosts: BlogPost[] = [
        {
            title: "Building My First React Application",
            date: "March 1, 2025",
            content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia eleifend mi nisi volutpat mauris. Vel elit sagittis egestas quisque ante lobortis. Sit fusce semper etiam nunc lectus vulputate rutrum. Elit etiam eu litora fringilla tortor pulvinar suspendisse. Penatibus in taciti sit sapien ac ac. Primis faucibus egestas mollis felis porttitor tincidunt consectetur finibus.",
            link: "https://react.dev/"
        },
        {
            title: "My Experience at UMaine",
            date: "February 15, 2025",
            content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia eleifend mi nisi volutpat mauris. Vel elit sagittis egestas quisque ante lobortis. Sit fusce semper etiam nunc lectus vulputate rutrum. Elit etiam eu litora fringilla tortor pulvinar suspendisse. Penatibus in taciti sit sapien ac ac. Primis faucibus egestas mollis felis porttitor tincidunt consectetur finibus.",
            link: "https://umaine.edu/cs/undergraduate-degree-programs/"
        },
        {
            title: "The Job Hunt: My Perspective as a Student",
            date: "January 20, 2025",
            content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia eleifend mi nisi volutpat mauris. Vel elit sagittis egestas quisque ante lobortis. Sit fusce semper etiam nunc lectus vulputate rutrum. Elit etiam eu litora fringilla tortor pulvinar suspendisse. Penatibus in taciti sit sapien ac ac. Primis faucibus egestas mollis felis porttitor tincidunt consectetur finibus.",
            link: "https://www.linkedin.com/in/brennon-tiensivu/"
        }
    ];
  
    const blogPostsContainer: HTMLElement | null = document.querySelector('.blog-posts');
    
    if (blogPostsContainer) {
        blogPostsContainer.innerHTML = '';
        
        // Loop through the blog posts array
        blogPosts.forEach((post: BlogPost, index: number) => {
            const article: HTMLElement = document.createElement('article');
            article.className = 'blog-post';
            article.style.animationDelay = `${index * 0.1}s`;
            
            article.innerHTML = `
                <div class="post-header">
                    <h2>${post.title}</h2>
                    <div class="post-meta">
                        <span class="post-date"><i class="fa-regular fa-calendar"></i> ${post.date}</span>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                </div>
                <a href="${post.link}" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
            `;
            
            blogPostsContainer.appendChild(article);
        });
    } else {
        console.error("Blog posts container not found. Ensure the '.blog-posts' element exists in blog.html.");
    }
}

// Add more interactivity for the portfolio section
function setupPortfolioInteractivity(): void {
    const projectItems: NodeListOf<HTMLElement> = document.querySelectorAll('.project-item');
    
    projectItems.forEach((item: HTMLElement) => {
        item.addEventListener('mouseenter', function(): void {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function(): void {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Implement smooth scrolling
function setupSmoothScrolling(): void {
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('nav a');
    
    navLinks.forEach((link: HTMLAnchorElement) => {
        link.addEventListener('click', function(event: MouseEvent): void {
            const href: string | null = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const targetId: string = href.substring(1);
                const targetElement: HTMLElement | null = document.getElementById(targetId);
                
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
function setupTypingEffect(): void {
    const typingElement: HTMLElement | null = document.querySelector('.typing span');
    if (!typingElement) return;
    
    const skills: string[] = ['Software Developer', 'Student', 'Problem Solver'];
    let currentSkillIndex: number = 0;
    let currentCharIndex: number = 0;
    let isDeleting: boolean = false;
    let typingSpeed: number = 100;
    
    function type(): void {
        const currentSkill: string = skills[currentSkillIndex];
        
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
document.addEventListener('DOMContentLoaded', function(): void {
    setupSocialIcons();
    
    // Call the function to generate blog posts if we're on the blog page
    if (document.querySelector('.blog-posts')) {
        generateBlogPosts();
    }
    
    setupPortfolioInteractivity();
    setupSmoothScrolling();
    setupTypingEffect();
    
});

