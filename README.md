Client Side rendered app: react create-react-app (cra)
  -> database which is Firebase
  -> react-loading-skeleteon
  -> tailwind

Folder structure
  -> src
    -> components
    -> constats
    -> context
    -> helpers
    -> hooks
    -> pages
    -> lib(firebase is going to live in here)
    -> services (firebase functions in here)
    -> styles (tailwind's folder(app/tailwind))

Has a FirebaseContext is useful because prevent that each component call firebase

Example

Without FirebaseContext.
----------component 1 -------------- (firebase init here)
----------component 2 -------------- (firebase init here) 
----------component 3 -------------- (firebase init here)
----------component 4 -------------- (firebase init here)
----------component 5 -------------- (firebase init here)
----------component 6 -------------- (firebase init here)
----------component 7 -------------- (firebase init here)
----------component 8 -------------- (firebase init here)

With FirebaseContext.

-------Provider ={FirebaseContext}
----------component 1 --------------
----------component 2 -------------- (consumer)
----------component 3 -------------- (consumer)
----------component 4 -------------- (consumer)
----------component 5 --------------
----------component 6 --------------
----------component 7 --------------
----------component 8 --------------
-------Provider ={FirebaseContext}
