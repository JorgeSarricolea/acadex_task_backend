export class UserPresenter {
  static present(user, token) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: token,
    };
  }
}
