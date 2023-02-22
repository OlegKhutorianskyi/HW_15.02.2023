import s from "./style.module.css";
import UserContainer from "../UserContainer";


function App() {

  // const data = [
  //   {
  //     _id: Date.now(),
  //     name: 'Алексей',
  //     gender: "man",
  //     imageLink: 'https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg?w=670&h=377&crop=1'
  //   },
  //   {
  //     _id: Date.now(),
  //     name: 'Алексей',
  //     gender: "man",
  //     imageLink: 'https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg?w=670&h=377&crop=1'
  //   },
  //   {
  //     _id: Date.now(),
  //     name: 'Алексей',
  //     gender: "man",
  //     imageLink: 'https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg?w=670&h=377&crop=1'
  //   },
  //   {
  //     _id: Date.now(),
  //     name: 'Алексей',
  //     gender: "man",
  //     imageLink: 'https://www.indiewire.com/wp-content/uploads/2021/06/MCDAVAT_FE094.jpg?w=670&h=377&crop=1'
  //   },
  //   {
  //     _id: Date.now(),
  //     name: 'Светлана',
  //     gender: "woman",
  //     imageLink: 'https://www.golem.de/2209/168549-346531-346530_rc.jpg'
  //   },
  //   {
  //     _id: Date.now(),
  //     name: 'Светлана',
  //     gender: "woman",
  //     imageLink: 'https://www.golem.de/2209/168549-346531-346530_rc.jpg'
  //   }
  // ]

  
  // const [users, setUsers] = useState(
  //   JSON.parse(localStorage.getItem("users")) || data
  // );

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users));
  // }, [users]);
  

  
  // const cereateUser = (name, gender, imageLink) => {
  //   const newUser = {
  //     _id: Date.now(),
  //     name,
  //     gender,
  //     imageLink
  //   }
    
  //   const newArr = [...users, newUser];
  //     setUsers(newArr);

  // }



  return (
    <div className={s.global}>
        <UserContainer />
      </div>
  );
}

export default App;
