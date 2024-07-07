pipeline {
  agent any

  tools {nodejs 'NODE'}

  environment{
      DOCKER_CREDENTIALS = credentials('docker-token')
      DOCKERHUB_DEV_REPO = 'windwaker991/taller-devops-dev'
      DOCKERHUB_PROD_REPO = 'windwaker991/taller-devops-prod'
      REPO_URL = 'https://github.com/WindWaker991/taller-devops'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scmGit(branches: [[name: '**']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/WindWaker991/taller-devops']])
        script {
            echo "Checked out branch: ${env.BRANCH_NAME}"
        }
      }
    }

    stage('Instalar dependencias') {
        steps {
            script {
                sh 'npm install'
            }
        }
    }

    stage('Test') {
        steps {
            script {
                sh 'npm run test'
            }
        }
    }

  }
}