pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins-app"
        CONTAINER_NAME = "jenkins-app"
    }

    stages {

        stage('Clone Code') {
            steps {
                echo "Source code downloaded from GitHub"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p 80:3000 \
                $IMAGE_NAME
                '''
            }
        }

    }

    post {

        success {
            echo "Deployment Successful!"
        }

        failure {
            echo "Deployment Failed!"
        }

    }
}