import fs from 'fs';

import { FileEncrypt } from 'node-file-encrypt';
import randomWords from "./randomwords.js";

let filePath = './asset/1.jpg'; // source file path
let encryptPath;
{   
    let f = new FileEncrypt(filePath,'','.png',false);
    f.openSourceFile();
    let secret = randomWords();
    f.encrypt(secret);
    encryptPath = f.encryptFilePath;
    console.log("encrypt sync done");
    console.log("secret: " + secret);
}

