# processing-api
Processing API

## Use?
```
git clone,   
npm install,   
rename .env-template to .env and edit yours,  
npm run start (or dev with nodemon),  
running on port 3000
```

start cron:
```
edit cronConfig.js
npm run cron
```

## Endpoint
ENDPOINT | HTTP | QUERY | DESCRIPTION
---|---|---|---
:3000/v1/latest.json | GET | (optional) ?page=XX | get 5 latest processing tweet per page

fariswd  
2018
:rocket:
