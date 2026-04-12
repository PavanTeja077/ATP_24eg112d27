 /*
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
    console.log("otp sent succesfully")
     let seconds=10
     let intervalID =setInterval(()=>{
        seconds--;
        console.log(`otp can be resend after ${seconds} sec`)
        if(seconds===0){
            console.log("resend otp")
            clearInterval(intervalID)
        }
     },1000)

     