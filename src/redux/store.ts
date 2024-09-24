import { configureStore } from '@reduxjs/toolkit'
import smartReducer from './smartSlice'




export const store = configureStore({
      reducer: {
            shopping: smartReducer
      },
})

// Persistor
// export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch