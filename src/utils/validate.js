import{isEmail,isStrongPassword,isLength,isAlpha} from "validator";
export const checkvalidateData=(email , password,firstName)=>{

    if(!email || !password){
      return("Please Enter your EmailId and Password");
    }
    // if(!isAlpha(firstName)){
    //     return ('First name must only contain letters.')
    // }
    // if (!isLength(firstName, { min: 3, max: 50 })) {
    //     return "First name must be greater than 3 characters and less than 50 characters.";
    //   }
    if(!isEmail(email)){
        return ("Invalid EmailId");
    }
    if(!isStrongPassword(password)){
       return("Invalid Password")
    }

    return null;
}
