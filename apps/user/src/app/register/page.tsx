"use client";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [matchPasswordError, setMatchPasswordError] = useState(false); // 新增：密碼不一致的錯誤

  // Email 驗證正規表達式
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // 密碼驗證正規表達式：至少8個字元，包含至少一個英文字母和一個數字
  const validatePassword = (password: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  };

  const handleUsernameChange = (e: any) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    setUsernameError(newUsername.trim() === "" && newUsername !== ""); // 如果空白但有輸入過就顯示錯誤
  };

  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!validateEmail(newEmail) && newEmail !== "");
  };

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(!validatePassword(newPassword) && newPassword !== "");
    // 同時檢查確認密碼是否匹配
    setMatchPasswordError(
      newPassword !== confirmPassword && confirmPassword !== ""
    );
  };

  const handleConfirmPasswordChange = (e: any) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    // 檢查確認密碼是否為空
    setConfirmPasswordError(
      newConfirmPassword.trim() === "" && newConfirmPassword !== ""
    );
    // 檢查兩次密碼是否匹配
    setMatchPasswordError(
      password !== newConfirmPassword && newConfirmPassword !== ""
    );
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // 最終提交前的驗證
    const isUsernameValid = username.trim() !== "";
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = confirmPassword.trim() !== "";
    const doPasswordsMatch = password === confirmPassword;

    setUsernameError(!isUsernameValid);
    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);
    setConfirmPasswordError(!isConfirmPasswordValid);
    setMatchPasswordError(!doPasswordsMatch);

    if (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      doPasswordsMatch
    ) {
      // 如果所有驗證都通過，就可以處理註冊邏輯囉！
      console.log("使用者名稱:", username);
      console.log("Email:", email);
      console.log("密碼:", password);
      alert("註冊成功！歡迎加入！🎉"); // 這裡可以換成真的註冊 API 呼叫
      // 這裡可以導向登入頁面或是其他頁面
    } else {
      console.log("註冊失敗，請檢查輸入。😢");
    }
  };

  return (
    <div className="bg-gray-100">
      <div>
        <ul className="list-none flex">
          <li className="mx-1 text-orange-200">
            <Link href={"/"}>首頁</Link>
          </li>
          <li className="mx-1 ">/</li>
          <li className="mx-1 text-orange-200">
            <Link href={"/goods"}>註冊</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            註冊
          </h2>
          <form onSubmit={handleSubmit}>
            {/* 使用者名稱 */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                使用者名稱*
              </label>
              <input
                type="text"
                id="username"
                placeholder="請輸入使用者名稱"
                value={username}
                onChange={handleUsernameChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${
                  usernameError
                    ? "border-red-500 focus:ring-red-300"
                    : "focus:ring-blue-300"
                }`}
                required
              />
              {usernameError && (
                <p className="text-red-500 text-xs italic mt-1">
                  使用者名稱不能為空喔！
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="請輸入 Email"
                value={email}
                onChange={handleEmailChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${
                  emailError
                    ? "border-red-500 focus:ring-red-300"
                    : "focus:ring-blue-300"
                }`}
                required
              />
              {emailError && (
                <p className="text-red-500 text-xs italic mt-1">
                  請輸入有效的 Email 地址喔！
                </p>
              )}
            </div>

            {/* 密碼 */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                密碼*
              </label>
              <input
                type="password"
                id="password"
                placeholder="請輸入密碼"
                value={password}
                onChange={handlePasswordChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${
                  passwordError || matchPasswordError
                    ? "border-red-500 focus:ring-red-300"
                    : "focus:ring-blue-300"
                }`}
                required
              />
              {passwordError && (
                <p className="text-red-500 text-xs italic mt-1">
                  密碼至少需要8個字元，並包含至少一個英文字母和一個數字喔！
                </p>
              )}
            </div>

            {/* 確認密碼 */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                確認密碼*
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="請再次輸入密碼"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${
                  confirmPasswordError || matchPasswordError
                    ? "border-red-500 focus:ring-red-300"
                    : "focus:ring-blue-300"
                }`}
                required
              />
              {confirmPasswordError && (
                <p className="text-red-500 text-xs italic mt-1">
                  請再次輸入密碼喔！
                </p>
              )}
              {matchPasswordError &&
                !confirmPasswordError && ( // 避免重複顯示錯誤
                  <p className="text-red-500 text-xs italic mt-1">
                    兩次輸入的密碼不一致喔！
                  </p>
                )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-stone-200 hover:bg-stone-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-stone-400"
              >
                註冊
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
