import { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError('');
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    try {
      const response = await fetch('https://staterreactwithtailwind.onrender.com/api/send-email', {
        method: 'POST',
        body: formData,
      });

      const responseText = await response.text();
      console.log('Response text:', responseText);

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        Swal.fire('Success', 'Email sent successfully to ksrelectricals09@gmail.com.', 'success');
      } else {
        console.error('Error response:', responseText);
        setError('Error sending email');
        Swal.fire('Error', 'Error sending email', 'error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Error sending email');
      Swal.fire('Error', 'Error sending email', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 mt-20 bg-opacity-90">
      <div className="m-4 border-4 border-green-800 rounded-lg p-6 max-w-4xl w-full min-h-scree bg-blue-900 bg-opacity-10">
        <h1 className="text-3xl font-bold mb-4 text-orange-600">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Reach out to us for any inquiries or collaborations. We are here to assist you with
          your energy project needs.
        </p>
        <p className="text-lg text-gray-700">
          <strong>Reg Office:</strong> MuthukrishnaPuram, Appipatty - Po, Chinnamanur - Via,
          Theni Dt - 625515<br />
          <strong>Branch Office:</strong> F3, First Floor, Plot 10,11, Modern Nagar,
          Dindigul 624001<br />
          <strong>Email:</strong> ksrelectricals09@gmail.com<br />
          <strong>Phone:</strong> 9788146951
        </p>
        <div className="feedback-form relative bg-gray-200 bg-opacity-5 p-8 mt-8 rounded-lg shadow-md max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto focus-within:bg-gray-300 active:bg-gray-400 transition-colors duration-300">
          {loading && (
            <div className="loading-overlay flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50">
              <div className="text-white text-lg">
                <div className="loader border-t-4 border-b-4 border-white rounded-full w-12 h-12 mb-4 animate-spin"></div>
                Please wait, we are registering your feedback...
              </div>
            </div>
          )}
          {submitted && (
            <div className="text-green-500 text-xl font-bold text-center mb-4 animate-bounce">
              We have successfully received your enquiry. We will contact you soon.
            </div>
          )}
          {!submitted && (
            <div className="text-gray-700 text-center mb-4">
              Please fill the Form, we are happy to contact you back.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;