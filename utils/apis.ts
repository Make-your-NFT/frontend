import axios from "axios";

const baseUrl = `http://ec2-3-37-254-76.ap-northeast-2.compute.amazonaws.com`;

const urls = {
  login: `${baseUrl}/api/signin`,
  signup: `${baseUrl}/api/signup`,
};

interface loginProps {
  email: string;
  password: string;
}

export const login = async (email: string, password: string) => {
  const result = await axios.get(urls.login, {
    params: {
      email: email,
      password: password,
    },
  });
  if (result.status === 200) {
    window.localStorage.setItem("user", result.data);
    return result.data;
  }
};

export const signup = async (id: string, email: string, password: string) => {
  const result = await axios.post(urls.signup, {
    id,
    email,
    password,
  });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result);
    return null;
  }
};

export const checkID = async (id: string) => {
  const result = await axios.post(urls.signup, {
    id,
  });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result);
    return null;
  }
};

export const checkEmail = async (email: string) => {
  const result = await axios.post(urls.signup, {
    email,
  });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result);
    return null;
  }
};
