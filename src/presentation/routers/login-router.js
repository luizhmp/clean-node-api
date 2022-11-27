const HttpResponse = require("../helpers/http-response");

class LoginRouter {
  route(httpRequest) {
    if (!httpRequest) return HttpResponse.serverError();

    if (!httpRequest.body) return { statusCode: 500 };

    const { email, password } = httpRequest.body;

    if (!email) {
      return HttpResponse.badRequest("email");
    }

    if (!password) {
      return HttpResponse.badRequest("password");
    }
  }
}

module.exports = LoginRouter;
