const fs = require("fs");

const apiKey = process.env.firebaseApiKey;
const authDomain = process.env.firebaseAuthDomain;
const databaseURL = process.env.firebaseDatabaseUrl;
const projectId = process.env.firebaseProjectId;
const storageBucket = process.env.firebaseStorageBucket;
const messagingSenderId = process.env.firebaseMessagingSenderId;

const configFile = fs.readFileSync('./src/environments/environment.prod.ts', 'utf-8');
let newConfig = configFile.replace('{apiKey}', apiKey);
newConfig = newConfig.replace('{authDomain}', authDomain);
newConfig = newConfig.replace('{databaseURL}', databaseURL);
newConfig = newConfig.replace('{projectId}', projectId);
newConfig = newConfig.replace('{storageBucket}', storageBucket);
newConfig = newConfig.replace('{messagingSenderId}', messagingSenderId);

fs.writeFileSync('./src/environments/environment.prod.ts', newConfig, 'utf-8');


const newConfigFile = fs.readFileSync('./src/environments/environment.prod.ts', 'utf-8');
console.log(newConfigFile);
