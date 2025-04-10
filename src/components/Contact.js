const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="message"
        ></input>
        <button className="border border-black m-2 p-2 bg-gray-400 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
