import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const QueryStringTemplate = 'categoryId={categoryId}&area={area}&price={price}'
export const DefaultOption = null

export const CustomTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    transition: 'all 0.3s ease',
  },
  '& .MuiInputLabel-root.MuiFormLabel-filled': {
    display: 'none',
  },
})
