# Question-Paper-Generation

# Steps to build the Application

# Step 1: Setup
1) Open VSCode
2) Create a New Folder
3) Open the Folder in VSCode

# Step 2: Initialize Node.js Project
1) Open the terminal in VSCode and run the command "npm init -y" to initialize a new Node.js project. This will create a package.json file.
2) Download Required Package (prompt-sync): npm install prompt-sync

# Step 3: Create JavaScript Files
1) Create a JavaScript file questionPaperGenerator.js.

# Step 4: Write Code
1) Write Code in questionPaperGenerator.js

# Step 5: Version Control
1) Initialize Git Repository:
    Command: git init
2) Commit Your Changes:
    Command: git add .
             git commit -m "Initial commit"
3) Create a GitHub Repository
4) Push to GitHub:
    Commands: git remote add origin <your-github-repository-url>
              git push -u origin master

# Steps to run the application:

In order to run the application, Node.js must be installed in your machine.
# Step 1: Clone the repository
1) Clone the repository using the command "git clone <repository-link>", the repository link is "https://github.com/Azmir669/Question-Paper-Generation".

# Step 2: Navigate to the Project Directory
1) Navigate to the project directory using the command "cd <project-folder>", replace '<project-folder>' with the name of the folder that was created when you cloned the repository.

# Step 3: Install Dependencies
1) In the provided code, there are no external dependencies used other than the built-in prompt-sync package for handling user input in the command line. To install this dependency, you can use the following command: npm install prompt-sync.

# Step 4: Run the Application
1) After installing the dependencies, you should be able to run the application using: node questionPaperGenerator.js.

# Step 5: View the generated Question Paper
1) Once you've provided the input, the application will generate a question paper, and you should see the output in the terminal.

# Example Input:
Enter total marks for the question paper: 50
Enter percentage for easy questions: 20
Enter percentage for medium questions: 60
Enter percentage for hard questions: 20
Enter percentage for Waves questions: 0
Enter percentage for Motion questions: 20
Enter percentage for Gravity questions: 0
Enter percentage for Magnetism questions: 20
Enter percentage for Energy questions: 0
Enter percentage for Biology questions: 20
Enter percentage for Fluids questions: 20
Enter percentage for Electricity questions: 0
Enter percentage for Chemistry questions: 20
Enter percentage for Optics questions: 0
Enter percentage for Mechanics questions: 0
Enter percentage for Nuclear Physics questions: 0
Enter percentage for Cosmology questions: 0
Enter percentage for Thermodynamics questions: 0
Enter percentage for Acoustics questions: 0
Enter percentage for Particle Physics questions: 0

# Output for the above input:
Generated Question Paper:
[
  Question {
    question: 'Describe the process of photosynthesis',
    subject: 'Physics',
    topic: 'Biology',
    difficulty: 'Hard',
    marks: 10
  },
  Question {
    question: 'State Archimedes' Principle',
    subject: 'Physics',
    topic: 'Fluids',
    difficulty: 'Medium',
    marks: 10
  },
  Question {
    question: 'What is the structure of an atom',
    subject: 'Physics',
    topic: 'Chemistry',
    difficulty: 'Medium',
    marks: 10
  },
  Question {
    question: 'Define Newton's First Law of Motion',
    subject: 'Physics',
    topic: 'Motion',
    difficulty: 'Medium',
    marks: 10
  },
  Question {
    question: 'List the basic properties of magnets',
    subject: 'Physics',
    topic: 'Magnetism',
    difficulty: 'Easy',
    marks: 6
  },
]

Following the above steps one can build the application, run the application.
