
import { FileEncrypt } from 'node-file-encrypt';
import randomWords from "./randomwords.js";

let encryptPath = './asset/1.png';


{ 
    let string = "tired angry satisfied fear few knowledge ready area"
    let f = new FileEncrypt(encryptPath);
    f.openSourceFile();
    f.decrypt(string);
    console.log("decrypt sync done");
}

