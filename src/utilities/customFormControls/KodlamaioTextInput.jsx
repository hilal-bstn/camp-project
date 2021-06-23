import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function KodlamaIoTextInput({...props}) {
   // console.log(props)
   //reflect api
   const [field,meta]=useField(props)
  // console.log(field) 
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props}></input>
            {meta.touched && !!meta.error ?(
             <Label pointig basic color="red" content={meta.error}></Label>   
            ):null}
        </FormField>
    )
}
