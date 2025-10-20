'use client';

import React from 'react';
import { MessageSquare } from "lucide-react";
import { type FormEvent } from 'react';

export default function ContactAndSupport() {
  return (
        <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A472A] rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 text-[#F9F6F2]">
                <h2 className="text-3xl font-bold">Need Help with Your Project?</h2>
                <p className="mt-4 text-[#F9F6F2]/90">
                  Our team of experts is ready to assist you at every step of your construction journey.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#DAA520] rounded-full flex items-center justify-center">
                      <MessageSquare className="text-[#1A472A]" size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Live Chat</h4>
                      <p className="text-sm text-[#F9F6F2]/90">Talk to our support team instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#DAA520] rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A472A]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Email Support</h4>
                      <p className="text-sm text-[#F9F6F2]/90">support@buildeaze.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#DAA520] rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A472A]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Phone Support</h4>
                      <p className="text-sm text-[#F9F6F2]/90">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-[#F9F6F2] p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#2F2F2F]">Send us a message</h3>
                <form className="mt-6 space-y-4" onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    // Add form submission logic here
                    const formData = new FormData(e.currentTarget);
                    const data = {
                      name: formData.get('name'),
                      email: formData.get('email'),
                      message: formData.get('message'),
                    };
                    console.log('Form data:', data);
                    // Reset form
                    e.currentTarget.reset();
                  }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2F2F2F]">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-[#1A472A]/20 shadow-sm focus:border-[#1A472A] focus:ring-[#1A472A] bg-white p-2" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2F2F2F]">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-[#1A472A]/20 shadow-sm focus:border-[#1A472A] focus:ring-[#1A472A] bg-white p-2" 
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2F2F2F]">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-md border-[#1A472A]/20 shadow-sm focus:border-[#1A472A] focus:ring-[#1A472A] bg-white p-2" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-[#1A472A] text-[#F9F6F2] py-2 px-4 rounded-md hover:bg-[#1A472A]/90 focus:outline-none focus:ring-2 focus:ring-[#1A472A] focus:ring-offset-2 transition-colors duration-200">
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