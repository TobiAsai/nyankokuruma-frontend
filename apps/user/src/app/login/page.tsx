"use client";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Email 驗證正規表達式
  const validateEmail = (email: string) => {
    // 這個 Regex 比較寬鬆，如果你需要更嚴格的 Email 驗證可以再調整喔！
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // 密碼驗證正規表達式：至少8個字元，包含至少一個英文字母和一個數字
  const validatePassword = (password: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  };

  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // 即時驗證 Email
    setEmailError(!validateEmail(newEmail) && newEmail !== ""); // 只有當有輸入且不符合時才顯示錯誤
  };

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // 即時驗證密碼
    setPasswordError(!validatePassword(newPassword) && newPassword !== ""); // 只有當有輸入且不符合時才顯示錯誤
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); // 阻止表單預設提交行為

    // 最終提交前的驗證
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      // 如果都驗證成功，就可以處理登入邏輯了喔！
      console.log("Email:", email);
      console.log("密碼:", password);
      alert("登入成功！🎉"); // 這裡可以換成真的登入 API 呼叫
      // 這裡可以導向其他頁面或是清除表單
    } else {
      console.log("登入失敗，請檢查輸入。😢");
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
            <Link href={"/goods"}>登入</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            登入
          </h2>
          <form onSubmit={handleSubmit}>
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
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                // 根據 emailError 動態添加 class
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
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                密碼*
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                // 根據 passwordError 動態添加 class
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${
                  passwordError
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
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-stone-200 hover:bg-stone-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-stone-400"
              >
                登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
