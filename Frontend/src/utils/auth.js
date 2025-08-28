// utils/auth.js

// Check login status
export const isLoggedIn = () => {
  return !!localStorage.getItem("employeeId");
};

// Save user info after login/signup
export const login = ({ employeeId, fullName, email }) => {
  localStorage.setItem("employeeId", employeeId);
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);
};

// Clear user data on logout
export const logout = () => {
  localStorage.removeItem("employeeId");
  localStorage.removeItem("fullName");
  localStorage.removeItem("email");
};

// Get user info
export const getUser = () => {
  return {
    employeeId: localStorage.getItem("employeeId"),
    fullName: localStorage.getItem("fullName"),
    email: localStorage.getItem("email"),
  };
};
