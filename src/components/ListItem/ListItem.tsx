import { Dispatch, SetStateAction } from "react";
import { IUser } from "../../App";

interface IListitem {
  name: string;
  id: number;
  currentUserSetter: Dispatch<SetStateAction<IUser | undefined>>;
  currentUser: IUser | undefined;
}

const ListItem = ({ id, name, currentUserSetter, currentUser }: IListitem) => {
  //const [itemClass, setItemClass] = useState<string>('listItem');

  function clickHandler(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    
    currentUserSetter({id, name});
    //setItemClass("listItem listItemSelected");
    //setPrevSelectedItem(()=> name)
    
  }

  return (
    <li className={currentUser ? currentUser.id === id ? 'listItem listItemSelected' : 'listItem' : 'listItem'}>
      <a href="" title={name} onClick={clickHandler}>{name}</a>
    </li>
  )
}

export default ListItem
