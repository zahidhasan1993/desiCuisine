import React from 'react';

const Feedback = () => {
    return (
        <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl text-red-700 leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Feedback
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-500">
              Please leave your feedback below:
            </p>
            <form  className="mt-8">
              <div className="rounded-md shadow-sm">
                <textarea
                  id="feedback"
                  rows="3"
                  placeholder="Type your feedback here"
                  className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn btn-error hover:bg-red-500 text-white"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Feedback;