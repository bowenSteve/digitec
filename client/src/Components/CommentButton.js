import React, { useState } from 'react';

const CommentButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', comment: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-black border-none pt-4 pb-4 pl-10 pr-16 text-base rounded-full relative hover:shadow-lg transition-shadow duration-300"
      >
        <span className="relative z-10 text-center font-semibold text-base pr-2">
          Leave a comment
        </span>
        <div className={`absolute bg-red-500 rounded-full flex justify-center items-center z-10 text-white w-8 h-8 right-2 top-2 transition-transform duration-500 ${isOpen ? '-rotate-45' : 'hover:-rotate-45'}`}>
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 15.2L18.8 16H4V4h16z"></path>
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-4 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 animate-dropdown">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-gray-700 font-semibold">Comment submitted!</p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Leave a comment</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    name="comment"
                    placeholder="Your comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown {
          animation: dropdown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CommentButton;
