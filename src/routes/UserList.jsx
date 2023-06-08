export default function UserList() {
  return(
    <div className="user_list box_ty01 inner">
      <div className="filter_wrap d-flex flex-ac">
        <div className="select_input input_ty02">
          <input type="text" defaultValue="최근 가입일 순" readOnly/>
          <ul className="select_box">
            <li>최근 가입일 순</li>
          </ul>
        </div>
        <div className="select_input input_ty02">
          <input type="text" defaultValue="계정 활성화" readOnly/>
          <ul className="select_box">
            <li>계정 활성화</li>
          </ul>
        </div>
      </div>
    </div>
  )
}