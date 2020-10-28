//Components
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Types
import { Toasty } from '../Types/data.types'

export const triggerToast = (option: Toasty): void => {
  toast(option.description)
}
