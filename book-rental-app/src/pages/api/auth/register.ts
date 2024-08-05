// /pages/api/auth/register.js
const bcrypt = require('bcryptjs');
const { query } = require('../../../../lib/db');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password, confirmPassword, location, phoneNumber, termsAccepted } = req.body;

  if (!email || !password || !confirmPassword || !location || !phoneNumber || termsAccepted === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if email already exists
    const existingUser = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = 'user'; // Default role

    await query(
      'INSERT INTO users (email, password, location, phone_number, role) VALUES ($1, $2, $3, $4, $5)',
      [email, hashedPassword, location, phoneNumber, role]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
}
