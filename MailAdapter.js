"use strict";

/*
  Mail Adapter prototype
  A MailAdapter should implement at least sendMail()
 */
class MailAdapter {
  /*
   * A method for sending mail
   * @param options would have the parameters
   * - to: the recipient
   * - text: the raw text of the message
   * - subject: the subject of the email
   */
  sendMail(options) {}
  sendVerificationEmail(_ref) {
    let link = _ref.link,
        appName = _ref.appName,
        user = _ref.user;
  }
  sendPasswordResetEmail(_ref2) {
    let link = _ref2.link,
        appName = _ref2.appName,
        user = _ref2.user;
  }
}

module.exports = MailAdapter;
//# sourceMappingURL=MailAdapter.js.map