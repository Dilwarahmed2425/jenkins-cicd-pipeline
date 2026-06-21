# Jenkins CI/CD Pipeline using Docker and AWS EC2

## Project Overview

This project demonstrates a complete CI/CD pipeline using Jenkins, Docker, GitHub, and AWS EC2.

Whenever code is pushed to GitHub, Jenkins automatically pulls the latest changes, builds a Docker image, stops the old container, and deploys the latest version.

---

## Technologies Used

* Jenkins
* Docker
* Git & GitHub
* AWS EC2
* Node.js
* Linux

---

## Project Structure

```
jenkins-cicd-pipeline/
│
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
├── .gitignore
└── README.md
```

---

## Docker Build

Build the Docker image

```bash
docker build -t jenkins-demo .
```

Run the container

```bash
docker run -d -p 3000:3000 --name jenkins-app jenkins-demo
```

Visit

```
http://<EC2-Public-IP>:3000
```

---

## Jenkins Pipeline

The Jenkins pipeline performs the following steps:

1. Clone source code from GitHub
2. Build Docker image
3. Stop existing container
4. Remove old container
5. Start new Docker container
6. Deploy latest application automatically

---

## Learning Outcomes

* Jenkins Installation
* GitHub Integration
* Docker Image Creation
* Container Management
* Automated Deployment
* AWS EC2 Deployment
* CI/CD Best Practices

---

## Author

GitHub: Dilwarahmed2425
