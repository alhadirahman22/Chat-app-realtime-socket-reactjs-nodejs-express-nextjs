# Chat
 
Note :

- Backend folder on `server` folder
- Aside from that is for Frontend

## Date of submission

- 20 Nov 2023

## Instructions to run assignment locally
   Testing locally :

    - Run `npm install`
    - Run `npm run dev`

   Using Docker :

    - Run `docker compose up -d`
   
## Time spent

- 20 Hours

## Assumptions made

- Create repository using Gitlab
- Making UI design using figma reference 
- Setup nodejs express
- Setup csrf token(security purposes)
- Testing route 
- Testing JWT token(security purposes)
- Create Chat collection
- Create chat and user document
- Integration with mongodb(Database)
- Testing to fetch api and post from client(React/Next) to server(NodeJS)
- Real time chat using `socket.io` for integration 

## Shortcuts/Compromises made

## Assume your application will go into production

- What would be your approach to ensuring the application is ready for production ? 
  - Run test manually by multiple people at the same time to ensure smoothness
  - Run load test via `k6`script and set for virtual user, let say for example 100 and then test it into most heavy endpoint, if average response time is less than 5s also timeout doesnt appear and most of average response is 1s less is even better, then application is ready to production

- How would you ensure a smooth user experience as 1000’s of users start using your app simultaneously?
    - Run load test via `k6`script and set for virtual user let say for example 1000 and then test it into most heavy endpoint, if average response time is less than 5s also timeout doesnt appear and most of average response is 1s less is even better

- What key steps would you take to ensure application security?
  - Developer perspective : 
    - Every connection from api always through XSRF-TOKEN that taken from CSRF
    - POST method encrypted using `jsonwebtoken` for token verify
    - Browser Cookie encrpyted by `jsonwebtoken`
    - localstorage encrpyted using `react-secure-storage`
    - All package from `package.json` is none using that have high/severe vulnerability
    - Remove every debugging log on production code to ensure clean code and smoothness of application


## What did you not include in your solution that you want us to know about? Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.

- In chatbox if i want to add more than one line cannot do it(in whatsapp is shift+enter for new line)
- Cannot upload file attachment such as video,pdf,etc
- There is no typing status whenever user is typing chat
- There is no online status for user
- Cannot make chat with bold feature

## Other information about your submission that you feel it's important that we know if applicable.
    
- None

## Your feedback on this technical challenge
    
- This test is not easy at the same time also not hard and complexity is not too deep based on test requirement 
- Time is sufficient for me to do this test
   
## Have feedback for how we could make this assignment better? Please let us know.
- None