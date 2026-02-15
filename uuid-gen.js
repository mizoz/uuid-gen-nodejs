#!/usr/bin/env node
/** UUID v4 generator */
const crypto=require('crypto');
const n=parseInt(process.argv[2])||1;
for(let i=0;i<n;i++){console.log([...Array(36)].map((_,i)=>{if(i===8||i===13||i===18||i===23)return'-';if(i===14)return'4';if(i===19)return(crypto.randomInt(8)).toString(16);return crypto.randomInt(16).toString(16)}).join(''));}
