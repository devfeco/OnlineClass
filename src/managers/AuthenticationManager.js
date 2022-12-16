const VerifyCode = code => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(code==='1234' || code==='1111'){
                resolve();
            }
            reject({error:'404'});
        },500)
    })
}

const Register = user => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(user){
                resolve();
            }
            reject({error:'404'});
        },500);
    });
}
module.exports = {VerifyCode,Register};