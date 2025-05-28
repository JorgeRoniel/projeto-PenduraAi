import { Button } from "../../components/button/button";
import "./login.css";

export function Login() {
  return (
    <>
      <div id="tela-login">
        <form action="submit">
          <input type="text" name="" className="input-login" />
          <input type="password" name="" className="input-login" />

          <Button />
        </form>
      </div>
    </>
  );
}
