import assets from "../assets/assets";
import Title from "./Title";
import toast from "react-hot-toast";

const ContactUs = () => {
  console.log("WEB3 KEY:", import.meta.env.VITE_WEB3FORMS_KEY);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section
      id="contact-us"
      className="flex flex-col items-center gap-7 pt-30 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="text-sm font-medium mb-2">Your name</p>
          <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full outline-hidden p-3 text-sm"
              required
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Email id</p>
          <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full outline-hidden p-3 text-sm"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="text-sm font-medium mb-2">Message</p>
          <textarea
            rows={8}
            name="message"
            placeholder="Enter your message"
            className="border border-gray-300 p-3 text-sm outline-hidden rounded-lg dark:border-gray-600 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="w-max bg-primary flex gap-2 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit <img src={assets.arrow_icon} className="w-4" alt="" />
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
