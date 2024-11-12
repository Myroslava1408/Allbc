import FavoriteIcon from '@mui/icons-material/Favorite'
import { Alert, IconButton, Snackbar } from '@mui/material'

import useFavorite from '@/app/shared/hooks/useFavorite'
import { LikeIcon } from '@/app/shared/icons'
import * as m from '@/libs/localization/paraglide/messages'

interface Offer {
  id: number
  title: string
}

const WishlistButtonComponent = ({ offer }: { offer: Offer }) => {
  const { isFavorited, openSnackbar, toggleFavorite, closeSnackbar } = useFavorite(offer)

  return (
    <>
      <IconButton onClick={toggleFavorite}>
        {isFavorited ? <FavoriteIcon color='error' /> : <LikeIcon color='action' />}
      </IconButton>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={closeSnackbar} severity='success'>
          {isFavorited ? m.favorited() : m.deleted_favorited()}
        </Alert>
      </Snackbar>
    </>
  )
}

export default WishlistButtonComponent
