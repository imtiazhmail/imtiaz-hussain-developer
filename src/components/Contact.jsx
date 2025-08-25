import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter 
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="pb-5 bg-gray-50 dark:bg-gray-900 scroll-mt-5 md:scroll-mt-20" >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 pt-8">
        
        {/* Left Side - Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Details */}
        <div className="flex flex-col justify-between space-y-8">
          
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <FaEnvelope className="text-indigo-600 text-3xl mb-3" />
              <p className="text-gray-900 dark:text-white font-semibold">Email</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                imtiazh346@gmail.com
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <FaPhoneAlt className="text-indigo-600 text-3xl mb-3" />
              <p className="text-gray-900 dark:text-white font-semibold">Phone</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                +92 300 3360499
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition col-span-2">
              <FaMapMarkerAlt className="text-indigo-600 text-3xl mb-3" />
              <p className="text-gray-900 dark:text-white font-semibold">Location</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Lahore, Pakistan
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/imtiazhmail" target="_blank" rel="noreferrer">
                <FaGithub className="text-white text-3xl hover:scale-125 transition" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-white text-3xl hover:scale-125 transition" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter className="text-white text-3xl hover:scale-125 transition" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
