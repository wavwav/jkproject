// import styled from "styled-components";


export const StyledComponents = () =>{
return(
  <div>
  {/* <Container> */}
  <p>
- StyledComponents -
  </p>
  <button>Fight!</button>
{/* </Container> */}
</div>
)

};

// Styleを当てたコンポーネントなのか、他からインポートしたコンポーネントなのかわからなくなってしまうため、注意
// importしたものの名前.タグ名で使用できる(オーソドックスな書き方)
// const Container = styled.div`
//   border: solid 2px #392eff;
//   border-radius: 20px;
//   padding: 8px;
//   margin: 8px;
//   display: flex;
//   justify-content: space-arround;
//   align-items: center;
// `
