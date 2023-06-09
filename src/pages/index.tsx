import { Form, Formik } from "formik";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "@/components/common/CustomButton/CustomBottom";
import CustomInput from "@/components/common/CustomInputIcon/CustomInputIcon";
import Unauth from "@/components/layout/Unauth";
import { signin } from "@/consumers/signin";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import React from "react";

export default function Signin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Unauth
      link={{ href: "/reset/password", textLinkable: "Esqueceu sua senha?" }}
    >
      <>
        <h5 className={"text-2xl font-black text-gray-600 mb-10"}>Sign In</h5>

        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={async (values, actions) => {
            setIsLoading(true);
            try {
              const response = await signin({
                username: values.username,
                password: values.password,
              });

              if (response) router.push("/home");
            } catch (err: any) {
              console.error(err);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo deu errado.",
              });
            } finally {
              setIsLoading(false);
            }
          }}
        >
          {(props) => (
            <Form>
              <CustomInput
                name={"username"}
                placeholder="Digite o seu usuário"
                label={"Usuario"}
                type={"text"}
                icon={faUser}
              />
              <CustomInput
                name={"password"}
                placeholder="Digite a sua senha"
                label={"Senha"}
                type={"password"}
                icon={faLock}
              />
              <div className="mt-10">
                <CustomButton text="Acessar" />
              </div>
            </Form>
          )}
        </Formik>
      </>
    </Unauth>
  );
}
