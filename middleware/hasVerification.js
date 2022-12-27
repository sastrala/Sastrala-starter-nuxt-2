/**
 * @description for redirect to verification page if user not insert or cookies expired
 */
export default function ({ store, redirect }) {
  if (!store.state.auth.loggedIn) {
    return redirect('/verification')
  }
}
