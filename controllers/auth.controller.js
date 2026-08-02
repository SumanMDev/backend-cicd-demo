import { logIn } from '../services/auth.service';

export const login = (req, res) => {
  const { email, password } = req.body;
  const result = logIn(email, password);

  return res.status(result.status).json({
    success: result.success,
    message: result.message,
  });
};
