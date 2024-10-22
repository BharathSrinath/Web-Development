import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    //  When you call register on an input, it enables React Hook Form to track its value, handle validation, and manage its state.
    console.log(useForm());
    const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input type="number" {...register('age', { min: 1, max: 120 })} />
        {errors.age && <span>Age must be between 1 and 120</span>}
      </div>

      <input type="submit" />
    </form>
  )
}

export default ReactHookForm;

// Register:
// The spread operator is used to pass all the properties returned by the register function directly into the input element. This is essential for integrating the input with React Hook Form's internal management system.
    // When we call register, it returns an object that contains several properties and event handlers - onChange, onBlur, name, ref, etc.
    // Using the Spread Operator: <input {...register('name')} />
    // Without spread operator: 
        // const registrationProps = register('name');
        // <input 
        //  onChange={registrationProps.onChange} 
        //  onBlur={registrationProps.onBlur} 
        //  name={registrationProps.name} 
        //  ref={registrationProps.ref} 
        // />
// Syntax: register(name: string, options?: RegisterOptions): RegisterReturnType
// Example: Username Field 
    // <div>
    //   <label htmlFor="username">Username:</label>
    //   <input 
    //     id="username"
    //     {...register('username', { 
    //       required: 'Username is required', 
    //       minLength: { value: 3, message: 'Username must be at least 3 characters' }
    //     })} 
    //   />
    //   {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}
    // </div>