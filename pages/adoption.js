import BioText from "components/BioText";
import ContactLabel from "components/ContactLabel";
import { category } from "lib/category";
import { isPossiblePhoneNumber } from "libphonenumber-js/min";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { formatPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import "react-phone-number-input/style.css";
import { useMutation } from "react-query";

export default function Adoption() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const { mutateAsync } = useMutation((newApp) =>
  
    fetch("/api/application", {
      method: "POST",
      body: JSON.stringify(newApp),
    }),
    {
      onSuccess: (data) => {
        console.log(data)
        reset();
        router.replace('/puppies')
      }
    }
  );

  async function onSubmit(data) {
    const {
      "full name": name,
      email,
      phone,
      address,
      city,
      state,
      "zip code": zip,
      puppy,
      why,
      owned,
      fenced,
      household,
      pets,
    } = data;
    const newApp = {
      name,
      email,
      phone: formatPhoneNumber(phone),
      address,
      city,
      state,
      zip,
      puppy,
      why,
      owned,
      fenced,
      household,
      pets,
    };
    mutateAsync(newApp);
    reset();
  }

  const Input = ({ label, type, placeholder, component }) => (
    <div className="inputWrapper relative">
      <label className="formLabel" htmlFor={label}>
        {label}
      </label>
      {component ? (
        component
      ) : (
        <input
          {...register(label, { required: `${label} is required` })}
          className="formInput font-fancy"
          type={type}
          placeholder={placeholder}
        />
      )}

      <span className="formErrorMsg">{errors[label]?.message}</span>
    </div>
  );

  const Select = ({ label, items }) => (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={label}>
        {label}
      </label>
      <select
        {...register(label, { required: `${label} is required` })}
        className="formInput font-fancy text-gray-500"
      >
        {items.map(({ value, optionName }) => (
          <option key={value} value={value}>
            {optionName}
          </option>
        ))}
      </select>
      <span className="formErrorMsg">{errors[label]?.message}</span>
    </div>
  );

  const Textarea = ({ question, label, number }) => (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={label}>
        {number}. <span>{question}</span>
      </label>
      <textarea
        {...register(label, {
          required: "is required",
        })}
        className="formInput font-fancy"
        name={label}
        id={number}
        cols="30"
        rows="3"
      />
      <span className="formErrorMsg top-7 sm:top-0">
        {errors[label]?.message}
      </span>
    </div>
  );

  const PersonalFields = () => (
    <section>
      <h3 className="titleField">Personal information</h3>
      <Input label="full name" type="text" placeholder="Full Name" />
      <Input label="email" type="email" placeholder="Email" />
      <div className="inputWrapper">
        <label className="formLabel" htmlFor="phone">
          phone
        </label>
        <PhoneInput
          className="formInput font-fancy"
          name="phone"
          placeholder="Phone"
          control={control}
          rules={{
            required: "phone is required",
            validate: (value) =>
              isPossiblePhoneNumber(value) || "VALID PHONE IS REQUIRED",
          }}
          country="US"
        />
        <span className="formErrorMsg">{errors.phone?.message}</span>
      </div>
    </section>
  );

  const AddressFields = () => (
    <section>
      <h3 className="titleField">Address</h3>
      <Input label="address" type="text" placeholder="1234 Example St" />
      <Input label="city" type="text" placeholder="City" />
      <Select label="state" items={category} />
      <Input label="zip code" type="number" placeholder="12345" />
    </section>
  );

  const QuestionFields = () => (
    <section>
      <h3 className="titleField">Questionnaire</h3>
      <Textarea
        number="1"
        label="puppy"
        question="Which puppy are you interested in?"
      />
      <Textarea
        number="4"
        label="why"
        question="Why do you want an Alaskan Malamute Puppy?"
      />
      <Textarea
        number="3"
        label="owned"
        question="Have you ever owned an Alaskan Malamute?"
      />

      <Textarea
        number="2"
        label="fenced"
        question="Do you have a fenced yard?"
      />
      <Textarea
        number="5"
        label="household"
        question="Please list everyone in your household and their ages."
      />
      <Textarea
        number="6"
        label="pets"
        question="Please list other pets (type, gender, and age)."
      />
    </section>
  );

  return (
    <div className="bg-gray-50">
      <BioText
        title="Adoption Application"
        description="If you are interested in owning one of our adorable puppies, please complete the adoption application below and submit for consideration."
        description1=""
      />
      <ContactLabel />
      <section className="pb-10 px-3 sm:px-8 md:px-16 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10 pb-20 max-w-2xl mx-auto"
        >
          <PersonalFields />
          <AddressFields />
          <QuestionFields />
          <div className="flex justify-center">
            <button className="formSubmitBtn px-10" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
