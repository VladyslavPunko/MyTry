import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import { singInSchema } from "./singInSchema";

import css from "./SignInForm.module.css";
import { NavLink } from "react-router-dom";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singInSchema),
  });

  const onSubmit = async (data) => {
    try {
      //   спочтку так потім черз діспатч ганяєм на бєк
      const response = await axios.post("/api/login", data);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Збереження токена в localStorage
        window.location.href = "/tracker"; // Перенаправлення на сторінку TrackerPage
      }
    } catch (error) {
      toast.error(error.response?.data.message || "An error occurred");
    }
  };

  return (
    <div className={css.container}>
      <div className={css.left}>
        <h1>AquaTrack</h1>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label>Password</label>
            <input type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">Sign IN</button>
        </form>

        <p>Don’t have an account? (Sign Up) - це треба закатати в навлінк </p>
      </div>
      <div className={css.raight}>
        <p>
          Тут буде картинка але її можна залупашити як константу і
          перевикористовувати на їоум сінг та санйап
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
