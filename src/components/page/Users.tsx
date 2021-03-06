import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"
import { useLocation } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

const users = [...Array(12).keys()].map(( val) => {
return {
  id: val,
   name: `yolo`,
  image: 'https://source.unsplash.com/yihlaRCCvd4',
  email: 'aaa.co.jp',
  phone:"090-1111-2222",
  company:{
    name: 'test株式会社'
  },
  website: "https:///google.com"
}

})


export const Users = () =>{

const {state} = useLocation();
// const isAdmin = state ? state : false;
const [userInfo,setUserInfo] = useRecoilState(userState);

const onClickSwitch = () =>{
  setUserInfo({isAdmin: !userInfo.isAdmin})
}


  return(
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
      {users.map((user) =>
        <UserCard  keys={user.id} user={user}/>
      )}
      </SUserArea>
    </SContainer>
  )
}

//　全ての要素を中央揃え
const SContainer = styled.div`
flex-direction: column;
align-items: center;
display:flex;
padding: 24px;
`

const SUserArea = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
grid-gap: 20px;
padding-top: 40px;
width: 100%;
`