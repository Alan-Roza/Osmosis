import { Form, Formik } from "formik";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "@/components/common/CustomButton/CustomBottom";
import CustomInput from "@/components/common/CustomInputIcon/CustomInputIcon";
import Unauth from "@/components/layout/Unauth";

export default function Signin() {
  return (
    <Unauth
      link={{ href: "/reset/password", textLinkable: "Esqueceu sua senha?" }}
    >
      <>
        <h5 className={"text-2xl font-black text-gray-600 mb-10"}>Sign In</h5>

        <Formik
          initialValues={{
            login: "",
            password: "",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
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
