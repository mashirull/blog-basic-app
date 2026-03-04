export const blog_data  = [
  {
    id: 1,
    title: "Getting Started with the MERN Stack in 2026",
    slug: "getting-started-with-mern-stack-2026",
    excerpt: "A beginner-friendly guide to understanding and building full-stack applications using MongoDB, Express, React, and Node.js.",
    content: "The MERN stack is one of the most popular technologies for building modern web applications. MERN stands for MongoDB, Express.js, React.js, and Node.js. All four technologies use JavaScript, which makes development easier because you only need to know one programming language for both frontend and backend development.\n\nMongoDB is a NoSQL database that stores data in flexible JSON-like documents. Express.js is a lightweight backend framework that runs on Node.js and helps in building APIs. React.js is a powerful frontend library developed by Facebook that allows developers to build interactive user interfaces. Node.js is a runtime environment that allows JavaScript to run on the server.\n\nTo start a MERN project, you first initialize a Node.js application, install Express, connect MongoDB, and then build the frontend using React. After development, both frontend and backend can be connected using REST APIs. The MERN stack is widely used for dashboards, e-commerce platforms, blogs, and SaaS applications.\n\nIn 2026, MERN continues to be a strong choice because of its flexibility, large community support, and high performance."
,
    date: "2026-03-01",
    image : "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    category  : "Web Development"
  },
  {
    id: 2,
    title: "Understanding AWS for Beginners",
    slug: "understanding-aws-for-beginners",
    excerpt: "Learn the basics of AWS cloud services and how developers can deploy modern applications.",
    content: "Amazon Web Services (AWS) is the world's leading cloud computing platform. It provides servers, storage, databases, networking, and many other services over the internet. Instead of buying physical servers, developers can rent virtual servers from AWS.\n\nOne of the most popular AWS services is EC2 (Elastic Compute Cloud), which allows you to launch virtual machines. Another important service is S3 (Simple Storage Service), which is used to store files like images and backups. IAM (Identity and Access Management) helps manage users and permissions securely.\n\nAWS is highly scalable, meaning your application can handle more users without crashing. It is also secure and reliable. Many companies use AWS to host their applications because it reduces infrastructure cost and improves performance.\n\nIf you are a MERN stack developer, learning AWS will help you deploy your applications professionally and manage real-world production environments."
,
    date: "2026-02-25",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    category: "Cloud Computing"
  },
  {
    id: 3,
    title: "Linux Basics Every Developer Should Know",
    slug: "linux-basics-for-developers",
    excerpt: "Essential Linux commands every developer should understand.",
    content: "Linux is widely used in servers and cloud platforms. Most web servers run on Linux because it is secure, fast, and open-source. As a developer, understanding basic Linux commands will help you manage servers confidently.\n\nSome important commands include ls (list files), cd (change directory), mkdir (create directory), rm (remove files), and chmod (change file permissions). These commands are essential when working on AWS EC2 or any VPS hosting.\n\nLinux also uses package managers to install software. For example, you can install Node.js using apt or yum depending on your Linux distribution.\n\nLearning Linux basics makes you more confident while deploying applications and troubleshooting server issues. It is an important skill for every full-stack developer."
,
    date: "2026-02-20",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=500&fit=crop",
    category: "Linux"
  },
  {
    id: 4,
    title: "How to Deploy a MERN App on AWS EC2",
    slug: "deploy-mern-app-on-aws-ec2",
    excerpt: "Step-by-step guide to deploying your MERN app on AWS EC2.",
    content: "Deploying a MERN application on AWS EC2 involves several steps. First, you create an EC2 instance and select a Linux operating system such as Ubuntu. After launching the instance, you connect using SSH.\n\nNext, you install Node.js, MongoDB, and Git on the server. Clone your project repository from GitHub and install dependencies using npm install. Configure environment variables properly.\n\nAfter setting up the backend, build your React frontend and serve it using a process manager like PM2. You should also configure security groups to allow traffic on required ports such as 3000 or 80.\n\nFinally, you can use Nginx as a reverse proxy for better performance and security. Once everything is configured, your MERN application will be live and accessible through your EC2 public IP address."
,
    date: "2026-02-15",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    category: "Deployment"
  },
  {
    id : 5,
    title : "Building a Responsive Blog UI with React and Tailwind CSS",
    slug : "responsive-blog-ui-react-tailwind",
    excerpt : "Design a modern blog interface using React and Tailwind CSS.",
    content : "React and Tailwind CSS together make UI development fast and efficient. Tailwind is a utility-first CSS framework that allows developers to build custom designs without writing traditional CSS files.\n\nTo build a blog UI, you can create reusable components like Navbar, BlogCard, and Footer. Using Tailwind grid classes, you can create responsive layouts easily. For example, grid-cols-1 for mobile and md:grid-cols-3 for larger screens.\n\nTailwind also makes it easy to style buttons, add hover effects, and maintain consistent spacing. This approach improves productivity and keeps your code clean.\n\nBy combining React components with Tailwind styling, you can build a professional-looking blog website that works smoothly across all devices."
,
    date : "2026-02-10",
    image : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    category : "Frontend Development"
  },
  {
    id: 6,
    title: "REST API Best Practices for Scalable Applications",
    slug: "rest-api-best-practices-scalable-apps",
    excerpt: "Best practices for building scalable REST APIs using Express.",
    content: "Building a scalable REST API requires proper planning and structure. First, always follow proper route naming conventions. For example, use /api/users instead of random names.\n\nSecond, use correct HTTP status codes such as 200 for success, 201 for created, 500 for bad request, and 500 for server errors. This helps frontend developers understand responses clearly.\n\nThird, implement middleware for authentication and error handling. Use JWT for secure authentication and validate incoming data before saving it to the database.\n\nFinally, organize your project into controllers, routes, models, and services. This keeps your backend clean and maintainable. Following these best practices ensures your API can handle real-world traffic efficiently."
,
    date: "2026-02-05",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    category: "Backend Development"
  }
]