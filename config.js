const fs = require("fs");
const apiKey = process.env.firebaseApiKey,
const authDomain = process.env.firebaseAuthDomain,
const databaseURL = process.env.firebaseDatabaseURL,
const projectId = process.env.firebaseProjectId,
const storageBucket = process.env.firebaseStorageBucket,
const messagingSenderId = process.env.firebaseMessagingSenderId

const configFile = fs.readFileSync('./src/environments/environment.prod.ts', 'utf-8');
const appURL = `URL: 'https://${appName}.herokuapp.com',`;
const newValue = configFile.replace('{apiKey}', apiKey);
const newValue = configFile.replace('{authDomain}', authDomain);
const newValue = configFile.replace('{databaseURL}', databaseURL);
const newValue = configFile.replace('{projectId}', projectId);
const newValue = configFile.replace('{storageBucket}', storageBucket);
const newValue = configFile.replace('{messagingSenderId}', messagingSenderId);

fs.writeFileSync('./src/environments/environment.prod.ts', newValue, 'utf-8');
