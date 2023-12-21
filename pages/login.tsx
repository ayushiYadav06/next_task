import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/context";
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <style jsx>{`
        section {
          width: 100%;
          padding: 10px;
          min-height: calc(100vh - 80px);
          margin-top: 5rem;
        }

        section .form_data {
          max-width: 550px;
          margin: 25px auto;
          padding: 35px 10px;
          box-shadow: 0 0 15px -10px #2d3748;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .form_heading {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .form_data h1 {
          font-size: 34px;
          color: #2a4365;
        }

        .form_data p {
          color: #718096;
          font-size: 15px;
          margin-top: 9px;
        }

        .form_data form {
          margin-top: 45px;
          width: 100%;
          padding: 10px 50px;
        }

        .form_data form .form_input input {
          width: 100%;
          padding: 11px;
          border: 1px solid #d4d0d0;
          border-radius: 5px;
          outline: none;
          margin-bottom: 14px;
          margin-top: 9px;
          font-size: 14px;
        }

        .form_data form .form_input label {
          font-weight: 600;
          font-size: 15px;
        }

        .form_input .two {
          display: flex;
          align-items: center;
          position: relative;
        }

        .form_data form .form_input input:focus {
          border: 2px solid rgba(66, 153, 225, 0.6);
        }

        .form_data form .form_input input::placeholder {
          color: #8694a8;
          letter-spacing: 0.5px;
          font-size: 14px;
        }

        .form_input .showpass {
          position: absolute;
          right: 0;
          top: 1px;
          padding: 7px 10px;
          margin-right: 5px;
          margin-top: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #2a4365;
          background-color: #edf2f7;
          border-radius: 5px;
          cursor: pointer;
        }

        form .btn {
          display: block;
          width: 100%;
          padding: 15px;
          border: none;
          outline: none;
          border-radius: 5px;
          background-color: #1a365d;
          color: #fff;
          font-weight: 600;
          font-size: 18px;
          margin-top: 10px;
          cursor: pointer;
          transition: all 0.3s;
        }

        form .btn:hover {
          background-color: #97a1b1;
        }

        .form_data form p {
          text-align: center;
          margin-top: 20px;
        }

        .form_data form a {
          text-decoration: none;
          color: #718096;
          border-bottom: 2px solid #8694a8;
        }
      `}</style>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Login</h1>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e: any) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email}
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password}
                type="password"
                placeholder="Password"
              />
            </div>

            <button className="btn" type="submit">
              Login
            </button>
            <p>Create Account ? 
            <Link  href="/signup">
        Signup
      </Link>
 </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
