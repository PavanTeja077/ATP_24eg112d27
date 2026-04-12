function User(props){
    //console.log(props)
    const{user} =props;
    return(
        <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-700 bg-white mt-2.5 hover:scale-110">
        <img  className="block mx-auto rounded-3xl mt-5" src={user.image} alt="Image not available" />
        <p className="font-bold text-amber-200">{user.name}</p>
        <p className="font-medium mt-5">{user.email}</p>
        </div>
    );
};
export default User;