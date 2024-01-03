import React from "react"
import {forwardRef} from "react"
import { Path, useForm, UseFormRegister, SubmitHandler, Controller } from "react-hook-form"


// eslint-disable-next-line react/display-name
const Text  = (props:any) => {
  console.log("render");
  
  return (
  <label>
    {props.label}
    <input {...props} type="text" />
  </label>
)};




interface IFormInputs {
  MyText: string
}


function App() {
  const { handleSubmit, control, reset ,formState: { errors }} = useForm<IFormInputs>({
    defaultValues: {
      MyText: "hoge",
    },
  })
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyText"
        control={control}
        rules={{
          maxLength: {
            value:3,
            message: "This input exceed maxLength.",
          }
        }}
        render={({ field }) => <Text  label={"aaa"} {...field} />}
      />
      <input type="submit" />
      {errors.MyText && <p>{errors.MyText.message}</p>}
    </form>
  )
}

export default App