import http from "@/lib/http";

type ForgotPasswordData = {
  login: string
  email: string
}

const forgotPassword = async (data: ForgotPasswordData): Promise<void> => {
  const response = await http.post('/api/OAuth/ForgetPassword?login=' + data.login + '&email=' + data.email);
  console.log(response, response.data, 'resp')
};

export {
  forgotPassword
}