import axios from "axios";

const baseUrl = `https://ys-myn.herokuapp.com`;

const urls = {
  login: `${baseUrl}/common/signin/`,
  signup: `${baseUrl}/common/signup/`,
  checkID: `${baseUrl}/common/signup/check/id/`,
  checkEmail: `${baseUrl}/common/signup/check/email/`,
};

interface loginProps {
  email: string;
  password: string;
}

export const login = async (id: string, password: string) => {
  const result = await axios.post(urls.login, {
    username: id,
    password,
  });
  if (result.status === 200) {
    window.localStorage.setItem("user", result.data);
    return result.data;
  }
};

export const signup = async (
  id: string,
  email: string,
  password: string,
  againPassword: string
) => {
  const result = await axios.post(urls.signup, {
    username: id,
    email,
    password,
    password2: againPassword,
  });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result);
    return null;
  }
};

export const checkID = async (id: string) => {
  const result = await axios.post(urls.checkID, {
    userid: id,
  });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result);
    return null;
  }
};

export const checkEmail = async (id: string, email: string) => {
  const result = await axios.post(urls.checkEmail, {
    userid: id,
    email,
  });

  if (result.status === 200) {
    return result.data;
  } else {
    console.log(result);
    return null;
  }
};
