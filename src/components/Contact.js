const Contact =()=>{
    return <div>
        <h1 className="font-bold text-3xl p-4 m-4">contact us</h1>
        <h2 className="font-bold text-3xl p-4 m-4">9511357157</h2>
        <form>
            <input placeholder="name" className="border border-black rounded-md m-4"></input>
            <input placeholder="message" className="border border-black rounded-md m-4"></input>
            <button className="border border-black rounded-md m-4 w-16 bg-gray-100">submit</button>
        </form>
    </div>
}
export default Contact;