# BlogAppAPI

## MOD TWO PROJECT
 - Note:
    * means route is protected
    ! means route has stretch middleware

    - PART ONE - Server & Routes:
        - Server
            - Mongo Connected
            - Middleware
            - Routes Connected
        - Routes
            - /auth
            - /blogs

    ### PART TWO - Endpoints:
        - /auth
            - login
                - CREATE
            - registration
                - CREATE
        - /blogs
            - dynamic username
                - CREATE*!
                - READ*!
            - dynamic id
                - UPDATE*!
                - DELETE*!
            - base
                - READ
                    - ONLY display NON private blogs

    ### PART THREE - User & Blog Schema:
        - User Schema
            - username: string, required
            - email: string, required
            - birthday: date, required
            - age: number
        -Blog Schema
            - created_by: string, required
            - created_at: date, required
            - blog_title: string, required
            - blog_content: string, required
            - blog_content: string, required
            - private: boolean, required
    
    ### PART FOUR - Middleware & Authentication:
        - BCrypt: Encrypt Password
        - BCrypt: Protected Login
        - JWT: Send Header Token
        - JWT: Authenticate Header
    
    ### PART FIVE Documentation & Hosting:
        README.md
            - Names of all ENV Variables
            - Instructions on Installing & Running Locally
            - Endpoints, Parameters, Schema
        Hosted On Heroku
    
    ## STRETCH GOALS:

    ### PART ONE:
        - Server
            - Configured Logger
            - Configured Security
            - Configured CORS
        - Routes
            - /users

    ### PART TWO:
        - /users
            - dynamic id
                - UPDATE*!
                - DELETE*!
        - /login
            - return user AND user's blogs
        - /blogs
            - query string
                - get by blog_title
                - ensure blog is NOT private
                - if blog is private, and user does not own resource - send an error
    PART THREE
        - User Schema
            -username: unique
        - Blog Schema
            - created_at: default -> current date
            - blog_title: unique
            - private: default -> false

    PART FOUR
        - Middleware
            - Determine if User 'owns' the Resource they are accessing
        SWAGGER DOCUMENTATION : SWAGGER TUTORIAL url('https://www.section.io/engineering-education/documenting-node-js-rest-api-using-swagger/)