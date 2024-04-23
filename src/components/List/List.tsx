import ListItem from "../ListItem/ListItem"
import { IUser } from "../../App"
import { Dispatch, SetStateAction } from "react";

interface IUsers {
  users: IUser[];
  currentUserSetter: Dispatch<SetStateAction<IUser | undefined>>;
  currentUser: IUser | undefined;
}

const List = ({ users, currentUserSetter, currentUser }: IUsers) => {

  return (
    <ul className="list">
      {users.map(e => <ListItem key={e.id} id={e.id} name={e.name} currentUser={currentUser} currentUserSetter={currentUserSetter} />)}
    </ul>
  )
}

export default List
