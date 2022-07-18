import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

const handleInput = (e) => {
  const value = e.target.value
  setForm({...form, [e.target.name]:value})
}
const handleSelect = (e) => {
  const value = e.target.value
  setForm({...form, [e.target.name]:value})
}

return { form , handleInput, handleSelect };

}
export default useForm