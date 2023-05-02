import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useField } from "formik";

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  icon: IconDefinition;
}

const CustomInput = ({ label, type, placeholder, ...props }: InputProps) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="w-full mt-5">
      <label className="text-lg font-bold text-gray-600" htmlFor={props.name}>
        {label}
      </label>
      <div className="relative mt-2">
        <input
          className={`form-input w-full p-5 pl-10 text-ambar-light-input bg-ambar-light-input/20 hover:bg-ambar-light-input/30 focus:bg-ambar-light-input/30 rounded-md h-[50px] transition-all outline-none placeholder-ambar-light-input/50 ${
            meta.touched && meta.error ? "error" : ""
          } `}
          type={type}
          placeholder={placeholder}
          {...field}
          {...props}
        />
        <FontAwesomeIcon
          icon={props.icon}
          className="absolute pl-2 top-[15px] left-0 w-8 h-2/5"
          color="#FFA608"
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="form-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
