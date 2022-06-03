import axios from "axios";

const baseUrl = `http://ec2-3-37-254-76.ap-northeast-2.compute.amazonaws.com`;

const urls = {
  login: `${baseUrl}/api/login`,
};

export const login = async (email: string, password: string) => {
  const result = await axios.post(urls.login, {
    email: email,
    password: password,
  });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result);
    return null;
  }
};

export const signup = async (
  email: string,
  password: string,
  phone: string,
  address: string
) => {
  const result = await axios.post(urls.login, {
    email,
    password,
    phone,
    address,
  });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result);
    return null;
  }
};
