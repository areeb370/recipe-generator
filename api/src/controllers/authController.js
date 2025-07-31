const supabase = require("../config/supabase");

exports.sendLink = async (req, res, next) => {
  const { email } = req.body;
  try {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) throw error;
    res.json({ message: "Magic link sent" });
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { data, error } = await supabase.auth.getUserByCookie(req);
    if (error) throw error;
    res.json(data.user);
  } catch (err) {
    next(err);
  }
};
