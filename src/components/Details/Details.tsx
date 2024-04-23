import { useEffect, useState } from "react";
import { IUser } from "../../App"

interface IDetails {
  info: IUser | undefined;
}

interface IUserDetailsInfo {
  city: string;
  company: string;
  position: string;
}

interface IUserInfo {
  id: number;
  name: string;
  avatar: string;
  details: IUserDetailsInfo;
}

const Details = ({ info }: IDetails) => {
  const [currentUserInfo, setCurrentUserInfo] = useState<IUserInfo>();

  useEffect(() => {
    if (info?.id !== currentUserInfo?.id) {
      if (info && info.id !== 0) {
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
          .then(res => res.json())
          .then(result => setCurrentUserInfo(result));
      }
    }
  }, [info]);
  

  return (
    <div className="details">
      {currentUserInfo ? 
      <>
        <div className="datailSubEl detailImgCont"><img src={currentUserInfo.avatar + '?img=' + currentUserInfo.id} alt={currentUserInfo.name} /></div> 
        <div className="datailSubEl datailHeader">{currentUserInfo.name}</div>
        <div className="datailSubEl">City: {currentUserInfo.details.city}</div>
        <div className="datailSubEl">Company: {currentUserInfo.details.company}</div>
        <div className="datailSubEl">Position: {currentUserInfo.details.position}</div>
      </>
      : ''}
    </div>
  )
}

export default Details


/*

useEffect(() => {
    if (info?.id !== currentUserInfo?.id) {
      let url: string;
      if (!info || info.id === 0) {
        url = '';
      } else {
        url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`;
        fetch(url)
          .then(res => res.json())
          .then(result => setCurrentUserInfo(result));
      }
    }
  }, [info]);
  console.log(currentUserInfo?.avatar);

  */