import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

const handleInput = (e) => {
  const value = e.target.value
  setForm({...form, [e.target.name]:value})
}
const clear = () => {
  setForm(initialState)
}
return { form , handleInput, clear };

}
export default useForm