import React, { use } from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const storedPassword = JSON.parse(localStorage.getItem("password"));
    if (storedPassword) {
      setPasswordArray(storedPassword);
    }
  }, []);

  const showPassword = () => {
    alert("Show Password");
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  }

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="mycontainer ">
        <h1 className="text-gray-200 text-4xl font-bold text-center">PASS - HUB</h1>
        <p className="text-gray-300 text-center">Your Own Password Manager</p>

        <div className="flex flex-col p-4 text-white gap-8 items-center">
          <input type="text" name="site" value={form.site} onChange={handleChange} placeholder="Enter Website URL" className="text-[#203149] border-1 border-zinc-600 bg-gray-100 rounded-full p-4 py-1 w-full" />

          <div className="flex w-full justify-between gap-3">
            <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Enter Username" className="text-[#203149] border-1 border-zinc-600 bg-gray-100 rounded-full w-full p-4 py-1" />
            <div className="relative">
              <input type="text" name="password" value={form.password} onChange={handleChange} placeholder="Enter Password" className="text-[#203149] border-1 border-zinc-600 bg-gray-100 rounded-full w-full p-4 py-1" />
              <span className="text-black absolute right-[5px] top-[5px] opacity-70 cursor-pointer" onClick={showPassword}>
                <img ref={ref} className="p-1" width={25} src="icons/eye.png" />
              </span>
            </div>
          </div>

          <button className="border-3 border-[#475677] bg-[#475677] hover:bg-[#203149] text-white rounded-full p-2" onClick={savePassword}>Add Password</button>
        </div>

        <div className="passwords">
        <h2 className="w-full text-gray-300 text-2xl font-bold mt-6 ">Your Passwords</h2>
        {passwordArray.length == 0 && <div className="text-gray-300 m-3">No Passwords Saved</div>}
        {passwordArray.length != 0 && (
          <table className="table-auto w-full text-left text-gray-200 mt-5 border-separate border-spacing-y-2 border-1 p-2 border-gray-800">
            <thead className="bg-gray-800">
              <tr>
                <th>Site</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item) => {
                return (
                  <tr key={item.site}>
                    <td><a href={item.site} target="_blank">{item.site}</a></td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  </>
  );
};

export default Manager;
