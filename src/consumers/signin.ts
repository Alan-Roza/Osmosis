import http from "@/lib/http";

type SigninData = {
  username: string
  password: string
}

type SigninResponse = {
  token: string
}

const signin = async (data: SigninData): Promise<SigninResponse> => {
  const response = await http.post('/api/OAuth/Login', data);
  return response.data;
};

export {
  signin
}