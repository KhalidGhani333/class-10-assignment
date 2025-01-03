export default function Contact() {
    return (
      <div className="bg-gray-50 py-16 px-6 md:px-20 lg:px-40">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions or feedback? We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                📍
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Our Office</h4>
                <p className="text-gray-600">123 Main Street, City, Country</p>
              </div>
            </div>
  
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                📞
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>
  
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                ✉️
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email Us</h4>
                <p className="text-gray-600">support@example.com</p>
              </div>
            </div>
          </div>
  
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  