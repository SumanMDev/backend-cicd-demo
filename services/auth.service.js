export const logIn = (email, password) => {
  const VALID_EMAIL = 'admin@gmail.com';
  const VALID_PASSWORD = 'admin123';

  if (!email || !password) {
    return {
      success: false,
      statusCode: 400,
      message: 'Email and password are required.',
    };
  }

  if (email !== VALID_EMAIL) {
    return {
      success: false,
      statusCode: 401,
      message: 'No matching email found.',
    };
  }

  if (password !== VALID_PASSWORD) {
    return {
      success: false,
      statusCode: 401,
      message: 'Incorrect password.',
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: 'Authentication successful.',
  };
};
