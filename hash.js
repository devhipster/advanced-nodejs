const bcrypt = require('bcrypt');
//1- salt
async function run(){

    const salt = await bcrypt.genSalt(10)
    //now hash password 
    const hashed = await bcrypt.hash('3232',salt)
    const comp = await bcrypt.compare('3232',hashed)
    console.log('salt',salt);
    console.log('hashed',hashed)
    console.log('compare',comp)
}

console.log(run())