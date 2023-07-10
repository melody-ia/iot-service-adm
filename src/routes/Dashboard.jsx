import ChartArea from "../components/ChartArea";
import ChartAreaStacked from "../components/ChartAreaStacked";
import ChartCircle from "../components/ChartCircle";
import ChartColumn from "../components/ChartColumn";

export default function Dashboard() {  
  return(
    <div className="dashboard">
      <div className="row row1">
        <div className="box_ty01">
          <span className="circle_icon graph"></span>
          <div className="text_wrap">
            <h4 className="tit">TEXT</h4>
            <strong className="text">558588</strong>
          </div>
        </div>
        <div className="box_ty01">
          <span className="circle_icon dollar"></span>
          <div className="text_wrap">
            <h4 className="tit">TEXT</h4>
            <strong className="text">558588</strong>
          </div>
        </div>
        <div className="box_ty01">
          <span className="circle_icon people"></span>
          <div className="text_wrap">
            <h4 className="tit sm">TEXT</h4>
            <strong className="text">558588</strong>
          </div>
        </div>
        <div className="box_ty01">
          <span className="circle_icon document"></span>
          <div className="text_wrap">
            <h4 className="tit">TEXT</h4>
            <strong className="text">558588</strong>
          </div>
        </div>
        <div className="box_ty01">
          <span className="circle_icon card"></span>
          <div className="text_wrap">
            <h4 className="tit">TEXT</h4>
            <strong className="text">558588</strong>
          </div>
        </div>
      </div>
      <div className="row row2">
        <div className="box_ty01 graph_ty01">
          <div className="box_head d-flex flex-js">
            <h4 className="tit">TEXT</h4>
            <button className="dot_menu"></button>
          </div>
          <div className="box_body d-flex flex-js">
            <div className="box_body_left">
              <p className="text">text</p>
              <span className="date c_gray">Last 7 days</span>
              <strong>555415</strong>
              <div className="figure_wrap">
                <span className="up">6%</span>
                <span className="c_gray">vs last 7 days</span>
              </div>
            </div>
            <div className="box_body_right">
              <ChartArea />
            </div>
          </div>
        </div>
        <div className="box_ty01 graph_ty02">
          <div className="box_head d-flex flex-js">
            <h4 className="tit">TEXT</h4>
            <button className="dot_menu"></button>
          </div>
          <div className="box_body">
            <ChartCircle />
          </div>
        </div>
        <div className="box_ty01 graph_ty03">
          <div className="box_head d-flex flex-js">
            <h4 className="tit">TEXT</h4>
            <button className="dot_menu"></button>
          </div>
          <div className="box_body">
            <ChartAreaStacked />
          </div>
        </div>
      </div>
      <div className="row row3">
        <div className="table_wrap box_ty01">
          <div className="table_type">
            <div className="box_head d-flex flex-js">
              <h4 className="tit">신규 가입 회원</h4>
              <button className="dot_menu"></button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th className="id">아이디</th>
                  <th className="name">이름</th>
                  <th className="gender">성별</th>
                  <th>생년월일</th>
                  <th>거주인원 수</th>
                  <th>이메일</th>
                  <th>휴대폰 번호</th>
                  <th>가입일</th>
                  <th>계정활성화여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="id">wizzzzzzzzzzz</td>
                  <td className="name">김위즈</td>
                  <td className="gender">남</td>
                  <td>1990.10.01</td>
                  <td>3</td>
                  <td>kimwewew<br />@naver.com</td>
                  <td>010-1111-1111</td>
                  <td>2023.05.08</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>wizzzzzzzzzzz</td>
                  <td>김위즈</td>
                  <td>남</td>
                  <td>1990.10.01</td>
                  <td>3</td>
                  <td>kimwewew<br />@naver.com</td>
                  <td>010-1111-1111</td>
                  <td>2023.05.08</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>wizzzzzzzzzzz</td>
                  <td>김위즈</td>
                  <td>남</td>
                  <td>1990.10.01</td>
                  <td>3</td>
                  <td>kimwewew<br />@naver.com</td>
                  <td>010-1111-1111</td>
                  <td>2023.05.08</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>wizzzzzzzzzzz</td>
                  <td>김위즈</td>
                  <td>남</td>
                  <td>1990.10.01</td>
                  <td>3</td>
                  <td>kimwewew<br />@naver.com</td>
                  <td>010-1111-1111</td>
                  <td>2023.05.08</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bar_graph box_ty01">
          <h4 className="tit">주간 방문자 수<button className="dot_menu"></button></h4>
        <ChartColumn />
        </div>
      </div>
    </div>
  )
}