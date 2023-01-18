import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";
import { TFormData } from "./types";

const responseSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().phone().required(),
  })
  .required();

const ReportContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({ resolver: yupResolver(responseSchema) });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("name")} placeholder="Name" />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input {...register("email")} placeholder="Email" />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input
            {...register("phoneNumber")}
            placeholder="Phone number: +12345678901"
          />
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </section>
  );
};

export default ReportContactForm;
