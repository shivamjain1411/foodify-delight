import User from "./User";

const About=()=>{
    return <div className="text-center p-4 m-4 bg-gray-300 rounded-lg">
        <User name="shivam from functional component" />
        <p className="font-bold text-lg">created by @shivam jain</p>
    </div>
}
export default About;