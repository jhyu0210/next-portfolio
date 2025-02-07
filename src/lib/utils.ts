export const validateString=(value:unknown)=> {
    if(!value || typeof value !== 'string') {
      return false
    }
    return true
  }

export const getErrorMessage=(err:unknown): string =>{
    let message:string
    if(err instanceof Error){
      message= err.message
      } else if(err && typeof err === 'object' && 'message' in err){
        message = String(err.message)
      } else if(typeof err ==='string'){
        message= err;
      } else {
        message = 'Something went wrong'
      }
      return message
  }