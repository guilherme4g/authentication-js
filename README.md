<h1 align='center'> Authentication User </h1>

## What's API does? 😯 
<p> Control user acess.  </p>
<p> allows you to create, edit, remove, authenticate and classify users.  </p>

## Features 📃
- ### **List user types**
  *should be possible list all user types.*
- ### **Create user type**
  *should be possible create user type.*
  #### **Business Rule**
  - *should not be possible create user type with existing name*
- ### **Remove user type**
  *should be possible delete user type.*
- ### **List Users**
  *should be possible list all users.*
  *should be possible list all users by user type.*
- ### **Create User**
  *should be possible create user.*
  #### **Business Rule**
  - *should not be possible create user with existing email*
  - *should not be possible create user with non-existent user type*
- ### **Edit User**
  *should be possible create user.*
  #### **Business Rule**
  - *should not be possible create user with existing email*
  - *should not be possible create user with non-existent user type*
- ### **Remove User**
  *should be possible delete user.*
- ### **Authenticate User**
  *should be possible generate token to user.*
  *should be possible verify acess token.*
  #### **Business Rule**
  - *should not be possible acess other routes, with this middleware, without token*
  - *should not be possible generate token if non-existent user*
  - *should not be returned true error*

## Routes 🏞️
All API endpoints have been documented using Swagger. Acess route [/api-docs][documentation] after start API.

*http://localhost:3333/api-docs* 

## How to use 🦍
First, you will need install the following softwares installed on your machine:
- [Git][git]
- [Node][nodejs]
- [Docker][docker]
- [Docker Compose][dockercompose]

After that, in project folder execute this commands:
```bash
# clone this repository:
$ git clone https://github.com/guilherme4g/authentication-js.git

# enter the repository:
$ cd authentication-js

# install the dependencies:
$ yarn

# start the api:
$ yarn start
```

## Observation 👀
This is a person project to practise my skills in design patterns, SOLID, unit tests, integration tests and generate environment using docker.  

[git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[nodejs]: https://nodejs.org/en/download/
[docker]: https://docs.docker.com/engine/install/
[dockercompose]: https://docs.docker.com/compose/install/
[documentation]: http://localhost:3300/api-docs