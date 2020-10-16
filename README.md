# Marcus Garpehäll Wiklund
## Download
```
// Using Git Bash
git clone https://github.com/macksterino/publiceringsverktyg-tenta && cd ./publiceringsverktyg-tenta && code .
```

## Develop
```
// FRONTEND
cd ./frontend/portfolio-gui && npm install && npm run dev
```

```
// BACKEND
cd ../../backend/portfolio-api && npm run develop
```

## Publish
```
npm run clean && npm run build
```
- Make sure strapi is running in the background & let gatsby finish building project
- Upload to netlify by dragging the /public folder to deploy area
- Happy days