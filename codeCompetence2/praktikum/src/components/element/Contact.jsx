import { useState } from 'react';
import AtomContact from '../atom/atomContact';
import AtomInput from '../atom/atomInput';

const Contact = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    chatHelp: '',
  };

  const [data, setData] = useState(initialValue);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const newData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      chatHelp: data.chatHelp,
    };

    alert(`Nama : ${newData.firstName} ${newData.lastName} email : ${newData.email}, Why : ${newData.chatHelp}`);

    setData(initialValue);
  };

  return (
    <div className=" pt-20 pb-20 bg-slate-300">
      <div className="container">
        <AtomContact />
        <div className="mt-20 ">
          <form className="w-1/2 mx-auto">
            <div className="flex flex-wrap justify-center">
              <AtomInput style="w-1/2" text="text" name="firstName" handleChange={handleChange} placeholder="First Name" value={data.firstName} />
              <AtomInput style="w-1/2" text="text" name="lastName" handleChange={handleChange} placeholder="Last Name" value={data.lastName} />
              <AtomInput style="w-full mt-5" text="email" name="email" handleChange={handleChange} placeholder="Email" value={data.email} />
              <textarea className="w-full rounded-md p-5 mt-5" placeholder="why ?" name="chatHelp" onChange={handleChange} value={data.chatHelp} />
            </div>
            <button onClick={handleClick} className="w-full bg-primary py-3 text-2xl font-semibold uppercase text-white rounded-md mt-14">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
