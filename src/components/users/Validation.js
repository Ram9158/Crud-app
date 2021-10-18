function Validation(name,email,phone) {

    const errors = {}
    
    if (!name) {
        errors.name="Name is Required"
    }
     
    if (!email) {
        errors.email="Email is Required"
    }
     
    if (!phone) {
        errors.pass="Phone is Required"
    }


    return errors
}

export default Validation

