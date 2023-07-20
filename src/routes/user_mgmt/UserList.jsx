 import { Link } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserList() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    sort_join: ["최근 가입일 순", "오래된 가입일 순"],
    account_type: ["전체", "계정 활성화", "계정 비활성화"],
  });

    const navigate = useNavigate();
    const btnEvent = {
        add(){
            navigate('/UserList/add');
        }
    }

    const [ allCheck, setAllCheck ] = useState(false);
    const [ firstCheck, setFirstCheck ] = useState(false);
    const [ secondCheck, setSecondCheck ] = useState(false);

    const handleAllCheck = () => {
        setAllCheck(!allCheck);
        setFirstCheck(!firstCheck);
        setSecondCheck(!secondCheck);
    }
    
    const handleFirstCheck = () => {
        setFirstCheck(!firstCheck);
    }
    
    const handleSecondCheck = () => {
        setSecondCheck(!secondCheck);
    }
    
    useEffect(() => {
        if(firstCheck === true && secondCheck === true){
            setAllCheck(true);
        }else{
            setAllCheck(false);
        }
    }, [firstCheck, secondCheck]);

  return (
    <>
      <Lnb lnbType="user" />
      {/* <CurrentBox add={true} mod={true} del={true} down={true} tit="회원리스트" /> */}
      <CurrentBox btns={["add", "mod", "del", "down"]} tit="회원리스트" {...btnEvent}/>
      <div className="user_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="m-txt-4 btn_ty01 btn_search">검색</button>
        </div>
        <div className="table_wrap part">
          <table className="table reTable ">
            <thead>
                <tr>
                    <th className="check"><CheckBox for="wr_all" id="wr_all" name="wr_all" onClick={handleAllCheck} checked={allCheck ? "checked" : ""}/></th>
                    <th className="num">NO</th>
                    <th className="id">아이디</th>
                    <th className="name">이름</th>
                    <th className="gender">성별</th>
                    <th className="birth">생년월일</th>
                    <th className="people">거주인원 수</th>
                    <th className="email">이메일</th>
                    <th className="phone">휴대폰 번호</th>
                    <th className="joinDate">가입일</th>
                    <th className="active">계정활성화여부</th>
                    <th className="etc">비고</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="check"><CheckBox for="wr_1" id="wr_1" name="wr_1" onClick={handleFirstCheck}  checked={firstCheck ? "checked" : ""}/></td>
                    <td className="num">100</td>
                    <td className="id disabled"><Link to="/UserBasicInfo/wizzzzzzzzzzz2">wizzzzzzzzzzz</Link></td>
                    <td className="name">김위즈</td>
                    <td className="gender">남</td>
                    <td className="birth">1999.10.01</td>
                    <td className="people">3</td>
                    <td className="email">kimwewewa<br/>@naver.com</td>
                    <td className="phone">010-1111-1111</td>
                    <td className="joinDate">2023.05.08</td>
                    <td className="active">X</td>
                    <td className="etc input_ty02 userlist"><input type="text" placeholder='직접입력' /></td>
                </tr>
                <tr>
                    <td className="check"><CheckBox for="wr_2" id="wr_2" name="wr_2" onClick={handleSecondCheck} checked={secondCheck ? "checked" : ""}/></td>
                    <td className="num">100</td>
                    <td className="id disabled"><Link to="/UserBasicInfo/wizzzzzzzzzzz2">wizzzzzzzzzzz</Link></td>
                    <td className="name">김위즈</td>
                    <td className="gender">남</td>
                    <td className="birth">1999.10.01</td>
                    <td className="people">3</td>
                    <td className="email">kimwewewa<br/>@naver.com</td>
                    <td className="phone">010-1111-1111</td>
                    <td className="joinDate">2023.05.08</td>
                    <td className="active">X</td>
                    <td className="etc input_ty02 userlist"><input type="text" placeholder='직접입력' /></td>
                </tr>
            </tbody>
          </table>
        </div>
        {/* <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} /> */}
        <CurrentBox btns={["add", "mod", "del", "down"]} hideTit={true} {...btnEvent}/>
        <Pagination />
      </div>
    </>
  );
}
