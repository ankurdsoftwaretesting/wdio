def execType = ''
pipeline{
   
    agent any
    
    parameters {
        choice(name: 'EXEC_AS', choices: ['sanity', 'regression'], description: '')
    }
    
    stages{
        stage("clean WS"){
            steps{
                cleanWs()
            }
        }
        stage("Git checkout"){
            steps{
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/ankurdsoftwaretesting/wdio.git'
            }
        }
        
        stage("npm install"){
            steps{
                sh "npm install"
                
            }
        }
        stage("npm test"){
           steps{
               script{
                   execType = params.EXEC_AS
               }
                sh "npm run test @${execType}"
           }
        }
    }
    post{
        always{
            echo 'generating allure report...'
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results'], [path: 'allure-results']]
        }
    }
}
