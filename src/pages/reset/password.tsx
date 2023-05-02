import { Form, Formik } from "formik";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "@/components/common/CustomButton/CustomBottom";
import CustomInput from "@/components/common/CustomInputIcon/CustomInputIcon";
import Unauth from "@/components/layout/Unauth";
import Swal from "sweetalert2";

export default function ResetPassword() {
  return (
    <Unauth
      link={{ href: "/", text: "Lembrou sua senha?", textLinkable: "Login" }}
    >
      <>
        <h5 className={"text-2xl font-black text-gray-600 mb-10"}>
          Esqueci minha senha
        </h5>

        <Formik
          initialValues={{
            login: "",
            email: "",
          }}
          onSubmit={(values, actions) => {
            const success = false;
            if (success) {
              Swal.fire({
                title: "Sucesso!",
                text: "Um e-mail para alteração de senha foi enviado ao administrador",
                icon: "success",
                iconColor: "#FFA608",
                confirmButtonColor: "#FFA608",
              });
            } else {
              Swal.fire({
                title: "Oops! Algo deu errado.",
                text: "Houve um problema ao tentar realizar esta ação. Tente novamente em alguns minutos.",
                icon: "error",
                iconColor: "#D32F2F",
                confirmButtonColor: "#D32F2F",
              });
            }
          }}
        >
          {(props) => (
            <Form>
              <CustomInput
                name={"login"}
                placeholder="Digite o seu usuário"
                label={"Usuario"}
                type={"text"}
                icon={faUser}
              />
              <CustomInput
                name={"email"}
                placeholder="Digite o seu e-mail"
                label={"E-mail"}
                type={"text"}
                icon={faSquareEnvelope}
              />
              <div className="mt-10">
                <CustomButton text="Enviar" />
              </div>
            </Form>
          )}
        </Formik>
      </>
    </Unauth>
  );
}
