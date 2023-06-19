import { Link, useParams } from "react-router-dom";
import { Pagination } from "../../components/bundle_components";

export default function ChallengeListDetailModal(props) {
  const {modalClose} = props;  
  const { id } = useParams();

  return(
    <>     
      <div className="ch_list_modal modal box_ty01">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="참여 횟수 높은 순" readOnly />
              <ul className="select_box">
                <li>참여 횟수 높은 순</li>
                <li>참여 횟수 낮은 순 </li>
              </ul>
            </div>           
          </div>
          <div className="input_ty02">
            <input type="text" placeholder="아이디 입력" />  
          </div>  
          <button type="button" className="btn_ty01 btn_search">
            검색
          </button>
        </div>
        <div className="table_wrap">
          <table className="table">
            <colgroup>
              <col width={"150px"}/>
              <col width={"auto"}/>
              <col width={"auto"}/>
            </colgroup>
            <thead>
              <tr className="main_tit">
                <th colSpan={3}>대중교통 이용하기 프로젝트</th>
              </tr>
              <tr>
                <th>NO</th>
                <th>아이디</th>
                <th>참여 횟수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td><Link to={"/UserPromoHis/UserPromoHisDetail/" + id}>wizzzzz2</Link></td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td><Link to={"/UserPromoHis/UserPromoHisDetail/" + id}>abc1234</Link></td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="foot_btn_wrap d-flex flex-ac">
          <button type="button" className="btn_ty01" onClick={modalClose}>
            확인
          </button>    
        </div>
        <Pagination />
      </div>
    </>
  )
}