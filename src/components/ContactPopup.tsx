import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import StatusPopup from "./StatusPopup";
import Lottie from "react-lottie-player";// Agar Lottie use karna hai to install aur uncomment karein
import animationData from "../assets/karty-najnowsze.json"; // Agar Lottie file chahiye to yeh bhi uncomment karein
interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) =>  {
  const [status, setStatus] = React.useState<'success' | 'error' | null>(null);
  const [statusMessage, setStatusMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Store form reference before await
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/send_mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Message sent successfully!');
        form.reset(); // Use stored reference
        // Don't close immediately so user sees success
        // onClose(); 
      } else {
        setStatus('error');
        setStatusMessage('Failed to send message.');
      }
    } catch (error: any) {
      console.error('Error:', error);
      setStatus('error');
      setStatusMessage(`Error: ${error.message || 'Unknown error'}`);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-[#00ff99]/20 backdrop-blur-lg "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Popup Content */}
          <motion.div
            className="relative bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg 
              w-[95%] lg:w-[80%] xl:w-[70%] max-h-[90vh] overflow-y-auto rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-black z-10"
            >
              &times;
            </button>

            {/* Contact Section */}
            <section>
              <div className="lg:border-4 border border-black flex flex-col xl:flex-row w-full rounded-2xl sm:p-10 lg:p-12 gap-10">
                {/* Left Text */}
                <div className="w-full xl:w-2/5 py-6 text-center lg:text-left">
                  <h1 className="text-[25px] sm:text-[40px] md:text-[50px] lg:text-[54px] font-extrabold leading-tight pt-6 mb-24">
                    It might be your <br className="lg:hidden block" />
                    <span className="text-[#00ff99]">lucky draw!</span>
                    <br className="lg:hidden block" /> Contact us today.
                  </h1>

                  {/* Agar Lottie Animation chahiye to uncomment karo */}
                  <div className="w-auto 2xl:h-[350px] xl:h-[280px] md:h-[360px] h-[260px] ">
            <Lottie loop play animationData={animationData} />
          </div>

                  <h3 className="md:text-lg text-xs md:leading-8 leading-6 text-[#171717]">
                    Your business seems to be stuck at some level? Maybe you are
                    about to finalize your dream ideas and kick off with a new
                    venture? Let us know what’s on your mind, and we’ll see how we
                    can assist you.
                  </h3>
                </div>

                {/* Form */}
                <div className="w-full xl:w-3/5">
                  <form onSubmit={handleSubmit} className="space-y-5 bg-[#e8e8e8] border border-black/10 rounded-2xl p-4 sm:p-5 md:p-16 shadow-sm sm:border-[1px] md:border-[5px]">
                    <p className="text-[14px] mb-6 text-gray-500">
                      Book a video meeting <a href="https://calendly.com/hi-luckymedia/firstmeeting" className="text-black">here.</a>
                    </p>
                    <div>
                      <label className="block font-semibold mb-2">Your name</label>
                      <input
                        type="text"
                        name="name"
                        className="w-full rounded-lg border px-4 py-3"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Your email</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full rounded-lg border px-4 py-3"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="w-full rounded-lg border px-4 py-3"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">
                        Your message (optional)
                      </label>
                      <textarea
                        rows={6}
                        name="message"
                        className="w-full rounded-lg border px-4 py-3"
                      ></textarea>
                    </div>
                    <div>
                      <p className="font-bold">Permission to store your information</p>
                    </div>
                   <div>
                                 <p className="">
                                   I agree to the processing of my personal data in accordance with the &nbsp;
                                   <span>
                                   <Link to="/privacy" className="underline">
                                      Privacy Policy
                                   </Link>
                                   </span>
                                 </p>
                               </div>
                    <div>
  <label className="flex items-start gap-3 font-bold">
    <input
      type="checkbox"
      required
      className="
        mt-1 w-5 h-5
        border border-black
        rounded-[4px]
        appearance-none
        checked:bg-black
        checked:after:content-['✔']
        checked:after:text-white
        checked:after:flex
        checked:after:items-center
        checked:after:justify-center
        checked:after:h-full
        checked:after:w-full
        checked:after:text-sm
      "
    />
    To be contacted regarding my inquiry. (required)
  </label>
</div>

<div>
  <label className="flex items-start gap-3 font-bold">
    <input
      type="checkbox"
      className="
        mt-1 w-5 h-5
        border border-black
        rounded-[4px]
        appearance-none
        checked:bg-black
        checked:after:content-['✔']
        checked:after:text-white
        checked:after:flex
        checked:after:items-center
        checked:after:justify-center
        checked:after:h-full
        checked:after:w-full
        checked:after:text-sm
      "
    />
    To receive marketing and promotional information. (optional)
  </label>
</div>

                    <div>
                      <button
                        type="submit"
                        className="w-full mt-6 border-[5px] border-black bg-black text-white hover:text-[#00ff99] rounded-lg transition duration-500 hover:border-black hover:shadow-[0_0_30px_8px_rgba(0,255,170,0.9)] text-[17px] sm:text-[20px] md:text-[28px] lg:text-[35px] py-3 sm:py-4 md:py-0"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      <StatusPopup 
        status={status} 
        message={statusMessage} 
        onClose={() => {
            setStatus(null);
            if(status === 'success') onClose(); // Close main popup on success close
        }} 
      />
    </AnimatePresence>
  );
};

export default ContactPopup;
