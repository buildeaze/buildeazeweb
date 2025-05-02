import { MessageSquare } from "lucide-react";

export default function ContactAndsupport(){
    return(
        <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold">Need Help with Your Project?</h2>
                <p className="mt-4 text-blue-100">
                  Our team of experts is ready to assist you at every step of your construction journey.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageSquare className="text-white" size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Live Chat</h4>
                      <p className="text-sm text-blue-100">Talk to our support team instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Email Support</h4>
                      <p className="text-sm text-blue-100">support@buildeaze.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Phone Support</h4>
                      <p className="text-sm text-blue-100">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                <form className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" 
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}