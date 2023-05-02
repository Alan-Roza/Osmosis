import api from "@/lib/api";

type SigninData = {
  login: string
  password: string
}

type SigninResponse = {
  token: string
}

const signin = async (data: SigninData): Promise<SigninResponse> => {
  const response = await api.post('/signin', data);
  return response.data;
};

export {
  signin
}