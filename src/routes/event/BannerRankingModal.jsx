import banner from "../../assets/img/banner.png";
import CheckBox from "../../components/CheckBox";

export default function BannerRankingModal(props) {
  const {modalClose} = props;  
  return(
    <>
      <div className="banner_ranking_modal modal box_ty01">
        <h4 className="modal_tit">메인 상단 배너</h4>
        <div className="table_wrap line">
          <table className="table"> 
            <colgroup>
              <col width={"30px"}/>
              <col width={"30px"}/>
              <col width={"120px"}/>
              <col width={"80px"}/>
              <col width={"80px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
              </tr>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>2</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
              </tr>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>3</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
              </tr>
            </tbody>
          </table>
        </div>          
        <div className="button_wrap">
          <button type="button" className="btn_ty01 gray" onClick={modalClose}>취소</button>
          <button type="button" className="btn_ty01">추가</button>         
        </div>    
      </div>
    </>
  )
}